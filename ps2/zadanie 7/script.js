const studenci = [
    { imie: "Jan", nazwisko: "Kowalski", punkty: 70 },
    { imie: "Anna", nazwisko: "Nowak", punkty: 85 },
    { imie: "Piotr", nazwisko: "Wójcik", punkty: 50 },
    { imie: "Marta", nazwisko: "Lewandowska", punkty: 90 },
    { imie: "Tomasz", nazwisko: "Kamiński", punkty: 75 },
  ];
  
  // oblicz średnią punktów
  const srednia = studenci.reduce((suma, student) => suma + student.punkty, 0) / studenci.length;
  
  // wyświetl dane studentów, którzy zdobyli więcej niż średnia
  const lista = document.getElementById("lista");
  
  studenci
    .filter(student => student.punkty > srednia)
    .forEach(student => {
      const li = document.createElement("li");
      li.innerText = `${student.imie} ${student.nazwisko} - ${student.punkty} punktów`;
      lista.appendChild(li);
    });
  