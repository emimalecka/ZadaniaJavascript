// 6.	Napisz program, który wylosuje trzy liczby całkowite z zakresu od 1 do 100 i wyświetli je na ekranie. Następnie program powinien znaleźć i wyświetlić największą z tych liczb.
// a.	Funkcja Math.random() zwraca losową wartość z zakresu <0; 1)
// b.	Do zamiany wartości rzeczywistej na całkowitą możesz skorzystać z funkcji takich jak Math.floor(), Math.ceil() lub Math.round()
// c.	Do znalezienia największej wartości możesz użyć instrukcji warunkowej if lub funkcji Math.max().


// Losowanie trzech liczb całkowitych z zakresu od 1 do 100
const liczba1 = Math.floor(Math.random() * 100) + 1;
const liczba2 = Math.floor(Math.random() * 100) + 1;
const liczba3 = Math.floor(Math.random() * 100) + 1;

// Wyświetlenie wylosowanych liczb na stronie
document.getElementById("liczba1").textContent = liczba1;
document.getElementById("liczba2").textContent = liczba2;
document.getElementById("liczba3").textContent = liczba3;

// Znalezienie największej z trzech liczb
const maksimum = Math.max(liczba1, liczba2, liczba3);

// Wyświetlenie największej liczby na stronie
document.getElementById("maksimum").textContent = maksimum;
