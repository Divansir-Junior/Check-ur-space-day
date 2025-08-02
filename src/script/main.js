
//Manda a data para o fetch
function sendDate() {
    const btnSend = document.getElementById("btnSend").addEventListener("click",() => {
        checkDate();
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

sendDate();