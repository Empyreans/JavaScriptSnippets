/**
 * Created by Empyreans on 14.11.2017.
 */

/* To-Do: fix the jump when deg goes from 360 to 0 */

hands = document.getElementsByClassName("hand");

function setDate() {

    const now = new Date();

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hands[0].style.transform = `rotate(${hoursDegrees}deg)`;

    const mins = now.getMinutes();
    const minutesDegrees = (mins / 60) * 360 + 90;
    hands[1].style.transform = `rotate(${minutesDegrees}deg)`;

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    hands[2].style.transform = `rotate(${secondsDegrees}deg)`;

}

setInterval(setDate, 1000);