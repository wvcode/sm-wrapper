exports.sleep = function (milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}

exports.convertToArrayOfArrays = function (arrayOfObjects) {
  let headers = []
  let result = arrayOfObjects.map(item => {
    let response = []
    if (headers.length == 0) {
      headers = Object.keys(item)
    }
    Object.keys(item).forEach(key => response.push(item[key]))
    return response
  })
  if (headers.length > 0 && result.length > 0) return [headers].concat(result)
  else return []
}
