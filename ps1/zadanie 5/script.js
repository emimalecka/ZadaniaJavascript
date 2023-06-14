function replaceChars() {
  let inputText = document.getElementById("input").value;
  let oldChar = document.getElementById("oldChar").value;
  let newChar = document.getElementById("newChar").value;

  let result = inputText.replaceAll(oldChar, newChar);
  document.getElementById("result").textContent = result;
}
