/*Acceptance Criteria*/
    // GIVEN I am taking a code quiz
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question
    // WHEN I answer a question
    // THEN I am presented with another question
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // WHEN the game is over
    // THEN I can save my initials and my score

/*Define variables*/
    //Assignment Code to each section
    var welcome = document.querySelector("#introduction");
    var startBtn = document.querySelector("#start_button");
    var introPage =document.querySelector("#intro_page");
    
    var questionPage = document.querySelector("#question_page");
    var askQuestion = document.querySelector("#ask_question");
    
    var reactButtons = document.querySelectorAll(".choices");
    var answerBtn1 = document.querySelector("#answer_btn1");
    var answerBtn2 = document.querySelector("#answer_btn2");
    var answerBtn3 = document.querySelector("#answer_btn3");
    var answerBtn4 = document.querySelector("#answer_btn4");
       
    var checkLine = document.querySelector("#check_line");
    var scoreBoard = document.querySelector("#submit_page");
    var finalScore = document.querySelector("#final_score");
    var userInitial =document.querySelector("#initial");

    var submitBtn =document.querySelector("#submit_btn");
    var highScorePage =document.querySelector("#highscore_page");
    var scoreRecord =document.querySelector("#score_record");
    var scoreCheck =document.querySelector("#score_check");
    var finish =document.querySelector("#finish");

    var backBtn =document.querySelector("#back_btn");
    var clearBtn=document.querySelector("#clear_btn");
    
    //Define questions (Object)
var questionSource = [
    {
        question: "Questions 1 : String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },
    {
        question: "Questions 2 : Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: "Questions 3 : How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b"
    },
    {
        question: "Questions 4 : How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c"
    },
    {
        question: "Questions 5 : To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b"
    },
    {
        question: "Questions 6 : The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a"
    },
    {
        question: "Questions 7 : How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c"
    },
    {
        question: "Questions 8 : Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a"
    }
];
        // set other variables //

    var timeleft = document.getElementById("timer");
    
    var secondsleft = 60;
    var questionNumber = 0;
    var totalScore = 0;
    var questionCount = 1;
    /* Functions */
        // When I click the start button, THEN a timer starts(The setInterval() Method) //
    function countdown() {

        var timerInterval = setInterval(function () {

            secondsleft--;
            timeleft.textContent = "Time left: " + secondsleft + " s";

                if (secondsleft <= 0){
                    clearInterval(timerInterval);
                    timeleft.textContent = "TIme is up!";

                    // if time is up, show on score board content instead of "all done!" //
                    finish.textContent = "Time is up!";
                    gameOver();

                } else if (questionCount >= questionSource.length +1) {
                    clearInterval(timerInterval);
                    gameOver();
                }
        }, 1000);
    }

        //Click the button to start the quiz
    function startQuiz () {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
  
    }

    