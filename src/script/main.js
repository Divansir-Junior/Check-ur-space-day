// Checa se é uma data válida
function checkDate() {
    const date = document.getElementById("dateInput").value;
    if(!date.value) {
        alert("INVALID DATA");
    }
}

checkDate();