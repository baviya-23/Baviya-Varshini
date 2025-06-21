//quiz grader
let questions=["Capital of Japan?","2+2","Best Anime ever?"];
let correctAnswers=["tokyo","4","One piece"];
let userAnswers=["Tokyo","4","One Piece"];
let score=0;
for(let i=0;i<questions.length;i++){
    if(userAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase())
    {
        score++;
    }
}
console.log("Your Score:",score,"/",questions.length);
