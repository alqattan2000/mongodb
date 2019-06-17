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
    // db.collection('users').findOne({
    //     _id: new ObjectId("5d012d034575974d74a25574")
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('un able to search!')
    //     }
    //     console.log(user)

    // })
    // db.collection('users').find({
    //     Age: 38
    // }).toArray((error, users) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({Age : 38}).count((error, count) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log(count)
    // })

    db.collection('tasks').findOne({'completed' : false},(error,tasks)=>{
        if (error) {console.log(error)}
        console.log(tasks)
    })
    db.collection('tasks').find({'completed': true}).toArray((error, tasks)=>{
        if (error) {console.log(error)}
        console.log(tasks)
    })
})