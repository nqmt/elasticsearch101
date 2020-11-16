// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'stock',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200'
})


const { MongoClient } = require("mongodb");
const app = require('express')()

const uri = "mongodb://root:rootpassword@localhost:27017";
const client = new MongoClient(uri);
client.connect();


app.get('/stock', async function (req, res) {

  const database = client.db("4pl");
  const collection = database.collection("stock");

  const doc = { name: "Red", town: "kanto" };
  const result = await collection.insertOne(doc);

  console.log(result.result)
  console.log(new Date())


  res.send('stock')
})

app.listen(3001)