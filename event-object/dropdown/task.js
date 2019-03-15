'use sctrict'
function dropDownMenu(){
    const dropDownValue = Array.from(document.getElementsByClassName('dropdown__value'));
    const dropDownList = Array.from(document.getElementsByClassName('dropdown__list'));
    dropDownValue.forEach(function(element,i){
        document.addEventListener('click',function(e){
            e.preventDefault();
            if(e.target.classList.contains('dropdown__value')){
                dropDownList[i].classList.add('dropdown__list_active');
            }else{
                if(e.target.classList.contains('dropdown__link')){
                    const text = e.target.text;
                    dropDownValue[i].textContent = text;
                    dropDownList[i].classList.remove('dropdown__list_active');
                }
            }
            
        })        
    });
}

dropDownMenu();