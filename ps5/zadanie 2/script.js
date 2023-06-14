// Funkcja wykonująca rzut kostką sześciościenną
function rollDice() {
    const resultDisplay = document.getElementById('result');
    const lastRollsList = document.getElementById('last-rolls');
  
    // Wykonanie rzutu kostką
    const roll = Math.floor(Math.random() * 6) + 1;
  
    // Wyświetlenie wyniku rzutu
    resultDisplay.textContent = `Wynik: ${roll}`;
  
    // Pobranie ostatnich rzutów z LocalStorage
    let lastRolls = JSON.parse(localStorage.getItem('lastRolls')) || [];
  
    // Dodanie aktualnego rzutu do listy ostatnich rzutów
    lastRolls.push(roll);
  
    // Jeśli lista ma więcej niż 10 rzutów, usuń najstarszy rzut
    if (lastRolls.length > 10) {
      lastRolls.shift();
    }
  
    // Zapisanie listy ostatnich rzutów do LocalStorage
    localStorage.setItem('lastRolls', JSON.stringify(lastRolls));
  
    // Wyczyszczenie listy ostatnich rzutów
    lastRollsList.innerHTML = '';
  
    // Wyświetlenie ostatnich rzutów na ekranie
    lastRolls.forEach((roll) => {
      const listItem = document.createElement('li');
      listItem.textContent = roll;
      lastRollsList.appendChild(listItem);
    });
  }
  
  // Wywołanie funkcji rollDice() przy otwarciu strony, aby wyświetlić ostatnie rzuty
  window.onload = rollDice;
  