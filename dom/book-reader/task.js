const links = document.querySelectorAll('a');
let activeFontSize = document.querySelector('.font-size_active');
let activeColor = document.querySelectorAll('.color_active')[0];
let activeBackground = document.querySelectorAll('.color_active')[1];
const bookContent = document.querySelector('.book__content');

links.forEach((elem,index) =>{
    elem.addEventListener('click',(event)=>{
        event.preventDefault();
        if(elem.parentElement.classList.contains('book__control_font-size')){
            activeFontSize.classList.remove('font-size_active');
            elem.classList.add('font-size_active');
            activeFontSize = elem;
            if(elem.dataset.size === 'big'){
                bookContent.classList.remove('book_fs-small');
                bookContent.classList.add('book_fs-big');
            }else if(elem.dataset.size === 'small'){
                bookContent.classList.remove('book_fs-big');
                bookContent.classList.add('book_fs-small');
            }else{
                bookContent.classList.remove('book_fs-small');
                bookContent.classList.remove('book_fs-big');
            }
        }else if(elem.parentElement.classList.contains('book__control_color')){
            activeColor.classList.remove('color_active');
            elem.classList.add('color_active');
            activeColor = elem;
            if(elem.dataset.color === 'gray'){
                bookContent.classList.remove('book_color-whitesmoke');
                bookContent.classList.add('book_color-gray');
            }else if(elem.dataset.color === 'whitesmoke'){
                bookContent.classList.remove('book_color-gray');
                bookContent.classList.add('book_color-whitesmoke');
            }else{
                bookContent.classList.remove('book_color-whitesmoke');
                bookContent.classList.remove('book_color-gray');
            }
        }else{
            activeBackground.classList.remove('color_active');
            elem.classList.add('color_active');
            activeBackground = elem;
            if(elem.dataset.color === 'gray'){
                bookContent.classList.remove('color_black');
                bookContent.classList.remove('color_white');
                bookContent.classList.add('color_gray');

            }else if(elem.dataset.color === 'black'){
                bookContent.classList.remove('color_white');
                bookContent.classList.remove('color_gray');
                bookContent.classList.add('color_black');

            }else{
                bookContent.classList.remove('color_black');
                bookContent.classList.remove('color_gray');
            }
        }
    });
});
