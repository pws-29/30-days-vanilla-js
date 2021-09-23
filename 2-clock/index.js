
const secondHand = document.querySelector('.second-hand')
const minutsHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')


function setDate() {
  const now = new Date(); //get data
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90; // transform in %, and them in degress, to have our rotation (initial position is 90)
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  minutsHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

  if (document.body) {
    if (hours >= 7 && hours <= 9) {
      document.body.className = 'morning';
    } else if (hours > 9 && hours < 12) {
      document.body.className = "day";
    } else if (hours >= 12 && hours < 17) {
      document.body.className = "afternoon";
    } else if (hours >= 17 && hours < 20) {
      document.body.className = "sunset";
    } else {
      document.body.className = "night";
    }
  }
}



setInterval(setDate, 1000);