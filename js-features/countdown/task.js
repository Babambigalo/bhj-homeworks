function timer(h,m,s){
    const milliSec = (h * 360000) + (m * 60000) + (s * 1000);
    const duration = new Date().getTime() + milliSec;
    const span = document.getElementById('timer');
    const timerInterval = setInterval(()=>{                
        let date = new Date().getTime();
        let difference = (duration - date);
        let hour = Math.floor(difference / 3600000) < 10 ? '0' + Math.floor(difference / 3600000) : Math.floor(difference / 3600000);
        let minutes = Math.floor(difference/60000) < 10 ? '0' + Math.floor(difference/60000) : Math.floor(difference/60000);
        let seconds = Math.floor(difference/1000)%60 < 10 ? '0' + Math.floor(difference/1000)%60 : Math.floor(difference/1000)%60;  
        span.textContent = hour + ':' + minutes + ':' + seconds;
        if(hour == 00 && minutes == 00 && seconds ==00) {
            alert('Вы победили в конкурсе!')
            clearInterval(timerInterval);
        }
    },1000)    
}
timer(00,01,00);
