let imgApi = document.getElementById("imgApi");
let title = document.getElementById("title");
let container = document.getElementById("container");

// Manda a data para o fetch
function sendDate() {
  document.getElementById("btnSend").addEventListener("click", async () => {
    const date = document.getElementById("dateInput").value;

    if (!date) {
      alert("DATA INVÁLIDA");
      return; // Impede o resto
    }

    await fetchAPOD(date);   // passa a data válida
    changeContent();         // altera o layout
  });
}

// Faz a conexão com a API da Nasa
async function fetchAPOD(date) {
  const PUBLIC_API_KEY = "IZDvfoMZnJxWaKw8GsBzNSXSdEZKsDWdVLGGDkjq";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${PUBLIC_API_KEY}&date=${date}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    const data = await response.json();

    // Atualiza o conteúdo
    imgApi.src = data.url;
    title.textContent = data.title;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// Muda o tamanho dos componentes
function changeContent() {
  imgApi.style.display = "block";
  imgApi.style.height = "500px";

  container.style.width = "400px";
  container.style.height = "700px";
}


sendDate();
