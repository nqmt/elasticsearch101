// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'order',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200'
})

const axios = require('axios');

const app = require('express')()

app.get('/order', async function (req, res) {
  const stock = await axios.get('http://localhost:3001/stock')
  const payment = await axios.get('http://localhost:3002/payment')
  res.send(`${new Date()} ${stock.data} ${payment.data}`)
})

app.listen(3000)