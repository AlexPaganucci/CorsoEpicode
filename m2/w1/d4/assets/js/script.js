var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function() {
    let menu = document.getElementsByClassName("menu");
    menu[0].classList.toggle("menuOpen");
})

document.querySelector('#btn1').addEventListener('click', function(){
    document.querySelector('.titoloIniziale').style.fontSize = '40px';
})

document.querySelector('#btn2').addEventListener('click', function(){
    document.querySelector('.titoloIniziale').style.color = 'red';
})

document.querySelector('#btn3').addEventListener('click', function(){
    document.querySelector('.titoloIniziale').style.textTransform = 'uppercase';
})

document.querySelector('#btn4').addEventListener('click', function(){
    document.querySelector('.titoloIniziale').style.visibility = 'hidden';
})

document.querySelector('#btn5').addEventListener('click', function(){
    document.querySelector('.titoloIniziale').style.visibility = 'visible';
})

const lista = document.querySelectorAll('.toDoList');

lista.forEach(elemento => {
        elemento.addEventListener('mouseover', function(){
        elemento.style.color ='red';
    })
        elemento.addEventListener('mouseout', function(){
        elemento.style.color ='black';
    })
    elemento.addEventListener('click', function(){
        elemento.classList.toggle('cancella');

    })

})

