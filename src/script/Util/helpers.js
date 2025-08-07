// Vai até o rep do Git
function goToGithub(element, url) {
  if (!url) return;
  window.open(url, "_blank");
}


// Exibe a imagem em zoom
function zoomImage(imageElement) {
  const overlay = document.getElementById("overlay");
  const zoomedImage = document.getElementById("imagemZoom");
  hideFooter();

  zoomedImage.src = imageElement.src;
  overlay.style.display = "flex";

  // Ativa o fechamento após exibição
  setTimeout(() => {
    window.addEventListener("click", closeZoom);
  }, 0);
}

// Fecha o zoom ao clicar fora da imagem
function closeZoom(event) {
  const zoomedImage = document.getElementById("imagemZoom");
  const overlay = document.getElementById("overlay");

  if (event.target !== zoomedImage) {
    overlay.style.display = "none";
    zoomedImage.src = "";

    showFooter();

    window.removeEventListener("click", closeZoom);
  }
}

// Oculta o rodapé
function hideFooter() {
  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.display = "none";
  }
}

// Exibe o rodapé
function showFooter() {
  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.display = "flex";
  }
}
