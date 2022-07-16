//pop quiz
const startBtn = document.querySelector(".startBtn");
//start displaying questions with questions class
let secondsLeft = 120;

let startTimer = document.querySelector(".timer");

let showAnswers = document.querySelector("#showAnswer")

let currentQuestion = 0


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
    startTimer.textContent = secondsLeft;
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

  if (currentQuestion > codeQuestions.length-1) {

  } else {
  
  showQuestions.textContent = codeQuestions[currentQuestion].question;

  showAnswers.innerHTML = "";

  for (let index = 0; index < 3; index++) {
  
  let answerChoice = document.createElement("li");


  answerChoice.textContent = codeQuestions[currentQuestion].answers[index];

  showAnswers.append(answerChoice);
  }
}
}

function startQuiz() {
    setTime();
    displayQuestion();
  }

showAnswers.addEventListener("click", function(event) {
  console.log(event.target.textContent);
  if (
    event.target.textContent === codeQuestions[currentQuestion].correctAnswer
  ) {
    currentQuestion++;
    
    displayQuestion();
    
  } else { secondsLeft = secondsLeft - 10;
    currentQuestion++;
    displayQuestion();
  
  }
});

function endGame() {
  let scoreEl = document.querySelector("your-score")
  
  let score = secondsLeft;

  scoreEl.textContent = score;

  showAnswers.innerHTML = "";
}

startBtn.addEventListener("click", startQuiz);