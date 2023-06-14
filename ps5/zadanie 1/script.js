// Funkcja zapisująca imię do LocalStorage
function saveName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;
    localStorage.setItem('name', name);
  }
  
  // Funkcja odczytująca imię z LocalStorage i wyświetlająca je na ekranie
  function loadName() {
    const nameDisplay = document.getElementById('name-display');
    const name = localStorage.getItem('name');
    nameDisplay.textContent = name;
  }
  