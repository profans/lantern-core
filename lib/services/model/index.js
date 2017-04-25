import Blueprint from 'lantern-blueprint'

export default class ModelService {

  /**
   * Construct the service.
   * @param  {Array} models  A list of models to be registered.
   * @return {ModelService}  The Model Service.
   */
  constructor (drivers, models, config) {
    Blueprint.load(drivers)
    this.config = config
    this.models = this.mapModels(models)
  }

  /**
   * Set the default properties on each model.
   * @param  {array} models  The models to register
   * @return {Object}  The mapped models.
   */
  mapModels (models) {
    return Object.keys(models).reduce((carry, key) => {
      carry[key] = {
        name: models[key].name || key.split('/').pop(),
        driver: models[key].driver || this.config.driver,
        namespace: models[key].namespace || key,
        location: models[key].location || key.split('/').pop(),
        with: models[key].with || [],
        hasMany: models[key].hasMany || [],
        belongsTo: models[key].belongsTo || [],
        id: models[key].id || null,
        attributes: models[key].attributes || {},
        transformRequest: models[key].transformRequest || function (data) { return data },
        transformResponse: models[key].transformResponse || function (data) { return data }
      }
      return carry
    }, {})
  }

  /**
   * Create a new Blueprint instance from a model.
   * @param  {string} name  The type of model to create.
   * @return {Blueprint}  The blueprint of that model.
   */
  create (name) {
    if (this.models[name] === undefined) {
      throw new Error(`You are trying to create an invalid model: ${name}`)
    }

    return new Blueprint(this.models[name])
  }

  /**
   * Loop through each model and execute a callback.
   * @param  {Function} callback  The callback for registration.
   * @return {undefined}
   */
  register (callback) {
    Object.keys(this.models).forEach(key => {
      callback(this.models[key])
    })
  }
}
