
var x =5
if(true)
    {
    let x=10
    console.log(`x inside if=${x}`)
}
console.log(`x outside if=${x}`)

let emp=[
    {
        name:"mazen",salary:2000,
        name:"reem",salary:6000,
        name:"omar",salary:1000,
    }
]
function updateSalary(empName){
    empName.salary+=empName.salary*0.1
    empName.test="test test"
}

emp.forEach(singleEmp=>{
    updateSalary(singleEmp)
})
console.log(emp)