# sm-wrapper

O sm-wrapper é um cliente da API do Survey Monkey.

## Para que ele serve?

Este cliente serve para facilitar o processo de buscar os resultados das pesquisas feitas na plataforma Survey Monkey para que possam ser processadas e utilizadas de maneira livre.

## O que é necessário para que funcione?

Para utilizar este cliente, você deve gerar um access token no site do Survey Monkey.

## Como instalar?

```bash
npm install sm-wrapper
```

or

```bash
yarn add sm-wrapper
```

## Como utilizar?

Segue um exemplo básico de utilização:

```javascript
const SurveyAPI = require('@wvcode/sm-wrapper')

const accessToken = 'you-access-token-here'

const api = new SurveyAPI(accessToken)

api
  .getSurveys()
  .then(pesquisas => {
    console.log(JSON.stringify(pesquisas))
  })
  .catch(error => {
    console.log(error)
  })
```

## Mais Informações?

É só acessar a documentação [aqui](documentation.md).

**Bom código!!!**

### Autoria:

- Vanessa Stangherlin
- Walter Ritzel
