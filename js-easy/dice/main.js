// const body = document.querySelector("body")
// const diceBtn = document.getElementById("diceBtn");

// const dice = document.createElement("img");
// body.appendChild(dice);
// dice.style.width = "100px";
// dice.style.height = "100px";

// let diceNum = "./img/saikoro1.png"
// const random = function () {
//     dice.setAttribute("src", diceNum);
//     diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
// }

// var timer;

// diceBtn.addEventListener("click", function () {
//     clearInterval(timer);
//     timer = setInterval("random()", 100);
//     setTimeout(function () {
//         clearInterval(timer);
//     }, 3000);
// });

const body = document.querySelector("body");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const result = document.getElementById("result");

const dice1 = document.getElementById("setPlayer1dice");
dice1.style.width = "100px";
dice1.style.height = "100px";

const dice2 = document.getElementById("setPlayer2dice");
dice2.style.width = "100px";
dice2.style.height = "100px";

let diceNum1 = 1;
let diceNum2 = 1;
let player1Stop;
let player2Stop;

var timer1;
var timer2;

const random1 = function () {
  player1Btn.disabled = true;
  result.textContent = "???";
  player1Stop = true;
  dice1.setAttribute("src", "./img/saikoro1.png");
  diceNum1 = Math.floor(Math.random() * 6 + 1);
  dice1.setAttribute("src", `./img/saikoro${diceNum1}.png`);
};

player1Btn.addEventListener("click", function () {
  clearInterval(timer1);
  timer1 = setInterval("random1()", 100);
  setTimeout(function () {
    clearInterval(timer1);
    player1Stop = false;
    if (player1Stop === false && player2Stop === false) {
      if (diceNum1 > diceNum2) {
        result.textContent = "player1の勝ち";
      } else if (diceNum1 < diceNum2) {
        result.textContent = "player2の勝ち";
      } else {
        result.textContent = "引き分け";
      }
      player1Btn.disabled = false;
      player2Btn.disabled = false;
      player1Stop = null;
      player2Stop = null;
    }
  }, 3000);
});

const random2 = function () {
  player2Btn.disabled = true;
  result.textContent = "???";
  player2Stop = true;
  dice2.setAttribute("src", "./img/saikoro1.png");
  diceNum2 = Math.floor(Math.random() * 6 + 1);
  dice2.setAttribute("src", `./img/saikoro${diceNum2}.png`);
};

player2Btn.addEventListener("click", function () {
  clearInterval(timer2);
  timer2 = setInterval("random2()", 100);
  setTimeout(function () {
    clearInterval(timer2);
    player2Stop = false;
    if (player1Stop === false && player2Stop === false) {
      if (diceNum1 > diceNum2) {
        result.textContent = "player1の勝ち";
      } else if (diceNum1 < diceNum2) {
        result.textContent = "player2の勝ち";
      } else {
        result.textContent = "引き分け";
      }
      player1Btn.disabled = false;
      player2Btn.disabled = false;
      player1Stop = null;
      player2Stop = null;
    }
  }, 3000);
});
