\\BMI calculator
function calculateBMI(weight,height){
    let BMI=weight/(height*height)
    BMI=BMI.toFixed(2)
    let category=""
    if(BMI<18.5){
        category="Underweight"
    }else if(BMI<24.9){
        category="Normal"
    }else if(BMI<29.9){
        category="Overweight"
    }else{
        category="Obese"
    }
    return `Your BMI is ${BMI}- You are ${category}`
}
let result=calculateBMI(74,1.8)
console.log(result)
