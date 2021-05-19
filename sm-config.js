/**
 * Estrutura de configuração da API.
 * Contém a base URL da API e todos os endpoints utilizados, devidamente parametrizados
 * @module config
 */

/**
 * headerAPI object
 * @typedef {Object} headerAPI
 * @property {String} 'Content-Type'
 * @property {String} Authorization
 */

/**
 * endpointsAPI object
 * @typedef {Object} endpointsAPI
 * @property {String} get_surveys Caminho para o endpoint de get surveys
 * @property {String} get_survey Caminho para o endpoint de get survey
 * @property {String} get_survey_data Caminho para o endpoint de get survey data
 * @property {String} get_survey_respondents Caminho para o endpoint de get survey respondents
 * @property {String} get_question_details Caminho para o endpoint de get question details
 * @property {String} get_collector_details Caminho para o endpoint de get collector details
 * @property {String} get_response_details Caminho para o endpoint de get response details
 */

/**
 *  Config object
 * @typedef {Object} config
 * @property {String} baseURL URL base da API
 * @property {headerAPI} headers HTTP headers necessários para se conectar na API
 * @property {endpointsAPI} endpoints objeto com os endpoints para a API
 */
module.exports = {
  baseURL: 'https://api.surveymonkey.net',
  headers: {
    'Content-Type': 'application/json',
    Authorization: null,
  },
  endpoints: {
    get_surveys: '/v3/surveys',
    get_survey: '/v3/surveys/{surveyId}/details',
    get_survey_data: '/v3/surveys/{surveyId}/responses/bulk',
    get_survey_respondents: '/v3/surveys/{surveyId}/responses',
    get_question_details:
      '/v3/surveys/{surveyId}/pages/{pageId}/questions/{questionId}',
    get_collector_details: '/v3/surveys/{surveyId}/collectors',
    get_response_details:
      '/v3/surveys/{surveyId}/responses/{responseId}/details',
  },
}
