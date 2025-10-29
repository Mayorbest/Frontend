const questions = [
  {
    question: "what is the value of sin 30?",
    answers: ["1","3/2", "0.5", "-0.5"],
    correct: "0.5"
  },
  {
    question: "What grade are you?",
    answers: ["11","12", "10", "0'level"],
    correct: "12"
  },
  {
    question: "which language is used to structure a web page?",
    answers: ["Javascript","Java", "Python", "C++"],
    correct: "Javascript"
  }
];

let currentI= 0;
let score = 0;

 const questionEl = document.querySelector('.question');
const answerEl = document.querySelector('.answers');
const nxtBtn = document.querySelector('.next-button');
const scoreEl = document.querySelector('.score');
const prevBtn = document.querySelector('.prev-button')

function displayQus () {
  const current = questions[currentI];
  questionEl.textContent = current.question;
  answerEl.innerHTML = "";
  let ansbox = '';

 const answers = current.answers
 answers.forEach( (answer, index) => {
    ansbox += `<div><input name="answer" type="radio" class= btn>${answer} </div>`
    document.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('change', () => {
        checkAnswer(answer);
      })
    });

    
    /** 
 .forEach( answer => {
    const butn = document.createElement("button");
    butn.onclick = () => checkAnswer(answer);
    butn.textContent = ""
    answerEl.appendChild(butn);

  });
*/
answerEl.innerHTML = ansbox;
  }); 
}

function checkAnswer (selected) {
  displayQus()
  if (answers[i] === correct) {}
  const correct = questions[currentI].correct;
  if (selected === correct) {
    score++;
  }
  nxtBtn.style.display = "inline-block";
  console.log(correct)
}

nxtBtn.onclick = () => {
  currentI++;
  if (currentI < questions.length) {
    displayQus();
    nxtBtn.style.display = "visble"
    prevBtn.style.display = "visble"
  }
  
  else if (currentI === questions.length - 1) {
    nxtBtn.textContent = "Summit"
  }
  else {showscore();
    prevBtn.style.display = "none"
    nxtBtn.style.display = "none"
  };
};

function showscore () {
  questionEl.textContent = "Quiz conpleted!";
  answerEl.innerHTML = "";
  scoreEl.textContent = `Your score is: ${score}/${questions.length}`;
}
displayQus();

