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

// conditions for performing tasks
let count, canPerformTask, totalTasks, maxTask;

const countDownTimer = function () {
  const intervalId = setInterval(() => {
    const date = new Date();

    let hour = 24;
    let min = 60 - date.getMinutes();
    let secs = 60 - date.getSeconds();
    if ((min + "").length == 1 && (secs + "").length == 1) {
      min = "0" + min;
      secs = "0" + secs;
    }
    countDownText.innerHTML = hour + ":" + min + ":" + secs;
  }, 1000);
};
// initialize task
const initialize = function () {
  count = 0;
  canPerformTask = true;
  totalTasks = 9;
  maxTask = 4;
};
// initializing conditions to perfor tasks
initialize();

const performTask = function () {
  if (canPerformTask === true && count <= totalTasks) {
    count++;

    // display spinners
    const displaySpinnner = async () => {
      spinner.classList.remove("hidden");
      overlay.classList.remove("hidden");

      setTimeout(function () {
        spinner.classList.add("hidden");
        overlay.classList.add("hidden");
      }, 3000);
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
    countDownTimer();
  }
  console.log(count);
  // //Task is completed
  // if (count === totalTasks && count === !maxTask) {
  //   alertCompleted.classList.remove("hidden");
  //   // show alert
  //   setTimeout(function () {
  //     alertCompleted.classList.add("hidden");
  //   }, 4000);
  //   count = taskCounter.forEach((el) => (el.textContent = "Task completed"));
  //   taskCounter.forEach((el) => (el.textContent = "Task completed"));
  // }
};

startBtn.addEventListener("click", performTask);
