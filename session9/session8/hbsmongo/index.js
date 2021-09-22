//const mongodb=require('mongodb')
//const MongoClient= mongodb.MongoClient
const {MongoClient,ObjectId}=require('mongodb')

const dbURL="mongodb://127.0.0.1:27017"
const dbName ="ntiDB"

MongoClient.connect(dbURL,{},(err,client)=>{
    if(err)
    return console.log('unable to connect')
    const db =client.db(dbName)

    //db.collection('students').insertOne(
      //  {name:"reem",age:23}
   // )
   //db.collection('students').insertMany(
     //  [
       //{ name:"reem",age:21},{name:"ali",age:27},{name:"omar",age:30}
       //],
      // (error,result)=>{
      // if(error) return console.log('error inserting data')
       //console.log('inserted success')
      // console.log(result.insertedCount)
      // }
   //)


//db.collection('students').updateMany(
    //{name:"omar"}
   // {$inc:{age:1}}
//)


})