const {
    MongoClient,
    ObjectId
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-manager'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to conect to database!')
    }
    const db = client.db(databaseName)
    db.collection('tasks').updateMany({'completed': false},{$set: {'completed': true}}).then((result)=>{
console.log(result)
    }).catch((error)=>{

    })
})