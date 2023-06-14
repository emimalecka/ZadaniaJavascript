function wyswietlLiczby() {
    let number1 = Number(document.getElementById("a").value);
    let number2 = Number(document.getElementById("b").value);
     
    const out = document.getElementById("wynik")

    let tab= []
    for ( let i = number1; i <= number2; i++){
        tab.push(i)
}

out.innerHTML = tab.join ("<br>")
}