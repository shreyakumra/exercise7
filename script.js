
let yes1 = document.getElementById("yes1");
let no1 = document.getElementById("no1");

let Salmon;

yes1.addEventListener("click", function(){
    Salmon = 1;
    yes1.setAttribute("style", "background-color:darkgreen; color:white; ")
    no1.setAttribute("style", "")
    console.log(Salmon)
})

no1.addEventListener("click", function(){
    Chicken = 0;
    no1.setAttribute("style", "background-color:darkgreen; color:white; top:100px;left:150px;")
    yes1.setAttribute("style", "")
    console.log(Chicken)
})



let myButton = document.createElement("BUTTON");



myButton.innerHTML = "click me"
Salom.appendChild(myButton)

myButton.style.color= "red"
myButton.addEventListener("click",function(){
    myButton.style.color= "blue"
})
