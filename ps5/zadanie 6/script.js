// Funkcja aktualizująca zegar
function updateClock() {
    const clockDisplay = document.getElementById('clock');
    
    // Utworzenie obiektu Date
    const currentTime = new Date();
  
    // Pobranie godziny, minut i sekund
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Formatowanie czasu w formacie HH:MM:SS
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    // Wyświetlenie aktualnego czasu
    clockDisplay.textContent = formattedTime;
  }
  
  // Uruchomienie funkcji updateClock co sekundę
  setInterval(updateClock, 1000);
  