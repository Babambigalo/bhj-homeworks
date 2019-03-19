function rotator() {
    const spans = document.querySelectorAll('.rotator__case');
    let i = 0;
    let speedAttr = Number(spans[i].dataset.speed);
    let colorAttr =spans[i].dataset.color;
    spans[i].style.color = colorAttr;
    let handler = function() {
        spans[i].classList.toggle('rotator__case_active');
        (i === Array.from(spans).length-1) ? i = 0 : i++;
        speedAttr =Number(spans[i].dataset.speed);
        colorAttr =spans[i].dataset.color;
        spans[i].classList.toggle('rotator__case_active');
        spans[i].style.color = colorAttr;
        setTimeout(handler,speedAttr);
    }
    setTimeout(handler,speedAttr);
}

rotator();


