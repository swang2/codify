var quiz = [{
    "question": "The average person does what thirteen times a day?",
    "choices": ["Laugh", "Text", "Chew", "Sit"],
    "correct": "Laugh"
  }, {
    "question": "The Average American does what 22 times a day?",
    "choices": ["Opens fridge", "Picks up remote", "Curses", "Sips coffee"],
    "correct": "Opens fridge"
  }, {
    "question": "Coprastastaphobia is fear of?",
    "choices": ["Cobras", "Coprosma", "Copras", "Constipation"],
    "correct": "Constipation"
  }, {
    "question": "What sportsman are most likely to get diseased anuses or rectums?",
    "choices": ["Gymnists", "Cyclists", "Water Skiers", "Wrestlers"],
    "correct": "Water Skiers"
  }, {
    "question": "In South Dakota it's illegal to fall down and sleep in where?",
    "choices": ["In a Macy's", "In a bar", "In a cheese factory", "In a DMV"],
    "correct": "In a cheese factory"
  }, {
    "question": "What ailment kills the most fruit flies?",
    "choices": ["Diarrhea", "Constipation", "Chronic Vomiting", "Fever"],
    "correct": "Constipation"
  }, {
    "question": "A law in Illinois prohibits men from having what in public?",
    "choices": ["Picking a fight", "Urinating", "Stripping their pants", "Having an erection"],
    "correct": "Having an erection"
  }
];


// define elements
var wrapper = $("wrapper"),
  contentContainer = $("content"),
  numContainer = $("num"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");

// init vars
var currentQuestion = 0,
  score = 0,
  askingQuestion = true;

function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='checkbox' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'><p>" + choices[i] + "</p></label><br>";
  }

  // load the question
  numContainer.textContent = (currentQuestion + 1) + ".";
  questionContainer.textContent =
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "Score: 0" 
    + "/" + quiz.length;
    submitBtn.textContent = "Submit";
  }
}

function checkAnswer() {
  if (askingQuestion) {
    submitBtn.textContent = "Next >";
    askingQuestion = false;

    // determine which checkbox button they clicked
    var userpick,
      correctIndex,
      checkboxes = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) { // if this radio button is checked
        userpick = checkboxes[i].value;
      }

      // get index of correct answer
      if (checkboxes[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    // setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "#4ca64c";
    } else {
      labelStyle.color = "#ff6666";
    }

    scoreContainer.textContent = "Score: " + score + "/" +
      quiz.length;
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Submit";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}

function showFinalResults() {
  contentContainer.innerHTML = "<h4>You've completed the trivia!</h4>" +
    "<h4>Below are your results:</h4>" +
    "<h4>" + score + " out of " + quiz.length + " questions, " +
    Math.round(score / quiz.length * 100) + "%<h4>";
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);





