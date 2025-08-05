// Vai até o rep do Git
function goToGithub(element, url) {
  if (!url) return;
  window.open(url, "_blank");
}

function zoomImage(imageElement) {
  const overlay = document.getElementById("overlay");
  const zoomedImage = document.getElementById("imagemZoom");

  zoomedImage.src = imageElement.src;
  overlay.style.display = "flex";

  function closeZoom(event) {
    if (event.target !== zoomedImage) {
      overlay.style.display = "none";
      zoomedImage.src = "";
      window.removeEventListener("click", closeZoom);
    }
  }

  setTimeout(() => {
    window.addEventListener("click", closeZoom);
  }, 0);
}
