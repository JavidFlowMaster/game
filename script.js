let secretNumber, attempts, wins, losses, maxAttempts;

function startGame(difficulty) {
  if (difficulty === "easy") {
    maxAttempts = 10;
  } else if (difficulty === "mid") {
    maxAttempts = 7;
  } else if (difficulty === "hard") {
    maxAttempts = 5;
  }

  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  wins = 0;
  losses = 0;

  updateOutput(difficulty);
}

function updateOutput(difficulty) {
  let output = document.getElementById("output");
  output.innerHTML = `
    <p>Difficulty: ${difficulty}</p>
    <p>Wins: ${wins}</p>
    <p>Losses: ${losses}</p>
    <p>Attempts: ${attempts}/${maxAttempts}</p>
    <input type="text" id="guess" placeholder="Enter your guess" onkeypress="handleKeyPress(event, '${difficulty}')">
    <button onclick="checkGuess('${difficulty}')">Submit Guess</button>
  `;
}

function handleKeyPress(event, difficulty) {
  if (event.key === 'Enter') {
    checkGuess(difficulty);
  }
}

function checkGuess(difficulty) {
  let guess = parseInt(document.getElementById("guess").value);
  let output = document.getElementById("output");

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    output.innerHTML = "<p>Invalid input. Please choose a number between 1 and 100.</p>";
    return;
  }

  if (guess === secretNumber) {
    wins++;
    output.innerHTML = `
      <p>Nice guess!</p>
      <p>Wins: ${wins}</p>
      <p>Losses: ${losses}</p>
      <p>Attempts: ${attempts}/${maxAttempts}</p>
      <input type="text" id="guess" placeholder="Enter your guess" onkeypress="handleKeyPress(event, '${difficulty}')">
      <button onclick="checkGuess('${difficulty}')">Submit Guess</button>
    `;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  } else if (guess < secretNumber) {
    output.innerHTML = `
      <p>Too low! Try HIGHER.</p>
      <p>Wins: ${wins}</p>
      <p>Losses: ${losses}</p>
      <p>Attempts: ${attempts}/${maxAttempts}</p>
      <input type="text" id="guess" placeholder="Enter your guess" onkeypress="handleKeyPress(event, '${difficulty}')">
      <button onclick="checkGuess('${difficulty}')">Submit Guess</button>
    `;
  } else {
    output.innerHTML = `
      <p>Too high! Try LOWER.</p>
      <p>Wins: ${wins}</p>
      <p>Losses: ${losses}</p>
      <p>Attempts: ${attempts}/${maxAttempts}</p>
      <input type="text" id="guess" placeholder="Enter your guess" onkeypress="handleKeyPress(event, '${difficulty}')">
      <button onclick="checkGuess('${difficulty}')">Submit Guess</button>
    `;
  }

  attempts++;

  if (attempts === maxAttempts) {
    losses++;
    output.innerHTML = `
      <p>You lose! Out of attempts.</p>
      <p>Wins: ${wins}</p>
      <p>Losses: ${losses}</p>
      <p>Attempts: ${attempts}/${maxAttempts}</p>
      <p>Secret number was ${secretNumber}</p>
      <button onclick="startGame('${difficulty}')">Play Again</button>
    `;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  }
}
