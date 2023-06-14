function sumuj (arr, parzyste) {
    if(!Array.isArray(arr))
    return
    let suma = 0
    if(parzyste === true) {

  for ( let i = 0; i < arr.length; i++) {
    if(arr[i] %2 == 0) {
  suma += arr[i] 
    }
  }
}
else if(parzyste === false) {
for ( let i = 0; i <arr.length; i++) {
    if (arr[i] %2 !=0) {
        suma += arr [i]
    }
}
}
  return suma
}



console.log (sumuj ([3, 4, 6, 9], true))
console.log (sumuj ([3, 4, 6, 9], false))
console.log (sumuj("hello"))