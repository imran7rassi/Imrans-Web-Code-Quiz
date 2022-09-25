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
    