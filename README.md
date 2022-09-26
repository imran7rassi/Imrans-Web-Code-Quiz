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



## Usage

The link of the webpage is: https://imran7rassi.github.io/Imrans-Web-Code-Quiz/

Step 1: Load the webpage.
Step 2 :Click the "start" button to start the quiz and the timer.
Step 3 :Choose one from the four choices and you will see whether your answer is correct right away.
Step 4 :When you complete all the questions, or the time runs out, your score will be displayed and you can write down your initials and submit.
Step 5 :After submiting your initial, you can always check Highscore record to see your top 5 scores.
Step 6 :Clear the local record by simply hit the "clear Highscores" button.
Please note that: The total time set for the quiz is 60 seconds. When you answer question wrong, 10 seconds will be subtracted from the timer.
<img src="" >


## Credits

The websites thst I used to refernce:
1. https://www.w3schools.com/
2. https://developer.mozilla.org/
3. https://youtube.com/

## License
