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

const dice1 = document.getElementById("setPlayer1dice");
dice1.style.width = "100px";
dice1.style.height = "100px";

const dice2 = document.getElementById("setPlayer2dice");
dice2.style.width = "100px";
dice2.style.height = "100px";


let diceNum = "./img/saikoro1.png"
const random1 = function () {
    dice1.setAttribute("src", diceNum)
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
}

const random2 = function () {
    dice2.setAttribute("src", diceNum)
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
}

var timer;

player1Btn.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval("random1()", 100);
    setTimeout(function () {
        clearInterval(timer);
    }, 3000);
    console.log(player1Btn)
});

player2Btn.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval("random2()", 100);
    setTimeout(function () {
        clearInterval(timer);
    }, 3000);
});


const result = document.getElementById("result");
result = function () {

    if () {
        result.innerHTML("プレイヤー1の勝ち");
    } else if () {
        result.innerHTML("プレイヤー2の勝ち");
    } else {
        result.innerHTML("引き分け");
    }
};





