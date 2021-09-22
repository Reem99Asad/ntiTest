localStorage.setItem('myelement','hello')
let data=localStorage.getItem('myelement')
alert(data)
let myuser=[{U:'user1'},{U:'user2'},{U:'user3'}]
localStorage.setItem('users',JSON.stringify(myuser))
x=JSON.parse(localStorage.getItem('users'))
console.log(x[0])