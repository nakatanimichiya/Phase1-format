// // (未来 - 現在)で1秒ごとに更新
// const bornTime = moment("2021-05-15 14:33:00"); //.format("MMMM Do YYYY, h:mm:ss a");
// console.log(bornTime);

// //diffは数値に使えるメソッド

// let nowTime;
// let day;
// let hour;
// let minute;
// let second;

// const countDown = () => {
//   //現在の年時分秒を取得する
//   nowTime = moment(); //.format("MMMM Do YYYY, h:mm:ss a");　　 formatは文字列に変化させる
//   day = bornTime.diff(nowTime, "days");
//   hour = bornTime.diff(nowTime, "hours") % 24;
//   minute = bornTime.diff(nowTime, "minutes") % 60;
//   second = bornTime.diff(nowTime, "seconds") % 60;
//   text.textContent = `ドラえもん誕生まで後${day}日${hour}時間${minute}分${second}秒`;
//   if (day === 0 && hour === 0 && minute === 0 && second === 0) {
//     text.textContent = "ドラえもん誕生";
//     alert("ドラえもん誕生！！");
//   }
//   console.log(bornTime.diff(nowTime));
// };

// let timer;
// timer = setInterval(countDown, 1000);

const body = document.querySelector("body");
let text = document.createElement("p");
body.appendChild(text);

// 任意の日付を取得
let searchTime = moment(document.getElementById("dateSet").value);
let day;
let hour;
let minute;
let second;

const countDown = () => {
  // 現在の時間を取得　→　関数の中
  const nowTime = moment();
  // 任意の時間の表示を綺麗にする
  day = moment(document.getElementById("dateSet").value).diff(nowTime, "days");
  hour = moment(document.getElementById("dateSet").value).diff(nowTime, "hours") % 24;
  minute = moment(document.getElementById("dateSet").value).diff(nowTime, "minutes") % 60;
  second = moment(document.getElementById("dateSet").value).diff(nowTime, "seconds") % 60;

  // 残りの日時間分秒を表示
  text.textContent = `${document.getElementById("dateSet").value}まで後${day}日${hour}時間${minute}分${second}秒`;
  // 条件分岐
  if (day === 0 && hour === 0 && minute === 0 && second === 0) {
    // 日時間分秒が全て0になったとき、アラート
    alert("予定の時間になりました");
  }
};

// 検索ボタンを押す
const searchBtn = document.getElementById("dateSearch");
let timer;
searchBtn.addEventListener("click", () => {
  // 1秒ごとに関数の中を更新
  timer = setInterval(countDown, 1000);
});
