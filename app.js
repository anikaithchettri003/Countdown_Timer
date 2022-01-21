const countdown = () => {
    
    const countDate=new Date("Jan 22, 2022 00:00:00").getTime();
const now = new Date().getTime();
const gap = countDate-now;

const sec=1000;
const min=sec*60;
const hour=min*60;
const day=hour*24;

const cday=Math.floor(gap/day);

const chour=Math.floor((gap%day)/hour);

const cmin=Math.floor((gap%hour)/min);

const csec=Math.floor((gap%min)/sec);

document.querySelector('.day').innerText=cday;
document.querySelector('.hour').innerText=chour;
document.querySelector('.min').innerText=cmin;
document.querySelector('.sec').innerText=csec;

};

setInterval(countdown,1000);