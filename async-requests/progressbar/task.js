const form = document.getElementById('form');
const pb = document.getElementById('progress');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.addEventListener('progress',(event)=>{
        let percentComplete = (event.loaded/event.total);
        pb.value = percentComplete;
        console.log('Загружено на сервер ' + event.loaded + ' байт из ' + event.total)
    })
    xhr.send(formData);
})
