'use strict';
let score = 20;
let higScore = [];
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let input = document.querySelector('.number-input');
let guessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let body = document.querySelector('body');
let highScoreDiv = document.querySelector('.highscore');
let scoreDiv = document.querySelector('.score');
let btnCheck = document.querySelector('.check');
let btnAgain =  document.querySelector('.again');

btnCheck.addEventListener('click', checknumber);
btnAgain.addEventListener('click', startAgain);

const addTextToGuessMessage = (message) => {
    guessMessage.textContent = message;
}

const addTextToQuestion = (message) => {
    question.textContent = message;
}

const addBgColor = (element, value) => {
    element.style.backgroundColor = value;
}

const addWidth = (element, value) => {
    element.style.width = value;
}

const addScore = (message) => {
    scoreDiv.textContent = message;
}

const addMaxScore = (score) => {
    higScore.push(score);
    let maxScore = Math.max.apply(null, higScore);
    highScoreDiv.textContent = maxScore;
}

const addRenewToInput = (message) => {
    input.value = message;
}

function checknumber  ()  {
    let inputNumber = Number(document.querySelector('.number-input').value);
    if (!inputNumber) {
        addTextToGuessMessage('Input number');
    } else if (inputNumber == secretNumber) {
        addTextToQuestion(secretNumber);
        addTextToGuessMessage('Right!');
        addBgColor(body, 'rgb(9, 250, 21)');
        addWidth(question, '50rem');
        addMaxScore(score);
    } else if (inputNumber != secretNumber) {
        if (score >= 1) {
            addTextToGuessMessage(inputNumber > secretNumber ? 'Too big number' : 'To small number');
            score--;
            addScore(score);
        } else {
            addTextToGuessMessage('Game Over!')
            addScore('You have to many point')
        }
    }
}

function startAgain  ()  {
    secretNumber = Math.trunc( Math.random() * 20) + 1;
    score = 20;
    addTextToQuestion('???');
    addTextToGuessMessage('Start to Guess');
    addBgColor(body, 'rgb(0, 0, 0)');
    addWidth(question, '25rem');
    addScore(score);
    addRenewToInput(' ');
    console.log(secretNumber)
}






