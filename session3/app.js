// console.log('hello')
//onst fs = require('fs')
//s.writeFileSync('test.txt', 'hello')
// = fs.readFileSync('test.txt').toString()
//onsole.log(x)
//onst fs = require('fs')
//ata = [
//   {name:"marwa", age:36},
//   {name:"nouran", age:26},
//   {name:"mazen", age:40},
//   {name:"mohamed", age:70}
//
//s.writeFileSync('data.json', JSON.stringify(data))
//ata = JSON.parse(fs.readFileSync('data.json').toString())
//onsole.log(data)
//onst myMod = require('./marwa')
//yMod.hello()
const tasks = require('./mymodules/tasks')

tasks.addTask({"title":"task 3","content":"c 2","dueDate":"15/5/2021","type":"t 2"})
tasks.addsubject({subName:"math",subGrade:50})
tasks.showAll()
tasks.searchTask(439865249962)
tasks.deleteTask(9035020415)
tasks.editTask(583562148765)
