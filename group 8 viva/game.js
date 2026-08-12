// Questions

const puzzles = [
{
    question: "I am not a program, but I tell a program exactly what to do step by step. What am I?",
    answer: "algorithm",
    clue: "8"
},
{
    question: "I am not a shape in geometry class, but in a flowchart I help you make choices. What am I?",
    answer: "diamond",
    clue: "2"
},
{
    question: "I am usually the biggest text on a webpage, but I am not a font size. What am I?",
    answer: "h1",
    clue: "7"
},
{
    question: "Without me, a webpage still works, but it looks boring. What am I?",
    answer: "css",
    clue: "5"
},
{
    question: "I can make buttons react, images move, and webpages come alive. What am I?",
    answer: "javascript",
    clue: "3"
},
{
    question: "I can move, talk, and perform actions in Scratch, but I am not a real person. What am I?",
    answer: "sprite",
    clue: "9"
}
];


// Background images

const backgrounds = [
    "dorm.png",
    "hall.png",
    "kitchen.png",
    "studyroom.png",
    "library.png",
    "exit.png"
];


// Variables

let currentPuzzle = 0;
let secretCode = "";
let timeLeft = 120;


// Load first question

loadPuzzle();


// Function to show question

function loadPuzzle() {

    document.body.style.backgroundImage =
    "url('" + backgrounds[currentPuzzle] + "')";

    document.getElementById("question").innerHTML =
    puzzles[currentPuzzle].question;

    document.getElementById("title").innerHTML =
    "Puzzle " + (currentPuzzle + 1);

    document.getElementById("progress").innerHTML =
    "Puzzle " + (currentPuzzle + 1) + " / 6";

    document.getElementById("answer").value = "";

    document.getElementById("message").innerHTML = "";
}


// Check answer

function checkAnswer() {

    let userAnswer =
    document.getElementById("answer")
    .value
    .toLowerCase()
    .trim();

    if(userAnswer === puzzles[currentPuzzle].answer){

        secretCode =
        secretCode +
        puzzles[currentPuzzle].clue;

        document.getElementById("message").innerHTML =
        "✅ Correct! Clue Number: " +
        puzzles[currentPuzzle].clue;

        let character =
        document.getElementById("character");

        character.src =
        "happy.png";

        character.style.width =
        "280px";

        setTimeout(function(){

            currentPuzzle++;

            if(currentPuzzle === puzzles.length){

                let finalAnswer =
                prompt(
                "Enter the 6-digit code:"
                );

                if(finalAnswer === secretCode){

                    document.getElementById("game").innerHTML =
                    `
                    <h1>🎉 Congratulations!</h1>
                    <h2>You Escaped The Dorm!</h2>
                    <p>Final Code: ${secretCode}</p>
                    `;

                }else{

                    document.getElementById("game").innerHTML =
                    `
                    <h1>🚪 Door Locked!</h1>
                    <p>Wrong Code!</p>
                    `;

                }

                return;
            }

            character.src =
            "character.png";

            character.style.width =
            "180px";

            loadPuzzle();

        },1500);

    }

    else{

        document.getElementById("message").innerHTML =
        "❌ Wrong Answer. Try Again.";

    }

}


// Timer

let timer = setInterval(function(){

    timeLeft--;

    let minutes =
    Math.floor(timeLeft / 60);

    let seconds =
    timeLeft % 60;

    document.getElementById("timer").innerHTML =
    String(minutes).padStart(2,"0")
    + ":"
    + String(seconds).padStart(2,"0");

    if(timeLeft <= 0){

        clearInterval(timer);

        document.body.innerHTML =
        `
        <h1 style="color:red;text-align:center;margin-top:100px;">
        ⏰ Game Over
        </h1>
        `;
    }

},1000);