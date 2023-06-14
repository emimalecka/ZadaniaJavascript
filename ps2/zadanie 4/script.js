function runProgram() {
    let sum = 0;
    const randomNumbers = [];
  
    while (sum < 200) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      sum += randomNumber;
      randomNumbers.push(randomNumber);
    }
  
    const oddNumbers = randomNumbers.filter(number => number % 2 !== 0);
  
    const wynikElement = document.getElementById("wynik");
    wynikElement.innerHTML = `Wylosowane liczby: ${randomNumbers}<br>Liczby nieparzyste: ${oddNumbers}`;
  }
  