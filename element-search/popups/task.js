function popUp(){
    let modalClose = document.getElementsByClassName('modal__close');
    let modalMain = document.getElementById('modal_main');
    let modalSuccess = document.getElementById('modal_success');
    let showSuccess = document.getElementsByClassName('show-success');

    modalClose[0].onclick = function() {
        modalMain.style.display = 'none';    
    }

    showSuccess[0].onclick = function(){
        modalMain.style.display = 'none';
        modalSuccess.className += ' modal_active' ;
    }   

    modalClose[2].onclick = function() {
        modalSuccess.style.display = 'none';
    }
}

popUp();
