// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to HTML elements
const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');

// Counter for the number of attempts
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts!`;
    message.style.color = 'green';
    submitButton.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low, try again!';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high, try again!';
    message.style.color = 'red';
  }

  guessField.value = ''; // Clear the input field
}
