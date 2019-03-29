const items = Array.from(document.querySelectorAll('.product'));
items.forEach((element)=>{
    const cartProducts = document.querySelector('.cart__products');
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
        const cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product'));
        if (cartProduct.length === items.length){
            cartProduct.some((product)=>{
                if(product.dataset.id === productId){
                    product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + quantity;
                }
            })
        }else if(cartProduct.length === 0){
            cartProducts.innerHTML+=
                `<div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${quantity}</div>
                </div>`;
        }else{
            cartProduct.forEach((product)=>{
                if(product.dataset.id === productId){
                    product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + quantity;
                    flag = true;
                } 
            })
            if(flag === false){
                cartProducts.innerHTML+=
                `<div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${quantity}</div>
                </div>`;
            }
        }
    })
});