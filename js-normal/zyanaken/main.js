let cpHand = document.getElementById("cpHand");
cpHand.textContent = "相手の手：";
let log = document.getElementById("log");
log.textContent = "結果：";
//  決定ボタンを押す
const startBtn = document.getElementById("gameStart");
startBtn.addEventListener("click", () => {
  //出す手を選択する
  // 自分の手を取得する（0~2）
  const myHand = document.getElementById("myHand").value;
  // CP用の手をランダム表示するために乱数を使用（0~2）
  let i;
  i = Math.floor(Math.random() * 3);
  // 条件分岐
  // 生成した数によって相手の手を画面に表示
  if (i === 0) {
    // 相手の手を取得
    cpHand.textContent = "相手の手：グー";
  } else if (i === 1) {
    cpHand.textContent = "相手の手：チョキ";
  } else if (i === 2) {
    cpHand.textContent = "相手の手：パー";
  }
  // 結果に表示
  switch (myHand) {
    case "0": {
      if (i === 0) {
        // 相手の手を取得
        log.textContent = "結果：あいこ";
      } else if (i === 1) {
        log.textContent = "結果：勝ち";
      } else if (i === 2) {
        log.textContent = "結果：負け";
      }
      break;
    }
    case "1": {
      if (i === 0) {
        // 相手の手を取得
        log.textContent = "結果：負け";
      } else if (i === 1) {
        log.textContent = "結果：あいこ";
      } else if (i === 2) {
        log.textContent = "結果：勝ち";
      }
      break;
    }
    case "2": {
      if (i === 0) {
        // 相手の手を取得
        log.textContent = "結果：勝ち";
      } else if (i === 1) {
        log.textContent = "結果：負け";
      } else if (i === 2) {
        log.textContent = "結果：あいこ";
      }
      break;
    }
  }
});

// 追加チャレンジ問題
let playerHand1;

let playerHand2;

const log2 = document.getElementById("log2");
let isClick = false;
const setHand1 = document.getElementById("setHand");
setHand1.addEventListener("click", () => {
  if (isClick === false) {
    playerHand1 = document.getElementById("playerHand").value;
    const player = document.getElementById("player");
    player.textContent = "player2";
    const player1Hand = document.getElementById("player1Hand");
    player1Hand.textContent = "player1セット完了";
    isClick = true;
  } else {
    playerHand2 = document.getElementById("playerHand").value;
    const player2Hand = document.getElementById("player2Hand");
    player2Hand.textContent = "player2セット完了";
    player.textContent = "両者セット完了";
    setHand1.disabled = true;
  }
});

const result = document.getElementById("gameStart2");
result.addEventListener("click", () => {
  console.log(playerHand1);
  console.log(playerHand2);
  switch (playerHand1) {
    case "0": {
      if (playerHand2 === "0") {
        log2.textContent = "あいこ";
      } else if (playerHand2 === "1") {
        log2.textContent = "勝ち";
      } else if (playerHand2 === "2") {
        log2.textContent = "負け";
      }
      break;
    }
    case "1": {
      if (playerHand2 === "0") {
        log2.textContent = "負け";
      } else if (playerHand2 === "1") {
        log2.textContent = "あいこ";
      } else if (playerHand2 === "2") {
        log2.textContent = "勝ち";
      }
      break;
    }
    case "2": {
      if (playerHand2 === "0") {
        log2.textContent = "勝ち";
      } else if (playerHand2 === "1") {
        log2.textContent = "負け";
      } else if (playerHand2 === "2") {
        log2.textContent = "あいこ";
      }
      break;
    }
  }
  result.disabled = true;
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  location.reload();
});
