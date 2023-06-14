// 1. Napisz program, który prosi użytkownika o wprowadzenie dwóch liczb, a następnie 
// oblicza i wyświetla wynik dodawania, odejmowania, mnożenia i dzielenia tych liczb. 

function klik() {
    let a = Number(document.getElementById("pole1").value)
    let b = Number(document.getElementById("pole2").value)

    let suma = a + b;
    let odejmowanie = a - b;
    let mnozenie = a * b;
    let dzielenie = a / b ;


    document.getElementById("wyjscie").innerHTML = `Suma liczb ${a} i ${b} wynosi ${suma}.<br> Wynik odejmowania liczb ${a} i ${b} wynosi ${odejmowanie}.<br> Wynik mnożenia liczb ${a} i ${b} wynosi ${mnozenie}.<br> Wynik dzielenia liczb ${a} i ${b} wynosi ${dzielenie}`;
    
}