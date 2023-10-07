const woodenFish = document.querySelector('.js-wooden-fish');
var merits = 0;
const msgBox = document.querySelector('.msg-box');
woodenFish.addEventListener('click',()=>{
    merits++;
    startAnimate();
})

function startAnimate() {
    const div = document.createElement("div");
    div.classList.add("merits-accumulate-animation");
    div.innerText = "功德 + 1";
    msgBox.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 100000);
  }