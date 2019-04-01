const links = document.querySelectorAll('.has-tooltip');
links.forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
        event.preventDefault();
        if(elem.childNodes.length > 1){
            elem.removeChild(elem.childNodes[1]);
        }else{
            links.forEach((link =>{
                if(link.childNodes.length > 1) link.removeChild(link.childNodes[1]);
           }));           
            const elemOffsetValue = String(elem.offsetLeft) + 'px';
            console.log(elem.getBoundingClientRect().top);
            const tip = document.createElement('div');
            tip.textContent = elem.getAttribute('title');
            tip.classList.add('tooltip');
            tip.classList.add('tooltip_active');
            tip.style.marginLeft = elemOffsetValue;
            tip.style.position = 'absolute';
            elem.appendChild(tip);
        }
    })
})