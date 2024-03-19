let username = '';
let currentGame = '';
let score = 0;
let difficulty = 'Easy'; // Default difficulty

function startGame() {
  username = document.getElementById('username').value;
  document.querySelector('.login').classList.add('hidden');
  document.getElementById('gameSelection').classList.remove('hidden');
}

function startGuessingGame() {
  currentGame = 'guessing';
  document.getElementById('guessingGame').classList.remove('hidden');
  document.getElementById('arithmeticGame').classList.add('hidden');
  document.getElementById('scoreContainer').classList.add('hidden');
  document.getElementById('guessMessage').textContent = '';
  generateRandomNumber();
}

function startArithmeticGame() {
  currentGame = 'arithmetic';
  document.getElementById('arithmeticGame').classList.remove('hidden');
  document.getElementById('guessingGame').classList.add('hidden');
  document.getElementById('scoreContainer').classList.add('hidden');
  document.getElementById('arithmeticMessage').textContent = '';
  generateArithmeticProblem();
}

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function generateArithmeticProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  document.getElementById('problem').textContent = `${num1} ${operator} ${num2}`;
}

function checkGuess() {
  const guessField = document.getElementById('guessField');
  const guessMessage = document.getElementById('guessMessage');
  const userGuess = parseInt(guessField.value);
  if (userGuess === randomNumber) {
    guessMessage.textContent = `Congratulations! You guessed the correct number ${randomNumber}!`;
    score += 10;
    updateScoreboard();
    guessField.disabled = true;
  } else {
    guessMessage.textContent = userGuess < randomNumber ? 'Too low, try again!' : 'Too high, try again!';
  }
}

function checkArithmetic() {
  const arithmeticAnswer = document.getElementById('arithmeticAnswer');
  const arithmeticMessage = document.getElementById('arithmeticMessage');
  const problem = document.getElementById('problem').textContent;
  const [num1, operator, num2] = problem.split(' ');
  const correctAnswer = eval(num1 + operator + num2);
  const userAnswer = parseInt(arithmeticAnswer.value);
  if (userAnswer === correctAnswer) {
    arithmeticMessage.textContent = 'Congratulations! You solved the problem!';
    score += 10;
    updateScoreboard();
    arithmeticAnswer.disabled = true;
  } else {
    arithmeticMessage.textContent = 'Incorrect answer, try again!';
  }
}

function updateScoreboard() {
  document.getElementById('scoreUsername').textContent = username;
  document.getElementById('scoreGame').textContent = currentGame;
  document.getElementById('score').textContent = score;
  document.getElementById('difficulty').textContent = difficulty;
  document.getElementById('scoreContainer').classList.remove('hidden');
}
