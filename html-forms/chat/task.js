function chatHandler() {
    const chatWidget = document.querySelector('.chat-widget');
    const input = document.getElementById('chat-widget__input');
    const messages = document.querySelector( '.chat-widget__messages' );
    const chat_area = document.querySelector('.chat-widget__area');
    const respons = ['Чё надо?!','цыгль цыгль ай лю лю','фак ю бич пососи кирпич', 'чё пацаны анимэ?!','Гамарджобат','салам','Добрый день', 'пнх', 'пасть порву, моргалы выколю', 'пшёл вон отсюда щегол','eeee боооооой'];
    console.log(chatWidget);
    chatWidget.addEventListener('click',()=>{
        chatWidget.classList.add('chat-widget_active');
    });

    input.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter' && input.value.length != 0){
            let text = input.value;
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            if (hours < 10) hours = '0' + hours;
            if (minutes<10) minutes = '0' + minutes;
            let time = hours + ':' + minutes;
            messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">${text}</div>
            </div>`;

            input.value = '';
            messages.innerHTML += `
            <div class="message">
                <div class="message__time">${time}</div>
                <div class="message__text">${respons[Math.round(Math.random()*10)]}</div>
            </div>`;

            let lastChild = messages.lastElementChild;
            chat_area.scrollTop = chat_area.scrollHeight;
            console.log(Math.round(Math.random()*10));
        }
        
    });

}

chatHandler();