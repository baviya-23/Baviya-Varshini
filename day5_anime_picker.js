\\Anime picker
function suggestAnime(mood){
    mood=mood.toLowerCase();
    if(mood==="action"){
        return "Watch Attack on Titan";
    }else if(mood==="sad"){
        return "Watch Your lie in April";
    }else if(mood==="happy"){
        return "Watch Spy X Family";
    }else if(mood==="fantasy"){
        return "Watch Demon Slayer";
    }else{
        return "Mood not found! Try : action, sad, happy, fantasy";
    }
}

console.log(suggestAnime("fantasy"));
