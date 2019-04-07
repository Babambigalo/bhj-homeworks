const xhr = new XMLHttpRequest();
const title = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange',()=>{
    if(xhr.readyState === 4){
        const response = JSON.parse(xhr.responseText);
        title.textContent = response.data.title;
        for(let i=0;i<response.data.answers.length;i++){
            pollAnswers.innerHTML +=`
            <button class="poll__answer">
                ${response.data.answers[i]}
            </button>`;
        }
        const answers = Array.from(document.querySelectorAll('.poll__answer'));
        answers.forEach((button)=>{
            button.addEventListener('click',()=>{
                alert('Спасибо, ваш голос засчитан');
            });
        });
    }
})

