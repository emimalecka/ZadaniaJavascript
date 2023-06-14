function runProgram() {
    const inputElement = document.getElementById("nazwiska");
    const nazwiska = inputElement.value.split(",");
  
    nazwiska.sort((a, b) => a.length - b.length);
  
    const wynikElement = document.getElementById("wynik");
    wynikElement.innerHTML = `Posortowane nazwiska: ${nazwiska}`;
  }
  