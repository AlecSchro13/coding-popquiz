//pop quiz
const startBtn = document.querySelector(".startBtn");

//start displaying questions with questions class
let secondsLeft = 100;
//100 seconds for the timer -10 seconds
let startTimer = document.querySelector(".timer");

let showAnswers = document.querySelector("#showAnswer")

let currentQuestion = 0

let showQuestions = document.querySelector("#showQuestion");

let showHighscore = document.querySelector("#high-score");

let timerInterval;
//just an example of if I have a form and im calling it into the Javascript "var name = document.querySelector("initials")
let initials = name.value.trim() 

let newScore = {
  score: secondsLeft, 
  initials: initials
}

//questions for the pop quiz.
const codeQuestions = [
  {
      question: "What is a string in coding?",
      answers: [
        "A piece of cloth",
        "Lint",
        "Used for data values that are made up of an ordered sequence of characters"
      ],
      correctAnswer: "Used for data values that are made up of an ordered sequence of characters"
    },
    {
      question: "What is an element in coding?",
      answers: [
        "Water",
        "Fire",
        "Body",
      ],
      correctAnswer: "Body"
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Cool Sandy Shores",
        "Cascading Style Sheets",
        "Consumer Seasonal Sale"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "What is an element typically found in the <head> element?",
      answers: [
        "Footer",
        "Main",
        "Title"
      ],
      correctAnswer: "Title"
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
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
         "Sheryl Sandberg",
         "Brendan Eich"
      ],
      correctAnswer: "Brendan Eich"
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
  timerInterval = setInterval(function() {
    
    secondsLeft--;
    startTimer.textContent = secondsLeft;
    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      setTime.textContent = 0;
      
      clearInterval(timerInterval);
      //call back to end game function
      endGame();
    }

  }, 1000);
}



function displayQuestion() {
  let showQuestions = document.querySelector("#showQuestion");

  if (currentQuestion > codeQuestions.length-1) {
  let scoreEl = document.querySelector(".your-score")
  
  let score = secondsLeft;

  scoreEl.textContent = score;
  
  endGame();
  } else {
  
  showQuestions.textContent = codeQuestions[currentQuestion].question;

  showAnswers.innerHTML = "";

  for (let index = 0; index < 3; index++) {
  
  let answerChoice = document.createElement("button");

  answerChoice.textContent = codeQuestions[currentQuestion].answers[index];

  showAnswers.append(answerChoice);
  }
}
}

let scoreEl = document.querySelector(".your-score")


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
  startTimer.setAttribute("class", "hidden");

  startBtn.setAttribute("class", "hidden");

  showHighscore.removeAttribute("class");

  clearInterval(timerInterval);

  showAnswers.innerHTML = "";
  
  showQuestions.innerHTML = "";

  console.log(endGame);
}

startBtn.addEventListener("click", startQuiz);
