// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
  const p1 = document.querySelector("#first");
  p1.append("Hi");
}, 1000);
// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
  const p2 = document.querySelector("#timeout-nesting");
  p2.append("One");
  setTimeout(() => {
    const p2 = document.querySelector("#timeout-nesting");
    p2.append("Two");
  }, 1000);
}, 2000);
// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let intervalId;

let num = 1;
intervalId = setInterval(() => {
  console.log(num);
  num++;
}, 1000);

function stopCounter() {
  clearInterval(intervalId);
}

document.querySelector("button").addEventListener("click", stopCounter);
// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).

// BONUS…
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
min = 2;
sec = 00;
const countdownDiv = document.getElementById('countdown');

const clock = setInterval(() => {
    
    countdownDiv.innerText = `${min}:${sec}`
    if(min != 0){
        if(sec != 0){
            sec--;
        }else{
            min--;
            sec = 59;
        }
    }else{
        console.log("times up");
        clearInterval(clock);
    }
},1000)
// When finished, create a repository in the "TimingEventsExercise" Folder as well as on GitHub. Add and commit everything in the TimingEventsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom.
