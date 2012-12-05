module.exports = function(input, options) {
  options = options || {}
  var config = input.common || {}
    , env = options.env || process.env.NODE_ENV

  for (var key in input[env]) {
    config[key] = input[env][key]
  }

  return config
}