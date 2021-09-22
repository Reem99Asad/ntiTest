const fs = require('fs')
data =[
    {
        name:"marwa",age:36
    }
]
fs.writeFileSync('data.json',JSON.stringify(data))

const adduser =() =>{
    console.log(data)
}