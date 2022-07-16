//pop quiz
const startBtn = document.querySelector(".startBtn");
//start displaying questions with questions class
let secondsLeft = 120;

let startTimer = document.querySelector(".timer");

const codeQuestions = [
  {
      question: "What is a string?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "What is an element in coding?",
      answers: {
        a: "Water",
        b: "Fire",
        c: "Brendan Eich"
      },
      correctAnswer: "a"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "b"
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
]


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    
    secondsLeft--;
    startTimer.textContent = secondsLeft + " seconds left till colorsplosion.";
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //endGame();
    }

  }, 1000);
}



function displayQuestion() {
  let showQuestions = document.querySelector("#showQuestion");
  showQuestions.textContent = codeQuestions[0].question;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}




function startQuiz() {
    console.log("Hi Hello");
    setTime();
    displayQuestion();
  }
  

startBtn.addEventListener("click", startQuiz);