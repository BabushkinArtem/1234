function makeItFunny() {
  var text = prompt("Input text:");
  var n = parseInt(prompt("Введите значение n:"));

  var text2 = "";
  var i = 0;
  
  while (i < text.length){
    if ((i + 1) % n === 0) {
      text2 += text[i].toUpperCase();
    } else {
      text2 += text[i];
    }
    i++;
  }
  alert("Result: " + text2);
}
        const button = document.querySelector('button');
button.addEventListener('click', makeItFunny);
