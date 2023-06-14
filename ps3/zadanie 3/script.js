let paragrafy = document.querySelectorAll("p")

for( let i = 0; i < paragrafy.length; i++) {
    
    paragrafy[i].style.color = "blue"
    paragrafy[i].style.title = "This is title"
}
for ( let i = 1; i < paragrafy.length; i+=2) {
    paragrafy[i].style.fontSize = "150%"
}