//pop quiz
const startBtn = document.querySelector(".startBtn");
//start displaying questions with questions class
let secondsLeft = 120;

let startTimer = document.querySelector(".timer");

const codeQuestions = [
  {
      question: "What is a string?",
      answers: [
        "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich"
      ],
      correctAnswer: "c"
    },
    {
      question: "What is an element in coding?",
      answers: [
        "Water",
        "Fire",
        "Brendan Eich"
      ],
      correctAnswer: "a"
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich"
      ],
      correctAnswer: "b"
    },
    {
      question: "Who invented JavaScript?",
      answers: [
        "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich"
      ],
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
         "Sheryl Sandberg",
         "Brendan Eich"
      ],
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
         "Sheryl Sandberg",
         "Brendan Eich"
      ],
      correctAnswer: "c"
    },
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
         "Sheryl Sandberg",
         "Brendan Eich"
      ],
      correctAnswer: "Brendan Eich"
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
  let showAnswers = document.querySelector("#showAnswer")
  showQuestions.textContent = codeQuestions[0].question;
  showAnswers.textContent = codeQuestions[0].answers;
  
  for (let index = 0; index < 3; index++) {
    
    //console.log(codeQuestions[0].answers[index]);
  }
}




function startQuiz() {
    console.log("Hi Hello");
    setTime();
    displayQuestion();
  }
  

startBtn.addEventListener("click", startQuiz);