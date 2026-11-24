const gatos = document.querySelectorAll(".cat-pill");
const tranqAll = document.querySelector(".tranq-title")
const timerText = document.querySelector(".timer")
let tempId;

const maxTimer = 60;
let timer = 0;

function intentarSaltar() {
    const disponibles = [...gatos].filter(gato => !gato.classList.contains("jumping"));

    for(const gato of gatos){
        if (!gato.classList.contains("jumping") && Math.random() < 1/disponibles.length) {
            gato.classList.add("jumping");
            break;
        }
    }

  tempId = setTimeout(intentarSaltar, Math.random() * 15000); // entre 0 y 15 s
}

setInterval(() => {
  if(timer > 0){
    timer--;
    timerText.textContent = timer;
  }
  else{
    timerText.textContent = "Ready!!!";
  }
    
}, 1000);

setTimeout(intentarSaltar, 15000);

gatos.forEach(gato => {
  gato.addEventListener("click", () => {
    gato.classList.remove("jumping");

    for(const gato of gatos){
        if (gato.classList.contains("jumping")) {
            return;
        }
    }
    clearTimeout(tempId);
    tempId = setTimeout(intentarSaltar, Math.random() * 10000 + 10000); // entre 10 y 20 s
  });
});

tranqAll.addEventListener("click", () =>{
  if (timer <= 0)
  {
    gatos.forEach(gato => {
      gato.classList.remove("jumping");
    })

    timer = maxTimer;
  }
})