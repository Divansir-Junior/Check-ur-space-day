// Vai até o rep do Git
function goToGithub(element, url) {
  if (!url) return;
  window.open(url, "_blank"); 
}

function zoomImage(imageElement) {
  const overlay = document.getElementById("overlay");
  const zoomedImage = document.getElementById("imagemZoom");

  // Desfoco de fundo  da página 
  zoomedImage.src = imageElement.src;
  overlay.style.display = "flex";

  // Fecha ao clicar fora da imagem
  overlay.onclick = (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  };
}
