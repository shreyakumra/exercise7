let yes1 = document.getElementById("yes1");
let no1 = document.getElementById("no1");

let yes2 = document.getElementById("yes2");
let no2 = document.getElementById("no2");

let yes3 = document.getElementById("yes3");
let no3 = document.getElementById("no3");

let yes4 = document.getElementById("yes4");
let no4 = document.getElementById("no4");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");

let Salmon;

let answerCount = 0
let animalType = null

function checkAnswer() {
  if (answerCount > 3) {
    if (animalType == "salmon") {
      answer1.setAttribute("style", "display:block;")
    }
    if (animalType == "chicken") {
      answer2.setAttribute("style", "display:block;")
    }
  }
}

yes1.addEventListener("click", function(){
    Salmon = 1;
    yes1.setAttribute("style", "background-color:darkgreen; color:white; ")
    no1.setAttribute("style", "")
    no1.setAttribute("disabled", true)
    yes1.setAttribute("disabled", true)
    // console.log(Salmon)
    answerCount += 1
    animalType = "salmon"
    console.log(answerCount, "answerCount")
    checkAnswer()
})

no1.addEventListener("click", function(){
    Chicken = 0;
    no1.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    yes1.setAttribute("style", "")
    no1.setAttribute("disabled", true)
    yes1.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    animalType = "chicken"
    checkAnswer()
})

yes2.addEventListener("click", function(){
    Chicken = 0;
    yes2.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    no2.setAttribute("style", "")
    no2.setAttribute("disabled", true)
    yes2.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    checkAnswer()
})

no2.addEventListener("click", function(){
    Chicken = 0;
    no2.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    yes2.setAttribute("style", "")
    no2.setAttribute("disabled", true)
    yes2.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    checkAnswer()
})

yes3.addEventListener("click", function(){
    Chicken = 0;
    yes3.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    no3.setAttribute("style", "")
    no3.setAttribute("disabled", true)
    yes3.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    checkAnswer()
})

no3.addEventListener("click", function(){
    Chicken = 0;
    no3.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    yes3.setAttribute("style", "")
    no3.setAttribute("disabled", true)
    yes3.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    checkAnswer()
})

yes4.addEventListener("click", function(){
    Chicken = 0;
    yes4.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    no4.setAttribute("style", "")
    no4.setAttribute("disabled", true)
    yes4.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    checkAnswer()
})

no4.addEventListener("click", function(){
    Chicken = 0;
    no4.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    yes4.setAttribute("style", "")
    no4.setAttribute("disabled", true)
    yes4.setAttribute("disabled", true)
    answerCount += 1
    console.log(answerCount, "answerCount")
    console.log(Chicken)
    checkAnswer()
})

let myButton = document.createElement("BUTTON");

myButton.innerHTML = "click me"
Salmon.appendChild(myButton)

myButton.style.color= "red"
myButton.addEventListener("click",function(){
    myButton.style.color= "blue"
})

