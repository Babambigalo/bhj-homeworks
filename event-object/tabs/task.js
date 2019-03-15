function tabNavigate(){
    const tabs = Array.from(document.getElementsByClassName('tab'));
    const tabContent = Array.from(document.getElementsByClassName('tab__content'));
    let tabActive;

    tabs.forEach(function(e,i){
        if(e.classList.contains('tab_active')) tabActive = i;
        e.addEventListener('click',function(){
            tabs[tabActive].classList.remove('tab_active');
            tabContent[tabActive].classList.remove('tab__content_active');
            e.classList.add('tab_active');
            tabContent[i].classList.add('tab__content_active');
        
        })
    })
}

tabNavigate();