\\sum of the given array
function totalArray()
{
    let a=[100,200,300];
    let total=0;
    for(let i=0;i<a.length;i++){
        total=total+a[i];
    }
    return total;
} 
let result=totalArray();
console.log("total:",result)


\\for checking even or odd
function isEven(n){
    if(n%2==0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
let a=isEven(2)

