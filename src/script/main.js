let imgApi = document.getElementById("imgApi");
let title = document.getElementById("title");
let container = document.querySelector(".container");

// Manda a data para o fetch
function sendDate() {
  document.getElementById("btnSend").addEventListener("click", async () => {
    const date = document.getElementById("dateInput").value;

    if (!date) {
      alert("DATA INVÁLIDA");
      return; 
    }

    const isValid = isDataValid(date);
    if (!isValid) return;;
    await fetchAPOD(date);   
    changeContent();         
  });
}

// Faz a conexão com a API da NASA
async function fetchAPOD(date) {
  const PUBLIC_API_KEY = "IZDvfoMZnJxWaKw8GsBzNSXSdEZKsDWdVLGGDkjq";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${PUBLIC_API_KEY}&date=${date}`;

  try {
    const response = await fetch(url);

    // Trata caso de resposta 400 (data sem imagem disponível)
    if (response.status === 400) {
      title.textContent = "NO IMAGE";
      title.style.color = "red";
      imgApi.style.visibility = "hidden";
      return; 
    }

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    const data = await response.json();

    // Atualiza o conteúdo
    imgApi.src = data.url;
    title.textContent = data.title;
    title.style.color = ""; // reseta a cor se antes tinha dado erro
    imgApi.style.visibility = "visible";
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    title.textContent = "Erro ao buscar dados";
    title.style.color = "red";
    imgApi.style.visibility = "hidden";
  }
}


//Checa se o ano é maior que o ano atual
function isDataValid(dateString) {
  const today = new Date();
  const actualYear = today.getFullYear();

  const dataValue = new Date(dateString);
  const yearValue = dataValue.getFullYear();

  if (yearValue > actualYear) {
    alert("YEAR INVALID");
    return false;
  }

  return true;
}

// Muda o tamanho dos componentes
function changeContent() {
  imgApi.style.display = "block";
  imgApi.style.height = "500px";

  container.style.width = "700px";
  container.style.height = "600px";
}


sendDate();
