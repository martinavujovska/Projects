const input = document.querySelector("#question");
const resultDisplay = document.querySelector(".result");
const button = document.getElementById("btn");
let questions
let result

// let questions = [
//     "How are you?", 
//     "Who made you?", 
//     "How is the weather today?",
//     "Are you a robot or a human?", 
//     "What language were you built in?", 
//     "What's the sum of 2 and 2?", 
//     "Name me a comedy movie"
// ];

button.addEventListener("click", () => {
    questions.forEach(() => {
        resultDisplay.innerHTML = result
    })
    getAnswer();
})


function getAnswer() {
    if (input != resultDisplay) {
        result = 'Sorry, I don\'t know how to answer that, yet :)'
    }
    if (questions === "How are you?") {
        result = 'I\'m good! How are you?'
    }
    if (questions === "Who made you?") {
        result = 'Martina made me :)'
    }
    if (questions === "How is the weather today?") {
        result = 'It\'s pretty chilly, actually. Make sure to bring a jacket!!!'
    }
    if (questions === "Are you a robot or human?") {
        result = 'You tell me :)'
    }
    if (questions == "What language were you built in?") {
        result = 'I was built using HTML, CSS and JavaScript!'
    }
    if(questions === "What\'s the sum of 2 and 2?"){
        result = 'The sum of 2 and 2 is 4'
    }
    if(questions === "Name me a comedy movie"){
        result = 'Knives Out'
    }
    resultDisplay.innerHTML = result
}


