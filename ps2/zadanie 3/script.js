
function wypelnij(){
let rozmiar = Number(document.getElementById("a").value)
let tablica = []
for( let i = 0; i< rozmiar; i++) {
    tablica.push(Math.floor(Math.random() * 101))
}
const out = document.getElementById("output")
let max = tablica[0]
for( let wartosc of tablica){
    if(wartosc > max)
    max = wartosc
}
out.innerHTML = tablica.join(",")
out.innerHTML += `<br>Wartość najwieksza: ${max}`
}