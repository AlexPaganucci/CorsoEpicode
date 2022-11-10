var elenco = [];
var elencoHTML = document.getElementById('tbody');

window.addEventListener('DOMContentLoaded', printData);

function printData(){
    fetch('http://localhost:3000/users').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        if (elenco.length > 0){
            elencoHTML.innerHTML = '';
            elenco.map(function(element){
                let riga = document.createElement('tr');
                let cella1 = document.createElement('td');
                let cella2 = document.createElement('td');
                let cella3 = document.createElement('td');
                let cella4 = document.createElement('td');
                cella1.innerHTML = element.id;
                cella2.innerHTML = element.name;
                cella3.innerHTML = element.username;
                cella4.innerHTML = element.email;
                elencoHTML.appendChild(riga);
                riga.append(cella1, cella2, cella3, cella4);
            })
        }
    })
}