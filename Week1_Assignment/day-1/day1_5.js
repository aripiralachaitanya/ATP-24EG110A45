//Write a function that receives 3 number args and  return the big number
let a=function(a,b,c){
    if(a>b && a>c){
        console.log("The biggest number is a",a)    
    }else if(b>a && b>c){
        console.log("The biggest number is b",b)
    }else{
        console.log("The biggest number is c",c)
    }
}

a(10,20,30)