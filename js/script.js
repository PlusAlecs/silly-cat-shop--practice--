const gatos = document.querySelectorAll(".cat-pill");

function intentarSaltar() {
    for(const gato of gatos){
        if (!gato.classList.contains("jumping") && Math.random() < 1/gatos.length) {
            gato.classList.add("jumping");
            break;
        }
    }

  setTimeout(intentarSaltar, Math.random() * 2000 + 1000); // entre 1 y 3 s
}

setTimeout(intentarSaltar, 10000); // entre 1 y 3 s

gatos.forEach(gato => {
  gato.addEventListener("click", () => {
    gato.classList.remove("jumping");
  });
});