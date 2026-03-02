
let validationtitle=function(title){
    if(!title){
        return "title is requried"
    }
    if(title.length<=3){
        return "title is not valid"
    }
    else{
        return "title is valid"
    }
}
let validatePriority=function(pri){
    if( pri==='low'|| pri==='medium'|| pri=='high'){
        return true
    }
    else{
        return false
    }
}
let validateDueDate=function(date){
    return true
}
export {validationtitle,validatePriority,validateDueDate}