function generujTowary() {
    const towarList = document.getElementById("towary").value;
    const towary = towarList.split(",");
  
    const losujCene = () => parseFloat((Math.random() * 99.99).toFixed(2));
  
    const towaryZCenami = towary.map((towar) => {
      return {
        nazwa: towar.trim(),
        cena: losujCene()
      }
    });
  
    const tabela = document.getElementById("tabela");
    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";
  
    towaryZCenami.forEach((towar) => {
      const tr = document.createElement("tr");
      const tdNazwa = document.createElement("td");
      const tdCena = document.createElement("td");
      tdNazwa.textContent = towar.nazwa;
      tdCena.textContent = towar.cena.toFixed(2) + " zł";
      tr.appendChild(tdNazwa);
      tr.appendChild(tdCena);
      tbody.appendChild(tr);
    });
  }
  