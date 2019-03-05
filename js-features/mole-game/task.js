let hits = 0;
let misses = 0;
function getHole(index){
    let dead = document.getElementById('dead');
    let lost = document.getElementById('lost');
    let element = document.getElementById(index);

    if(element.className.includes('hole_has-mole') === true) {
        hits++;
        dead.textContent=hits;
    }else{
        misses++;
        lost.textContent=misses;
    }

    if(hits === 10) {
        hits = 0;
        misses = 0;
        dead.textContent=hits;
        lost.textContent=misses;
        alert('Вы победили!');
    }

    if(misses === 5) {
        hits=0;
        misses = 0;
        lost.textContent=misses;
        dead.textContent=hits;
        alert('Вы проиграли!');
    }
}