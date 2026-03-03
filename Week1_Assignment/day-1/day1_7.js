//Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
let x=function(a,search){
    for(let i=0;i<a.length;i++){
        if(a[i]===search){  
            return i
        }
    }
    return "not found"
}
let b=x([1,2,3],2)
console.log(b)