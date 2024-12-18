let laun = Number(0);
let sum = Number(0);
let media = Number(0);

function changeColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.getElementById("encabezado").style.backgroundColor = ("rgb( " + r + " , " + g + " , " + b)
}

function launch() {
    let n = Math.floor(Math.random()*90)+10;
    document.getElementById("ruleta").innerText = n;
    laun++;
    document.getElementById("lanzamientos").innerText = laun;
    sum += n;
    document.getElementById("suma").innerText = sum;
    media = sum / laun; 
    document.getElementById("media").innerText = media;
}