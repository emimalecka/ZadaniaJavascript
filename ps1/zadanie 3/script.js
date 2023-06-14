// 3. Napisz program, który prosi użytkownika o wprowadzenie liczby i wyświetla na 
// ekranie komunikat informujący, czy liczba jest parzysta czy nieparzysta
      function checkNumber() {
        const number = document.getElementById("number").value;
        
        if (number % 2 === 0) {
          document.getElementById("result").innerHTML = `${number} jest liczbą parzystą.`;
        } else {
          document.getElementById("result").innerHTML = `${number} jest liczbą nieparzystą.`;
        }
      }
