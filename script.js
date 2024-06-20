let attack=0;
let midfield=0;
let goal=0;
let defense=0;
let number=document.querySelector(".numbers");
let running=document.querySelector(".running");
let color=document.querySelector(".color");
let meal=document.querySelector(".meal");
let numberA=document.querySelector(".numberA");
let numberM=document.querySelector(".numberM");
let numberG=document.querySelector(".numberG");
let numberD=document.querySelector(".numberD");
let runningA=document.querySelector(".runningA");
let runningM=document.querySelector(".runningM");
let runningG=document.querySelector(".runningG");
let runningD=document.querySelector(".runningD");
let colorA=document.querySelector(".colorA");
let colorM=document.querySelector(".colorM");
let colorG=document.querySelector(".colorG");
let colorD=document.querySelector(".colorD");
let mealA=document.querySelector(".mealA");
let mealM=document.querySelector(".mealM");
let mealG=document.querySelector(".mealG");
let mealD=document.querySelector(".mealD");
let result=document.querySelector(".result");
let output= "You should be a(n) "
let attacker= " attacker!"
let midfielder= " midfielder!"
let goalie=" goalie!"
let defender=" defender!"

numberA.addEventListener("click", function(){
    running.style.display="block";
    attack+=1;
});
numberM.addEventListener("click", function(){
    running.style.display="block";
    midfield+=1;
});
numberG.addEventListener("click", function(){
    running.style.display="block";
    goal+=1;
});
numberD.addEventListener("click", function(){
    running.style.display="block";
    defense+=1;
});

runningA.addEventListener("click", function(){
    color.style.display="block";
    attack+=3;
})
runningM.addEventListener("click", function(){
    color.style.display="block";
    midfield+=3;
})
runningG.addEventListener("click", function(){
    color.style.display="block";
    goal+=3;
})
runningD.addEventListener("click", function(){
    color.style.display="block";
    defense+=3;
})

colorA.addEventListener("click", function(){
    meal.style.display="block";
    attack+=1;
})
colorM.addEventListener("click", function(){
    meal.style.display="block";
    midfield+=1;
})
colorG.addEventListener("click", function(){
    meal.style.display="block";
    goal+=1;
})
colorD.addEventListener("click", function(){
    meal.style.display="block";
    defense+=1;
})
mealA.addEventListener("click", function(){
    result.style.display="block";
    attack+=2;
    results();
})
mealM.addEventListener("click", function(){
    result.style.display="block";
   midfield+=2;
   results();
})
mealG.addEventListener("click", function(){
    result.style.display="block";
    goal+=2;
    results();
})
mealD.addEventListener("click", function(){
    result.style.display="block";
    defense+=2;
    results();
})

function results() {
    if(attack>midfield && attack>goal && attack>defense){
        result.innerHTML= output+ attacker;
    }else if (midfield> goal && midfield> defense){
        result.innerHTML=output+midfielder;
    }else if(goal>defense){
        result.innerHTML=output+goalie;
    }else {
        result.innerHTML=output+defender;
    }
}
