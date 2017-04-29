import AlgoliaDriver from './drivers/algolia-search-driver'
import ApiDriver from './drivers/api-search-driver'

export default class SearchService {

  /**
   * The constructor for the search service.
   * @param  {object} config Configuration for the search service.
   * @return {SearchService} The search service.
   */
  constructor (drivers, config) {
    this.drivers = drivers
    this.config = config
    this.driver = config.driver || 'no driver provided'
  }

  /**
   * Return the Algolia driver
   */
  static get AlgoliaDriver () {
    return AlgoliaDriver
  }

  /**
   * Return the Api driver
   */
  static get ApiDriver () {
    return ApiDriver
  }

  /**
   * Change the driver for the search service.
   * @param  {string} type  The type of driver.
   * @return {mixed}  The selected driver.
   */
  get driver () {
    return function (type) {
      if (this.drivers[type] === undefined) {
        return error(`The driver selected is not valid: '${type}'`, 'SearchService')
      }

      return this.drivers[type]
    }
  }

  /**
   * Set the selected driver from those that are available.
   * @param  {string} type  The driver to select.
   * @return {undefined}
   */
  set driver (type) {
    if (this.drivers[type] === undefined) {
      return error(`The driver selected is not valid: '${type}'`, 'SearchService')
    }

    this.selectedDriver = this.drivers[type]
  }

  /**
   * Send a search query to Algolia.
   * @param  {string} query The query to be searched.
   * @param  {array} config The indices to be searched.
   * @return {Promise} A promise that resolves with the response from Algolia.
   */
  search (query, config) {
    return this.selectedDriver.search(query, config)
  }

  /**
   * Search many indices using a single query
   * @param  {array} indices An array of indices to search.
   * @param  {string} query   The query to be searched.
   * @param  {object} params  An object of configuration for the search.
   * @return {Promise} A promise that resolves with the response from Algolia.
   */
  searchIndices (indices, query, params = {}) {
    return this.selectedDriver.searchIndices(indices, query, params)
  }

  /**
   * Search an index using a query.
   * @param  {string} index The index to be searched.
   * @param  {string} query   The query to be searched.
   * @param  {object} params  An object of configuration for the search.
   * @return {Promise} A promise that resolves with the response from Algolia.
   */
  searchIndex (index, query, params = {}) {
    return this.selectedDriver.searchIndex(index, query, params)
  }
}
