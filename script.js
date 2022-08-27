let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
function time(){
    let date = new Date()
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    second.textContent = date.getSeconds();
    if(date.getSeconds()<10){
        second.textContent = '0'+ date.getSeconds();
    }
    if(date.getMinutes()<10){
        minute.textContent ='0'+ date.getMinutes();
    }
     if(date.getHours()<10){
        hour.textContent ='0'+ date.getHours();
    }
}
time();
setInterval(time,1000)

