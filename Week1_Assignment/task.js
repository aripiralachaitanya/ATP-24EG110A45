let tasks=[]
import {validationtitle,validatePriority,validateDueDate} from './validator.js'
let newtask=function(id,task,pri,date,stu){
    if (validationtitle(task.length) && validatePriority(pri) && validateDueDate(date)){
        let info={
            id:id,
            title:task,
            priority:pri,
            date:date,
            status:stu
        }
        tasks.push(info)
        return "success"
    }
    else
        {
        return "error"
    }
}
let display=function(){
    return tasks
}

let completeTask=function(id){
    tasks.map(tskobj=>{
        if(tskobj.id===id){
            tskobj.status='completed'
        }
    })
}
console.log(newtask(1,"adi",'low','12-01-2025',"completed"))
console.log(newtask(2,"adi",'high','01-12-2025',"not completed"))
console.log(newtask(3,"sdf",'edef','01-12-2025','not completed'))
completeTask(3)
console.log(tasks)
console.log(display())
export {newtask,display,completeTask}