// animação simples das nuvens se movendo
let clouds = document.querySelectorAll(".cloud");

function moveClouds() {
  clouds.forEach((cloud, index) => {
    let left = parseFloat(getComputedStyle(cloud).left || 0);

    // se não tiver left definido, define inicial
    if (isNaN(left)) {
      cloud.style.left = "0px";
      left = 0;
    }

    cloud.style.left = (left + 0.3 + index * 0.1) + "px";

    // reset quando sair da tela
    if (left > window.innerWidth) {
      cloud.style.left = "-150px";
    }
  });
}

setInterval(moveClouds, 30);