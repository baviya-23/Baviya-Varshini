\\student grader
function getGrade(mark){
     if(mark>=90){
         return "Grade A"
     }else if(mark>=80 && mark<90){
         return "Grade B"
     }else if(mark>=70 && mark<80){
         return "Grade C"
     }else if(mark>=50 && mark<70){
         return "Grade D"
     }else{
         return "Grade F"
     }
}
let marks=[98,45,72,88,60]

for(let i=0;i<marks.length;i++){
    console.log(`Marks: ${marks[i]} , ${getGrade(marks[i])}`);
}
