let imgApi = document.getElementById("imgApi");
let title = document.getElementById("title");
let container = document.getElementById("container");
//Manda a data para o fetch
function sendDate() {
    const btnSend = document.getElementById("btnSend").addEventListener("click",() => {
        checkDate();
        fetchAPOD();
        changeContent();
    })
}

// Checa se é uma data válida
function checkDate() {
    const date = document.getElementById("dateInput").value;
    if(!date) {
        alert("INVALID DATA");
    }
    console.log("DATA"  + date.value);
   
}
// Faz a conexão com a API da Nasa .
async function fetchAPOD() {
    const dateInput = document.getElementById("dateInput").value;
    const PUBLIC_API_KEY = "IZDvfoMZnJxWaKw8GsBzNSXSdEZKsDWdVLGGDkjq";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${PUBLIC_API_KEY}&date=${dateInput}`;
    
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`ERROR: ${response.status}`);
        }

        const data = await response.json();

        //Atuliza o conteúdo
        imgApi.src = data.url;

        title.textContent =  data.title;

    } catch(error) {
        console.log("Error to fetch data" + error);
    }
}

// Muda o tamanho dos componentes .
function changeContent() {
    imgApi.style.display = "block";
    imgApi.style.height = "500px";

    container.style.width = "950px";
    container.style.height - "700px"

}
sendDate();