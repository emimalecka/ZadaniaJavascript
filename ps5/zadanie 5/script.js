// Funkcja wyświetlająca komunikat po dwóch sekundach
function showMessage() {
    const messageDisplay = document.getElementById('message');
    
    // Wyczyszczenie poprzedniego komunikatu, jeśli taki istnieje
    messageDisplay.textContent = '';
  
    // Ustawienie opóźnienia dwóch sekund i wyświetlenie komunikatu
    setTimeout(function() {
      messageDisplay.textContent = 'witaj!';
    }, 2000);
  }
  