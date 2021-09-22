const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require('constants')
const { title } = require('process')
const { table } = require('console')

//read data from json file
readDataFromJsonFile = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('./tasks.json').toString())
        if(!Array.isArray(data)) throw new Error('msh array')
    }
    catch(e){
        data = []
    }
    return data
}
//write data to Json File
writeDataToJsonFile = (data)=>{
    try{
        fs.writeFileSync('./tasks.json', JSON.stringify(data))
    }
    catch(e){
        console.log(chalk.red('error writing data'))
    }
}
//add new student
let classNames=['a','b','c']
addStudent = (task) => {
    console.log('test')
    let tasks = readDataFromJsonFile()
    if(!classNames.includes(task.className)) 
    return console.log(chalk.red('className not valid'))
    let student = {
        stuId: task.stuId,
        name: task.name,
        className: task.className,
        subjects:task.subject
    }
    console.log(student)
    tasks.push(student)
    writeDataToJsonFile(tasks)
    console.log(chalk.green(`data inserted successfuly and you student id is ${student.stuId}`))
}
// addSubject 
addSubject = (task) =>{
    let tasks = readDataFromJsonFile()
    if(stuId==-1) return console.log(chalk.red('student not foud'))
    let subject = {
        stuId: task.stuId,
        subName: task.subName,
        subGrade: task.subGrade,
    }
    tasks.push(subject)
    writeDataToJsonFile(tasks)
    console.log(chalk.green(`data inserted successfuly and you student id is ${student.id}`))
}
//getAllStudents
getAllStudents = () =>{
    let tasks = readDataFromJsonFile()
    let result = tasks.forEach(student => {
    return table(result)
})
}
//getSingleStudentById
getStudentById = (stuId) =>{
    let tasks = readDataFromJsonFile()
    let result = tasks.findIndex(student=>{
        return stuId== student[id]
    })
    return result
}
//getStudentsTotalDegrees
getStudentsTotalDegrees= ()=>{
    let tasks = readDataFromJsonFile()
    let totaldegrees=0
    tasks.forEach(student=>
        {
            for(subject in student)
            {
                totaldegrees=student[subjects]+[subGrade]
            }
            console.table(student)
        })
}
module.exports = {addStudent, addSubject, getAllStudents, getStudentById, getStudentsTotalDegrees }