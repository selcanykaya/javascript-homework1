const isim = document.querySelector("#name");
const time = document.querySelector("#clock")
let days = ["PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR"];


userName = prompt("Lütfen Adınızı Giriniz:");
isim.innerHTML = `${userName}`

function displayTime(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay() - 1;
    time.innerHTML = hour + ":" + min + ":" + sec  + " " + days[day];
}
setInterval(displayTime, 1000);