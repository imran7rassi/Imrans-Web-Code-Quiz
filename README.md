# Imrans-Web-Code-Quiz

## Description

JavaScript is a powerful language that makes everything possible. The beauty of the syntax makes all kinds of learners and developers understand the language with ease and astounding pieces of technology are created.

This JavaScript Code Quiz challenge has 8 questions total and they’re all multiple choice. Upon completion, you will receive a score. By submitting your inital, your score will be added to a Highscore record. The Highscore board allows you to track your personal scores and display the top 5 scores yo have.

The webpage is easy for you to access through one link:
https://imran7rassi.github.io/Imrans-Web-Code-Quiz/ and is designed to work with different screen sizes as you need.

Want to test your knowledge of JavaScript? Give our free coding quiz a try!

## Code-Snippet

Java Script

Function to set the timer

    function countdown() { 
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";
    if (secondsLeft <= 0){
    clearInterval(timerInterval);
    timeLeft.textContent = "Time is up!"; 
    // if time is up, show on score board content instead of "all done!"
    finish.textContent = "Time is up!";
    gameOver();
    } else  if(questionCount >= questionSource.length +1) {
        clearInterval(timerInterval);
        gameOver();
        } 
    }, 1000);
  }

Function to sort score and ranking the highscore list


    function sort () {
    var unsortedList = getScore();
    if (getScore == null ){
        return;
    } else{
        unsortedList.sort(function(a,b){
        return b.score - a.score;
    })
    return unsortedList;
}};

Function to check the answer is correct or wrong

    function checkAnswer(event) {
    event.preventDefault();
    //make it display
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);

    // answer check
    if (questionSource[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct!"; 
        totalScore = totalScore + 1;

    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong! The correct answer is " + questionSource[questionNumber].answer + " .";
    }
         //presente another question
    if (questionNumber < questionSource.length -1 ) {
    // call showQuestions to bring in next question when any reactBtn is clicked
        showQuestion(questionNumber +1);
    } else {
    gameOver();
}


## Usage

The link of the webpage is: https://imran7rassi.github.io/Imrans-Web-Code-Quiz/

Step 1: Load the webpage.
Step 2 :Click the "start" button to start the quiz and the timer.
Step 3 :Choose one from the four choices and you will see whether your answer is correct right away.
Step 4 :When you complete all the questions, or the time runs out, your score will be displayed and you can write down your initials and submit.
Step 5 :After submiting your initial, you can always check Highscore record to see your top 5 scores.
Step 6 :Clear the local record by simply hit the "clear Highscores" button.
Please note that: The total time set for the quiz is 60 seconds. When you answer question wrong, 10 seconds will be subtracted from the timer.
<img src="./assets/web-code-quiz.jpg." >


## Credits

The websites thst I used to refernce:
1. https://www.w3schools.com/
2. https://developer.mozilla.org/
3. https://youtube.com/

## License

MIT License

Copyright (c) 2022 Imran rassi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.