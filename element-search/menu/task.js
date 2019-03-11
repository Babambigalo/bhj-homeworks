function navigateMenu(){
    let menuLink = Array.from(document.querySelectorAll('ul li a.menu__link'));
    let menu_sub = Array.from(document.querySelectorAll('ul.menu_sub'));
    let about = menuLink[1];
    let services = menuLink[5];
    
    about.onclick = function() {
       menu_sub[0].className+= ' menu_active';
       menu_sub[1].className = 'menu menu_sub';
       return false;
    }

    services.onclick = function() {
        menu_sub[1].className+= ' menu_active';
        menu_sub[0].className = 'menu menu_sub';
        return false;
    }
}

navigateMenu();
