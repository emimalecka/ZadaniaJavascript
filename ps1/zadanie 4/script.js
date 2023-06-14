function reverseText() {
    let text = document.getElementById("input").value;
    let reversedText = text.split("").reverse().join("");
    document.getElementById("result").innerHTML = reversedText;
  }