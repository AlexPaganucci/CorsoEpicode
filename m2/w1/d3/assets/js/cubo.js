// var frecciaSx = document.getElementsByClassName('left-arrow');
// var frecciaDx = document.getElementsByClassName('right-arrow');
// var tastoPlay = document.getElementsByClassName('play-pause');
// var cubo = document.querySelectorAll(".cube")
// var length = cubo.length;

// frecciaDx[0].addEventListener('click', function() {
//     let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
//     for ( i = 0 ; i < length; i++) {
//         cubo[i].style.transform = "rotateY("+(angolo+90)+"deg)";
//     }
// })

// frecciaSx[0].addEventListener('click', function() {
//     let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
//     for ( i = 0 ; i < length; i++) {
//         cubo[i].style.transform = "rotateY("+(angolo-90)+"deg)";
//     }
// })

// frecciaSx[0].addEventListener('mouseover', function() {
//     for ( let i = 0 ; i < length; i++) {
//         cubo[i].style.transform = "rotateY(-30deg)";
//     }
// })

// frecciaSx[0].addEventListener('mouseout', function() {
//     for ( let i = 0 ; i < length; i++) {
//         cubo[i].style.transform = "rotateY(0deg)";
//     }
// })


// frecciaDx[0].addEventListener('mouseover', function() {
//     for ( i = 0 ; i < length; i++) {
//         cubo[i].style.transform = "rotateY(30deg)";
//     }
// })

// frecciaDx[0].addEventListener('mouseout', function() {
//     for ( i = 0 ; i < length; i++) {
//         cubo[i].style.transform = "rotateY(0deg)";
//     }
// })

const btnLeft = document.getElementsByClassName("left-arrow");
const btnRight = document.getElementsByClassName("right-arrow");
const btnPlay = document.getElementsByClassName("play-pause");
const cube = document.querySelectorAll(".cube");
const sections = cube.length;

btnRight[0].addEventListener("click", turnRight);
btnRight[0].addEventListener("mouseover", overRight);
btnRight[0].addEventListener("mouseout", outRight);
btnLeft[0].addEventListener("click", turnLeft);
btnLeft[0].addEventListener("mouseover", overLeft);
btnLeft[0].addEventListener("mouseout", outLeft);
btnPlay[0].addEventListener('click', play);

function turnRight() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle+90)+"deg)";
    }
}

function overRight() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle+35)+"deg)";
    }
}
function outRight() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle-35)+"deg)";
    }
}
function turnLeft() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle-90)+"deg)";
    }
}
    
function overLeft() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle-35)+"deg)";
    }
}

function outLeft() {
    let angle = Number(cube[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < sections; index++) {
        cube[index].style.transform = "rotateY("+(angle+35)+"deg)";
    }
}