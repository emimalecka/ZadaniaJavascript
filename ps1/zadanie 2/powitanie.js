// 2. Napisz program, który prosi użytkownika o podanie imienia i nazwiska, a następnie 
// wyświetla na ekranie powitanie w formacie "Witaj, {imie} {nazwisko}!". 

function displayGreeting() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let greeting = `Witaj, ${firstName} ${lastName}!`;
    document.getElementById("greeting").innerHTML = greeting;
  }