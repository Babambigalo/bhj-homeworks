const modal = document.getElementById('subscribe-modal');

const getCookie = (name) => {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if(parts.length === 2) {
        return parts
        .pop()
        .split(';')
        .shift();
    }
}

if(getCookie('closed')) modal.classList.remove('modal_active');

if(modal !== null) {
    const close = document.querySelector('.modal__close');
    console.log(modal,close);
    close.addEventListener('click',()=>{
        document.cookie = 'closed=true';
        modal.classList.remove('modal_active');
    });
}