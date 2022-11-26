const startingSeconds = 1;
let time = startingSeconds * 60;

const countdownEL = document.getElementById('countdown');

setInterval(updatetimer,1000)

function updatetimer()
{
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEL.innerHTML = '${minutes}: ${seconds} ';
    time--;
}