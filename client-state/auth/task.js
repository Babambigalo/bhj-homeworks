const signInForm = document.getElementById('signin__form');
const signContainer = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const welcomeSpan = document.getElementById('user_id');

console.log(localStorage.getItem('user_idг'));

if(localStorage.getItem('user_id') !== null){
    signContainer.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcomeSpan.textContent = localStorage.getItem('user_id');
}

signInForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(signInForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState === 4){
            if(JSON.parse(xhr.responseText).success === true){
                signContainer.classList.remove('signin_active');
                const response = JSON.parse(xhr.responseText);
                localStorage.setItem('user_id',response.user_id);
                welcome.classList.add('welcome_active');
                welcomeSpan.textContent = response.user_id;
            }else{
                alert('Неверный логин/пароль');
            }

        }
    })
})
