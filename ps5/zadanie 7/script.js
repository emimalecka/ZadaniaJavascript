let timerInterval;
let startTime;
let lapCounter = 1;

// Funkcja rozpoczynająca odliczanie
function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 100);
}

// Funkcja zatrzymująca odliczanie
function stopTimer() {
  clearInterval(timerInterval);
}

// Funkcja aktualizująca stoper
function updateTimer() {
  const timerDisplay = document.getElementById('timer');
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - startTime) / 100;
  timerDisplay.textContent = (elapsedTime / 10).toFixed(1) + ' s';
}

// Funkcja zapisująca międzyczas
function recordLap() {
  const lapsList = document.getElementById('laps');
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - startTime) / 100;
  const lapTime = (elapsedTime / 10).toFixed(1) + ' s';
  const lapItem = document.createElement('li');
  lapItem.textContent = 'Międzyczas ' + lapCounter + ': ' + lapTime;
  lapsList.appendChild(lapItem);
  lapCounter++;
}
