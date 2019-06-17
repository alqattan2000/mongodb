// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-manager'

const id = new ObjectID()

// console.log(id)
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to conect to database!')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     Name: 'Mohammed Qattan',
    //     Age: 38
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to inset user!')
    //     }
    //     console.log(result.ops)
    // })
    //     db.collection('users').insertMany([
    //         {Name: 'Ali', Age: 30 },
    //         { Name: 'Amani', Age: 23},
    //         {Name: 'Joelle', Age: 7 },
    //         { Name: 'Lilian', Age: 11}], (error, result) => {
    //             if (error) {
    //                 return console.log('unable to inset user!')
    //             }
    //             console.log(result.ops)
    //         })
//     db.collection('tesks').insertMany([{'task-name': 'Clean the room', completed: true},
// {'task-name': 'take a shawer', completed: false}, 
// {'task-name': 'sleep', completed: false}], (error, result)=>{
//         if (error){
//             return console.log('error')
//         }
// //         console.log(result.ops)
//     })
    
})