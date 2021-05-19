const axios = require('axios').default
const config = require('./requests-config')
const sleep = require('./utils').sleep
const _ = require('lodash')

class requests {
  #client = null
  #config = null

  constructor(cfg) {
    this.#config = config()
    if (cfg) {
      Object.entries(cfg).forEach(([key, value]) => {
        this.#config[key] = value
      })
    }
    this.#client = axios.create(this.#config)
  }

  async getURL(url, params = null) {
    const response = await this.#client.get(url, params)
    return response.data
  }

  async getPaginatedURL(url, pageInterval = 2000, params = null) {
    let data = await this.getURL(url, params)
    let raw_data = data.data
    if (_.has(data.links, 'next')) {
      while (true) {
        data = await this.getURL(data.links.next, params)
        raw_data = raw_data.concat(data.data)
        if (_.has(data.links, 'next')) {
          sleep(pageInterval)
          continue
        }
        break
      }
    }
    return raw_data
  }
}

module.exports = requests
