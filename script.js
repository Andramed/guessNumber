'use strict';

let secretNumber = Math.trunc( Math.random() * 20) + 1;
let score = 20;
let higScore = [];





document.querySelector('.check').addEventListener('click', function() {

	let guessingNumber = Number(document.querySelector('.number-input').value);

	
	if (!guessingNumber) {
		document.querySelector('.guess-message').textContent = 'Введите номер пажалуста';
	} else if (guessingNumber == secretNumber) {
		document.querySelector('.guess-message').textContent = 'Правильно!';
		document.querySelector('.question').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
		document.querySelector('.question').style.width = '50rem';
		higScore.push(score);
		console.log(higScore);
		let maxScore = Math.max.apply(null, higScore);
		console.log(maxScore);
		document.querySelector('.highscore').textContent = maxScore;
	} else if (guessingNumber > secretNumber) {
			if (score > 1) {
				document.querySelector('.guess-message').textContent = 'Слишком большое';
				score--;
				document.querySelector('.score').textContent = score;
			} else  {
				document.querySelector('.guess-message').textContent = 'Game Over';
				document.querySelector('.score').textContent = `Вы проиграли у вас ${score -1} очков`
			}
			
	} else if (guessingNumber < secretNumber) {
		if (score > 1) {
			document.querySelector('.guess-message').textContent = 'Слишком маленкое';
			score--;
			document.querySelector('.score').textContent = score;
		} else  {
			document.querySelector('.guess-message').textContent = 'Game Over';
			document.querySelector('.score').textContent = `Вы проиграли у вас ${score -1} очков`
		}		
	}
});

document.querySelector('.again').addEventListener('click', function() {
	
	secretNumber = Math.trunc( Math.random() * 20) + 1;
	score = 20;

	document.querySelector('.question').textContent = '???';
	document.querySelector('.guess-message').textContent = 'Начни угадывать';
	document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
	document.querySelector('.question').style.width = '25rem';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number-input').innerHTML = 'Clear';
	document.querySelector('.number-input').value = ' ';
	document.querySelector('.number-input').autofocus = false;
});

console.log(secretNumber);