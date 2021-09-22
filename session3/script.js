//console.log(5)
// setTimeout(()=>{
  //   console.log(19)},1000 
//    )
// console.log(5)
body = document.querySelector('body')
getApiData = async(apiUrl , cb) =>{
    let data = await fetch(apiUrl)
    data = await data.json()
     let data = await (await fetch(apiUrl)).json()
     return data
    cb(data)
}


getApiData('https://jsonplaceholder.typicode.com/photos?_limit=12', (x)=>{
    x.forEach(element => {
       img = document.createElement('img')
       img.src =  element.thumbnailUrl
       body.appendChild(img)
    });
})

getApiData('https://jsonplaceholder.typicode.com/users', (data)=>{
    console.log(data)
})

getApiData().then(
     data=>{}
 )