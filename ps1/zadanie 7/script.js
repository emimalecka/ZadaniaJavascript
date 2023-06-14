function obliczPole() {
    let a = document.getElementById("a").value;
    let h = document.getElementById("h").value;
    let pole = 0.5 * a * h;
    document.getElementById("wynik").innerHTML = "Pole trójkąta wynosi: " + pole;
  }
  