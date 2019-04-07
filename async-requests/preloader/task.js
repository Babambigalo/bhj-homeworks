const xhr = new XMLHttpRequest();
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange',()=>{
    const items = document.getElementById('items');
    const loader = document.getElementById('loader');
    if(xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        const request = JSON.parse(xhr.responseText);
        for(valute in request.response.Valute){
            let charCode = '';
            let valueOfValute ='';
            for(key in request.response.Valute[valute]){
                if(key === 'CharCode') charCode = request.response.Valute[valute][key];
                if(key ==='Value') valueOfValute = request.response.Valute[valute][key];
            }
            items.innerHTML+=
            `<div class="item">
                <div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${valueOfValute}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`;
        }
    }
});