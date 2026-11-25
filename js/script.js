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

  tempId = setTimeout(intentarSaltar, Math.random() * 10000); // entre 0 y 10 s
}

const intervalId = setInterval(() => {
  if(timer > 0){
    timer--;
    timerText.textContent = timer;
  }
  else{
    timerText.textContent = "Ready!!!";
  }
    
}, 1000);

//clearInterval(intervalId);

setTimeout(intentarSaltar, 5000);

gatos.forEach(gato => {
  gato.addEventListener("click", () => {
    gato.classList.remove("jumping");

    for(const gato of gatos){
        if (gato.classList.contains("jumping")) {
            return;
        }
    }
    clearTimeout(tempId);
    tempId = setTimeout(intentarSaltar, Math.random() * 10000 + 5000); // entre 5 y 15 s
  });
});

tranqAll.addEventListener("click", () =>{
  let check = false;

  gatos.forEach(gato => {
      if(gato.classList.contains("jumping")){
        check = true;
      }
    })

  if(check)
    if (timer <= 0)
    {
      gatos.forEach(gato => {
        gato.classList.remove("jumping");
      })

      timer = maxTimer;
    }
})