const yargs = require('yargs')
const tasks = require('./tasks')
yargs.command({
    command:'addStudent',
    describe:"add new student",
    builder:{
        stuId:{
            type:Number,
            default:parseInt((Date.now()) * Math.random())
        },         
        name:{
            type:String,
            demandOption: true
        },
        className:{
            type:String,
            demandOption:true
        },
        subjects:{
            
            default:[]
        }
    },
    handler: function(argv){
        console.log('ay 7aga')
        let task = {stuId:argv.stuId, name:argv.name,className:argv.className, subject:argv.subjects}
        console.log(task)
        tasks.addStudent(task)
    }
})

yargs.command({
    command:'addSubject',
    describe:"add new subject",
    builder:{
        stuId:{
            type:Number,
            default:parseInt((Date.now()) * Math.random())
        },         
        subName:{
            type:String,
            demandOption: true
        },
        subGrade:{
            type:Number,
            demandOption:true
        },
    },
    handler: function(argv){
        let task = {stuId:argv.stuId, subName:argv.subName,subGrade:argv.subGrade}
        tasks.addSubject(task)
    }
})
yargs.command({
    command:'getAllStudents',
    describe:'get all students',
    
    handler:function(argv){
       tasks.getAllStudents()
    }
})
yargs.command({
    command:'getSingleStudent',
    describe:'get single student by student id',
    builder:{
       stuId:{
           type:Number,
           default:parseInt((Date.now()) * Math.random())
       }
    },
    handler: function(argv){
        tasks.getStudentById(argv.stuId)
    }
})
yargs.command({
    command:'getStudentsTotalDegrees',
    describe:'get students total degress',
    
    handler:function(argv){
       tasks.getStudentsTotalDegrees()
    }
})
yargs.argv
