//const mypromise =(val) => new Promise((resolve,reject) =>{
//setTimeout(()=>{
  //  typeof val =="number"? resolve(val*5) : reject('val is not a number')},2000)

//})
//mypromise('ds').then(
  //  data=>{console.log(data)},
    //err=>{console.log(err)}
//)
//const mycall =async()=>{
  //  data =await mypromise(15)
    //console.log(data)
//}
//mycall()
body = document.querySelector('body')
getApiData =async(apiurl,cb)=>{
    let data =await fetch(apiurl)
    data =await data.json()
    cb(data)
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
getApiData('https://jsonplaceholder.typicode.com/todos/1',(x)=>{console.log(x)})