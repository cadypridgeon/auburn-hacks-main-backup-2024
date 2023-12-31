function countDown(){
    // Variable Declarations
    const countDownDisplay = document.getElementsByClassName("count-down-counter");
    // goes through the array with the class name count-down-counter and creates the create down for each element in the array

    let countDownDate = new Date("Feb 3, 2024 00:00:00").getTime();
    let present = new Date().getTime();
    let distance = countDownDate - present;
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((distance % (1000*60*60*24*30)) / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / 1000);

    // Displaying the Countdown
    for (let i = 0; i < countDownDisplay.length; i++) {
        countDownDisplay[i].innerHTML = `<p>${months}m ${days}d ${hours}h ${minutes}m ${seconds}s</p>`;
    }

    // Changing text for countdown ending/event starting
    if (distance < 0) {
        clearInterval(countDown);
        countDown.innerHTML = "HERE WE GO!";
    }
}

// Initializes the countdown and then runs the script once every second.
countDown();
let x = setInterval(countDown, 1000);
