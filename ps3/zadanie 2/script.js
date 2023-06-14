function range (a, b) {
    let array = []
    for ( let i = a ; i>=b; i++){
        array.push (i)
    }
    return array
}

console.log (range (3, 8))
console.log (range(8,3))