const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const nowTime = document.getElementById("nowTime");

console.log(inputTime, setTime, startTimer, stopTimer, nowTime);


// テキストボックスに数字を記入　=>　type = "number"で秒数指定可能

// 数字をセットする　

// 変更ボタンを押す
let sec = 10;
let leftHour;
let leftMin;
let leftSec;
const time = () => {
    //時分秒に変更
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
}

setTime.addEventListener("click", () => {
    sec = document.getElementById("inputTime").value;

    //時分秒に変更
    time();

    // 「？秒：セット完了」ですを表示
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒:セット完了です`;
    console.log(sec);
});

// スタートボタン押す
// 再度スタートボタンを押す

var timer;

startTimer.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval("countDown()", 1000);


});

// 「？秒と表示」
const countDown = () => {

    // 1秒ごとに1ずつ減少
    sec -= 1;

    //時分秒に変更
    time();

    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
    if (sec === 0) {
        clearInterval(timer);
        alert("終了");
    }
};

// ストップボタンを押す
stopTimer.addEventListener("click", function () {

    // 1秒ごとの処理を止める
    clearInterval(timer);

    //時分秒に変更
    time();

    // 「？秒：ストップしました」と表示
    nowTime.textContent = `残り${leftHour} 時間${leftMin} 分${leftSec} 秒:ストップしました`
});



