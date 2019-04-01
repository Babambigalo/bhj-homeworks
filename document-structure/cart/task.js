const items = Array.from(document.querySelectorAll('.product'));

function pastHTML(id,img,quantity){
    const cartProducts = document.querySelector('.cart__products');
    cartProducts.innerHTML+=
        `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${quantity}</div>
        </div>`;
}

items.forEach((element)=>{
    let quantity = 1;
    const quantityValue = element.querySelector('.product__quantity-value');
    const buttons = element.querySelectorAll('.product__quantity-control');
    const addToBucket = element.querySelector('.product__add');
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(button.classList.contains('product__quantity-control_dec') && quantity !==1){
                quantity--;
                quantityValue.textContent = quantity;                
            }else if(button.classList.contains('product__quantity-control_inc')){
                quantity++;
                quantityValue.textContent = quantity;
            }
        })
    })

    addToBucket.addEventListener('click',()=>{
        let flag = false;
        const productId = element.dataset.id;
        const productImage = element.querySelector('img').getAttribute('src');
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        if (cartProduct.length === items.length){
            cartProduct.some((product)=>{
                if(product.dataset.id === productId){
                    product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + quantity;
                }
            })
        }else if(cartProduct.length === 0){
            pastHTML(productId,productImage,quantity);
        }else{
            cartProduct.some((product)=>{
                if(product.dataset.id === productId){
                    product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + quantity;
                    flag = true;
                } 
            })
            if(flag === false){
                pastHTML(productId,productImage,quantity);
            }
        }
    })
});