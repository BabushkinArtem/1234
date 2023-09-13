const makeItFunny = (text,n) => {
    text=prompt("Write text");
    n=prompt("Write n");
    text2 = text;
    while(text%10!=0){
      alert(text%10!=0);
    }
}

const button = document.querySelector('button');
button.addEventListener('click', makeItFunny);