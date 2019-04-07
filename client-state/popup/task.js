const modal = document.getElementById('subscribe-modal');
if(document.cookie === 'closed=true') modal.classList.remove('modal_active');
if(modal !== null) {
    const close = document.querySelector('.modal__close');
    console.log(modal,close);
    close.addEventListener('click',()=>{
        document.cookie = 'closed=true';
        modal.classList.remove('modal_active');
    });
}