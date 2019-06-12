const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to conect to database!')
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({Name: 'Mohammed Qattan', Age: 38})
})