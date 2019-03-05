let image = document.getElementById('cookie');
let count = document.getElementById('clicker__counter');
let clicked = false;
let clickCounter = 0;
image.onclick = function() {
    clickCounter++;
    count.textContent=clickCounter;
    if(!clicked) {
        image.style.width = '170px';
        clicked = true;
    }else {
        image.style.width = '200px';
        clicked = false;
    }
}
    