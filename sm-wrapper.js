const config = require('./sm-config')
const requests = require('./web/requests')

/**
 *  Classe SurveyAPI para acesso aos dados do Survey Monkey
 */
class SurveyApi {
  #client = null
  #access_token = null
  #config = null
  #endpoints = null

  /**
   * Método construtor da classe
   * @param {string} access_token - o token de acesso
   * @param {Object} [headers=null]  - configuração de headers (opcional)
   * @param {Object} [proxy =null] - configuração de proxy (opcional)
   * @param {Object} [customConfig=null] - configuração de URI e endpoints (opcional)
   */
  constructor(access_token, headers = null, proxy = null, customConfig = null) {
    this.#access_token = access_token
    this.#config = customConfig ?? config
    this.#config.headers.Authorization = `bearer ${access_token}`
    this.#endpoints = this.#config.endpoints
    this.#client = new requests(this.#config)
  }

  /**
   * Retorna a lista de pesquisas associada ao access token
   * @param {Object} params - Objeto JSON que será transformado em query string - opcional
   * @returns Objeto JSON de Pesquisa apenas com Id e Nome
   */
  async getSurveys(params = null) {
    const url = this.#endpoints['get_surveys']
    const data = await this.#client.getPaginatedURL(url, (params = params))
    return data
  }

  /**
   * Retorna o cabeçalho de uma pesquisa
   * @param {number} surveyId
   * @returns Objeto JSON com o cabeçalho da Pesquisa
   */
  async getSurvey(surveyId) {
    const url = this.#endpoints['get_survey'].replace('{surveyId}', surveyId)
    const data = await this.#client.getURL(url)
    return data
  }

  /**
   * Retorna todos os dados de uma pesquisa, incluindo respostas, respondentes, questões...
   * @param {number} surveyId
   * @returns Objeto JSON de Pesquisa
   */
  async getSurveyData(surveyId) {
    const url = this.#endpoints['get_survey_data'].replace(
      '{surveyId}',
      surveyId
    )
    const data = await this.#client.getPaginatedURL(url)
    return data
  }

  /**
   * Retorna a lista de respondentes
   * @param {number} surveyId
   * @returns Objeto JSON com os respondentes
   */
  async getSurveyRespondents(surveyId) {
    const url = this.#endpoints['get_survey_respondents'].replace(
      '{surveyId}',
      surveyId
    )
    const data = await this.#client.getPaginatedURL(url)
    return data
  }

  /**
   *  Retorna os detalhes de uma questão
   * @param {number} surveyId
   * @param {number} pageId
   * @param {number} questionId
   * @returns Objeto JSON contendo os detalhes de uma questão
   */
  async getQuestionDetails(surveyId, pageId, questionId) {
    const url = this.#endpoints['get_question_details']
      .replace('{surveyId}', surveyId)
      .replace('{pageId}', pageId)
      .replace('{questionId}', questionId)
    const data = await this.#client.getPaginatedURL(url)
    return data
  }

  /**
   * Retorna a informação de coletores usados na survey
   * @param {number} surveyId
   * @returns Objeto JSON com a lista de coletores cadastrados para a pesquisa
   */
  async getCollectorDetails(surveyId) {
    const url = this.#endpoints['get_collector_details'].replace(
      '{surveyId}',
      surveyId
    )
    const data = await this.#client.getPaginatedURL(url)
    return data
  }

  /**
   *  Retorna os detalhes de uma response
   * @param {number} surveyId
   * @param {number} responseId
   * @returns Objeto JSON com os dados da response
   */
  async getResponseDetails(surveyId, responseId) {
    const url = this.#endpoints['get_response_details']
      .replace('{surveyId}', surveyId)
      .replace('{responseId}', responseId)
    const data = await this.#client.getPaginatedURL(url)
    return data
  }

  /**
   * Retorna o objeto JSON de configuração
   * @returns {config} objeto JSON de configuração
   */
  exportConfig() {
    return config
  }
}

module.exports = SurveyApi
