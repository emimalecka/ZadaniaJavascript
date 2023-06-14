function lista(){
    let tekst = document.getElementById("a").value
    let tablica = tekst.split (",")

    const out = document.getElementById("output")
    let suma = 0
    for (let wartosc of tablica) {
        suma += Number (wartosc)
    }
    out.innerHtml = `suma wynosi ${suma}`
}