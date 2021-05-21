//スタートボタンを押す

// const startTimer = document.getElementById("startTimer");
// const now_time = document.getElementById("now_time");

// //タイマースタート
// let i = 0
// var timer;
// const countUp = () => {
//     i += 1;
//     now_time.textContent = i
//     console.log(i);
// }

// startTimer.addEventListener("click", function () {
//     clearInterval(timer);
//     timer = setInterval('countUp()', 1000);  //文字列に注意
//     setTimeout(function () {
//         clearInterval(timer);
//     }, 40000);
// });
// // 確認ボタンを押す

// const confirmTime = document.getElementById("confirmTime");

// //タイマーストップ

// confirmTime.addEventListener("click", function () {


//     //20秒前ストップでアラーム

//     if (i < 20) {
//         alert(`まだ${i}秒`);

//         //20秒ジャストでアラーム

//     } else if (i === 20) {
//         alert("ジャスト！");
//         location.reload();

//         //20秒以降ストップでアラーム

//     } else if (i > 20 && i < 40) {
//         alert(`もう${i}秒`);
//         location.reload();

//         //40秒経ったら強制終了＆アラーム

//     } else {
//         alert("強制終了！");
//         location.reload();
//     }
// });

////////////////////////////////////////////////////

const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");

let startTime;

//スタートを押す
startTimer2.addEventListener("click", function () {
    clearInterval(startTimer);
    startTime = new Date();
    t = setInterval("countUp()", 1000);
});


let nowTime;

// 確認ボタンを押す
confirmTime2.addEventListener("click", () => {
    // 現在時刻を取得する
    nowTime = new Date();
    // その間の差を計算する
    let diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
    //アラームで表示する

    if (diffTime === 20) {
        alert("ジャスト");
        location.reload;
    } else if (diffTime < 20) {
        alert(`まだ${diffTime}`)
        location.reload;
    } else if (diffTime > 20) {
        alert(`まだ${diffTime}`);
        location.reload;
    } else {
        alert("強制終了");
        location.reload;
    }
});

let i = 0
var t;
const countUp = () => {
    i += 1;
    now_time.textContent = i
    console.log(i);
}