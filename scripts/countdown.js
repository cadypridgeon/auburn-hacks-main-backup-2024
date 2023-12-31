const timer = [
    {
        classname: 'months',
        label: 'Months',
    },
    {
        classname: 'days',
        label: 'Days',
    },
    {
        classname: 'hours',
        label: 'Hours',
    },
    {
        classname: 'minutes',
        label: 'Minutes',
    },
    {
        classname: 'seconds',
        label: 'Seconds',
    }
];

const countdownCounter = document.querySelector('.count-down-counter');
// const countdownCounter = document.getElementsByClassName('count-down-counter');
let countToDate = new Date().setHours(new Date().getHours() + 2400);
let previous;
// let countDownDate = new Date("Feb 3, 2024 00:00:00").getTime();
// let present = new Date().getTime();

function showTimer() {
    timer.forEach(element => {
        const div = document.createElement('div');
        div.classList.add(element.classname);
        div.innerHTML = `
            <div class="flip-card">
                <div class="top">00</div>
                <div class="bottom">00</div>
            </div>
            <p class="title">${element.label}</p>
        `;
        countdownCounter.appendChild(div);
    });
}

showTimer();

// function showCountDown() {
//     timer.forEach(element => {
//         const div = document.createElement('div');
//         div.classList.add(element.classname);
//         div.innerHTML = `
//             <div class="flip-card>
//                 <div class="top">00</div>
//                 <div class="bottom">00</div>
//             </div>
//             <p class="title">${element.label}</p>
//         `;
//         countdownCounter.appendChild(div);
//     })
// }

// showCountDown();