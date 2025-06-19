\\quiz challenge
let score=0;

let q1="Who was the champion of IPL 2025?";
let a1="RCB";
let usera1="rcb";

if(usera1.toLowerCase()===a1.toLowerCase())
{
    score++;
}
let q2="Who is the current Finance Minister of India?";
let a2="Nirmala Sitharaman";
let usera2="nirmala sitharaman";

if(usera2.toLowerCase()===a2.toLowerCase())
{
    score++;
}
let q3="What is the top Anime in the world?";
let a3="One Piece";
let usera3="one piece";

if(usera3.toLowerCase()===a3.toLowerCase())
{
    score++;
}
console.log("Your Score:",score,"/ 3");

if(score==3)
{
    console.log("Excellent");
}
else if(score>=2)
{
    console.log("Good job!");
}
else
{
    console.log("Better luck next time!");
}
