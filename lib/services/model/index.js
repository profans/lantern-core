import Blueprint from 'lantern-blueprint'

export default class Model {

  /**
   * Construct the service.
   * @param {Blueprint} Blueprint  The blueprint class loaded with drivers.
   * @param  {Array} models  A list of models to be registered.
   * @return {Model}  The Model Service.
   */
  constructor (models, config) {
    this.models = models
    this.config = config
  }

  /**
   * Return the Blueprint class
   */
  static get Blueprint () {
    return Blueprint
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

    return new this.Blueprint(this.models[name])
  }

  /**
   * Loop through each model and execute a callback with the model as the argument.
   * @param  {Function} callback  The callback for registration.
   * @return {undefined}
   */
  register (callback) {
    Object.keys(this.models).forEach(key => {
      callback(this.models[key])
    })
  }
}
