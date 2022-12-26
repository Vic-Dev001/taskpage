"use strict";

//Select Elements
const startBtn = document.querySelector("#task-btn");
const adsImageContainer = document.querySelector("#ads-img-container");
const taskCounter = document.querySelectorAll("#task-counter");
const spinner = document.querySelector("#spinner");
const continueBtn = document.querySelector("#continue-task-btn");
const alertCompleted = document.querySelector("#alert-completed");
const adsImgs = document.querySelector("#ads-imgs");
const overlay = document.querySelector(".overlay");
const countDownText = document.querySelector(".count-down-timer-text");
const countDownCont = document.querySelector(".count-down-timer-cont");

// conditions for performing tasks
let count, canPerformTask, totalTasks;

function startTimer(duration) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    localStorage.setItem("hours", hours);
    localStorage.setItem("seconds", seconds);
    localStorage.setItem("minutes", minutes);
    countDownText.innerHTML = hours + ":" + minutes + ":" + seconds;

    if (--timer <= 0) {
      timer = duration;
      clearInterval(timer);
      canPerformTask = true;
      localStorage.removeItem("timer");
    }
  }, 1000);
}

let hours = 24; // Set the number of hours for the countdown timer
let minutes = 0; // Set the number of minutes for the countdown timer (0 by default)
let seconds = 0; // Set the number of seconds for the countdown timer (0 by default)

// Calculate the total number of seconds for the countdown timer
const duration = hours * 3600 + minutes * 60 + seconds;

// initialize task
const initialize = function () {
  count = 0;
  canPerformTask = true;
  totalTasks = 9;
};
// initializing conditions to perform tasks
initialize();

const updatecountDown = function () {
  if (localStorage.getItem("timer")) {
    localStorage.getItem("timer");

    canPerformTask = false;
    startTimer(duration);
    taskCounter.forEach((el) => (el.innerHTML = "Today's task completed"));
    startBtn.classList.add("hidden");
    // update account function
    const acctBal = 5000;
    const percentage = (acctBal * 0.1) / 2;
    const newBal = acctBal + percentage;
    localStorage.setItem("balance", +newBal);
  }
};
updatecountDown();
const performTask = function (e) {
  console.log(e);
  if (canPerformTask && count <= totalTasks) {
    // display spinners
    const displaySpinnner = async () => {
      spinner.classList.remove("hidden");
      overlay.classList.remove("hidden");

      setTimeout(function () {
        spinner.classList.add("hidden");
        overlay.classList.add("hidden");
      }, 3000);
      count++;
    };

    // displayAdsImgs
    const displayAdsImgs = async () => {
      await displaySpinnner();

      //set number of images to show
      const imgNumber = Math.trunc(Math.random() * 61 + 1);
      adsImgs.src = `./assets/imgs/electronics-ads-img/eletronic-ad-banner-${imgNumber}.png`;

      setTimeout(function () {
        adsImageContainer.classList.remove("hidden");
      }, 3000);
      adsImageContainer.classList.add("hidden");
    };
    const updateCounter = async () => {
      await displayAdsImgs();
      setInterval(function () {
        taskCounter.forEach(
          (el) => (el.textContent = `${count} / 10 tasks done`)
        );
      }, 4000);
    };
    updateCounter();
  } else {
    alertCompleted.classList.remove("hidden");
    // show alert
    setTimeout(function () {
      alertCompleted.classList.add("hidden");
    }, 4000);
    adsImageContainer.classList.add("hidden");

    canPerformTask = false;
    // localStorage.setItem("perform-task", canPerformTask === false);
    localStorage.setItem("timer", startTimer(duration));
  }
};

startBtn.addEventListener("click", performTask);
