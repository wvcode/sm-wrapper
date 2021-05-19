## Modules

<dl>
<dt><a href="#module_config">config</a></dt>
<dd><p>Estrutura de configuração da API.
Contém a base URL da API e todos os endpoints utilizados, devidamente parametrizados</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#SurveyApi">SurveyApi</a></dt>
<dd><p>Classe SurveyAPI para acesso aos dados do Survey Monkey</p>
</dd>
</dl>

<a name="module_config"></a>

## config
Estrutura de configuração da API.
Contém a base URL da API e todos os endpoints utilizados, devidamente parametrizados


* [config](#module_config)
    * [~headerAPI](#module_config..headerAPI) : <code>Object</code>
    * [~endpointsAPI](#module_config..endpointsAPI) : <code>Object</code>
    * [~config](#module_config..config) : <code>Object</code>

<a name="module_config..headerAPI"></a>

### config~headerAPI : <code>Object</code>
headerAPI object

**Kind**: inner typedef of [<code>config</code>](#module_config)  
**Properties**

| Name | Type |
| --- | --- |
| 'Content-Type' | <code>String</code> | 
| Authorization | <code>String</code> | 

<a name="module_config..endpointsAPI"></a>

### config~endpointsAPI : <code>Object</code>
endpointsAPI object

**Kind**: inner typedef of [<code>config</code>](#module_config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| get_surveys | <code>String</code> | Caminho para o endpoint de get surveys |
| get_survey | <code>String</code> | Caminho para o endpoint de get survey |
| get_survey_data | <code>String</code> | Caminho para o endpoint de get survey data |
| get_survey_respondents | <code>String</code> | Caminho para o endpoint de get survey respondents |
| get_question_details | <code>String</code> | Caminho para o endpoint de get question details |
| get_collector_details | <code>String</code> | Caminho para o endpoint de get collector details |
| get_response_details | <code>String</code> | Caminho para o endpoint de get response details |

<a name="module_config..config"></a>

### config~config : <code>Object</code>
Config object

**Kind**: inner typedef of [<code>config</code>](#module_config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| baseURL | <code>String</code> | URL base da API |
| headers | <code>headerAPI</code> | HTTP headers necessários para se conectar na API |
| endpoints | <code>endpointsAPI</code> | objeto com os endpoints para a API |

<a name="SurveyApi"></a>

## SurveyApi
Classe SurveyAPI para acesso aos dados do Survey Monkey

**Kind**: global class  

* [SurveyApi](#SurveyApi)
    * [new SurveyApi(access_token, [headers], [proxy], [customConfig])](#new_SurveyApi_new)
    * [.getSurveys(params)](#SurveyApi+getSurveys) ⇒
    * [.getSurvey(surveyId)](#SurveyApi+getSurvey) ⇒
    * [.getSurveyData(surveyId)](#SurveyApi+getSurveyData) ⇒
    * [.getSurveyRespondents(surveyId)](#SurveyApi+getSurveyRespondents) ⇒
    * [.getQuestionDetails(surveyId, pageId, questionId)](#SurveyApi+getQuestionDetails) ⇒
    * [.getCollectorDetails(surveyId)](#SurveyApi+getCollectorDetails) ⇒
    * [.getResponseDetails(surveyId, responseId)](#SurveyApi+getResponseDetails) ⇒
    * [.exportConfig()](#SurveyApi+exportConfig) ⇒ <code>config</code>

<a name="new_SurveyApi_new"></a>

### new SurveyApi(access_token, [headers], [proxy], [customConfig])
Método construtor da classe


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| access_token | <code>string</code> |  | o token de acesso |
| [headers] | <code>Object</code> | <code></code> | configuração de headers (opcional) |
| [proxy] | <code>Object</code> | <code></code> | configuração de proxy (opcional) |
| [customConfig] | <code>Object</code> | <code></code> | configuração de URI e endpoints (opcional) |

<a name="SurveyApi+getSurveys"></a>

### surveyApi.getSurveys(params) ⇒
Retorna a lista de pesquisas associada ao access token

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON de Pesquisa apenas com Id e Nome  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> | <code></code> | Objeto JSON que será transformado em query string - opcional |

<a name="SurveyApi+getSurvey"></a>

### surveyApi.getSurvey(surveyId) ⇒
Retorna o cabeçalho de uma pesquisa

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON com o cabeçalho da Pesquisa  

| Param | Type |
| --- | --- |
| surveyId | <code>number</code> | 

<a name="SurveyApi+getSurveyData"></a>

### surveyApi.getSurveyData(surveyId) ⇒
Retorna todos os dados de uma pesquisa, incluindo respostas, respondentes, questões...

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON de Pesquisa  

| Param | Type |
| --- | --- |
| surveyId | <code>number</code> | 

<a name="SurveyApi+getSurveyRespondents"></a>

### surveyApi.getSurveyRespondents(surveyId) ⇒
Retorna a lista de respondentes

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON com os respondentes  

| Param | Type |
| --- | --- |
| surveyId | <code>number</code> | 

<a name="SurveyApi+getQuestionDetails"></a>

### surveyApi.getQuestionDetails(surveyId, pageId, questionId) ⇒
Retorna os detalhes de uma questão

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON contendo os detalhes de uma questão  

| Param | Type |
| --- | --- |
| surveyId | <code>number</code> | 
| pageId | <code>number</code> | 
| questionId | <code>number</code> | 

<a name="SurveyApi+getCollectorDetails"></a>

### surveyApi.getCollectorDetails(surveyId) ⇒
Retorna a informação de coletores usados na survey

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON com a lista de coletores cadastrados para a pesquisa  

| Param | Type |
| --- | --- |
| surveyId | <code>number</code> | 

<a name="SurveyApi+getResponseDetails"></a>

### surveyApi.getResponseDetails(surveyId, responseId) ⇒
Retorna os detalhes de uma response

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: Objeto JSON com os dados da response  

| Param | Type |
| --- | --- |
| surveyId | <code>number</code> | 
| responseId | <code>number</code> | 

<a name="SurveyApi+exportConfig"></a>

### surveyApi.exportConfig() ⇒ <code>config</code>
Retorna o objeto JSON de configuração

**Kind**: instance method of [<code>SurveyApi</code>](#SurveyApi)  
**Returns**: <code>config</code> - objeto JSON de configuração  
