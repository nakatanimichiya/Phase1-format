// 数字の保管場所
let slot1 = document.getElementById("nowTime1");
let slot2 = document.getElementById("nowTime2");
let slot3 = document.getElementById("nowTime3");
let slot4 = document.getElementById("nowTime4");
let slot5 = document.getElementById("nowTime5");
let slot6 = document.getElementById("nowTime6");
let slot7 = document.getElementById("nowTime7");
let slot8 = document.getElementById("nowTime8");
let slot9 = document.getElementById("nowTime9");

// ストップボタン
const set1 = document.getElementById("setTime1");
const set2 = document.getElementById("setTime2");
const set3 = document.getElementById("setTime3");

// trueの時は実行、falseの時は停止
let stop1;
let stop2;
let stop3;

// スタートボタン後の時間間隔　　→　　0.1秒ごと
let timer1;
let timer2;
let timer3;

// 各スロットに0~9の数字を表示
let a1 = 9;
let a2 = 0;
let a3 = 1;

let b1 = 0;
let b2 = 1;
let b3 = 2;

let c1 = 1;
let c2 = 2;
let c3 = 3;

slot4.textContent = a1;
slot1.textContent = a2;
slot7.textContent = a3;
let num1 = () => {
  stop1 = true;
  slot4.textContent = a1;
  slot1.textContent = a2;
  slot7.textContent = a3;
  //   *1ずつ増やすには？
  a1++;
  a2++;
  a3++;

  if (a1 === 10) {
    a1 = 0;
  }

  if (a2 === 10) {
    a2 = 0;
  }

  if (a3 === 10) {
    a3 = 0;
  }
};

slot5.textContent = b1;
slot2.textContent = b2;
slot8.textContent = b3;
let num2 = () => {
  stop2 = true;
  slot5.textContent = b1;
  slot2.textContent = b2;
  slot8.textContent = b3;
  //   *1ずつ増やすには？
  b1++;
  b2++;
  b3++;

  if (b1 === 10) {
    b1 = 0;
  }

  if (b2 === 10) {
    b2 = 0;
  }

  if (b3 === 10) {
    b3 = 0;
  }
};

slot6.textContent = c1;
slot3.textContent = c2;
slot9.textContent = c3;
let num3 = () => {
  stop3 = true;
  slot6.textContent = c1;
  slot3.textContent = c2;
  slot9.textContent = c3;
  //   *1ずつ増やすには？
  c1++;
  c2++;
  c3++;

  if (c1 === 10) {
    c1 = 0;
  }

  if (c2 === 10) {
    c2 = 0;
  }

  if (c3 === 10) {
    c3 = 0;
  }
};

set1.disabled = true;
set2.disabled = true;
set3.disabled = true;

// スタートボタンでスロット開始
const startBtn = document.getElementById("startTimer");
startBtn.addEventListener("click", () => {
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);

  timer1 = setInterval(num1, 100);
  timer2 = setInterval(num2, 100);
  timer3 = setInterval(num3, 100);

  set1.disabled = false;
  set2.disabled = false;
  set3.disabled = false;
});

// 各スロットのストップボタンを押す
set1.addEventListener("click", () => {
  clearInterval(timer1);
  set1.disabled = true;

  // 止まる
  stop1 = false;

  //   条件分岐?
  if (stop1 === false && stop2 === false && stop3 === false) {
    if (a2 === b2 && b2 === c2) {
      //   そろえば「成功」のアラート
      alert("成功！");
    } else {
      //   ダメなら「再挑戦」のアラート
      alert("再挑戦");
    }
  }
});

set2.addEventListener("click", () => {
  clearInterval(timer2);

  set2.disabled = true;

  // 止まる
  stop2 = false;

  // 条件分岐
  if (stop1 === false && stop2 === false && stop3 === false) {
    if (a2 === b2 && b2 === c2) {
      // そろえば「成功」のアラート
      alert("成功！");
    } else {
      // ダメなら「再挑戦」のアラート
      alert("再挑戦");
    }
  }
});

set3.addEventListener("click", () => {
  clearInterval(timer3);

  set3.disabled = true;

  // 止まる
  stop3 = false;

  // 条件分岐
  if (stop1 === false && stop2 === false && stop3 === false) {
    if (a3 === b3 && b3 === c3) {
      // そろえば「成功」のアラート
      alert("成功！");
    } else {
      // ダメなら「再挑戦」のアラート
      alert("再挑戦");
    }
  }
});
