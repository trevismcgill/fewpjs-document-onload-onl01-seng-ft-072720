// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    debugger
   replaceText();
});

function replaceText() {
    document.querySelector("#text").innerHTML = "This is really cool!";
};