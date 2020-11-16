// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'payment',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200'
})

const app = require('express')()

app.get('/payment', function (req, res) {
  console.log(new Date())
  res.send('payment')
})

app.listen(3002)