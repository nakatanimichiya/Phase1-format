// ページを開いた時にCPが３桁の数字を決める
const cpNum = new Array(3);

const cpSubmit = () => {
  cpNum[0] = Math.floor(Math.random() * 10);
  do {
    cpNum[1] = Math.fCloor(Math.random() * 10);
  } while (cpNum[0] === cpNum[1]);
  do {
    cpNum[2] = Math.floor(Math.random() * 10);
  } while (cpNum[0] === cpNum[2] || cpNum[1] === cpNum[2]);
};

const cpNum = [];
const cpSubmit = () => {
  do {
    const includes = cpNum.includes(Math.floor(Math.random() * 15 + 1));
    if(!includes)
  } while ("異なる数が5つ生成されるまで");
};
cpSubmit();
console.log(cpNum);

// 答え合わせボタンを押す
const mySubmit = document.getElementById("numCheck");

let clickNum = 0;

mySubmit.addEventListener("click", () => {
  // ３桁の数字を取得
  const myNum = document.getElementById("answerNum").value;
  console.log(myNum);
  let num1 = myNum.split("").map(Number);
  console.log(num1);

  //入力した桁数が3桁であるか
  //   条件分岐
  if (num1.length !== 3) {
    alert("3桁の数字を入力してください。");
    return;
  }
  if (num1[0] === num1[1] || num1[0] === num1[2] || num1[1] === num1[2]) {
    alert("異なる3桁の数字を入力してください。");
    return;
  }

  clickNum += 1;
  if (clickNum === 2) {
    mySubmit.disabled = true;
  }

  let eat = 0;
  let bite = 0;

  for (let num1Index = 0; num1Index < num1.length; num1Index++) {
    for (let cpNumIndex = 0; cpNumIndex < cpNum.length; cpNumIndex++) {
      //数字が一緒のとき
      if (num1[num1Index] === cpNum[cpNumIndex]) {
        //桁数が一緒の時
        if (num1Index === cpNumIndex) {
          eat = eat + 1;
        } else {
          bite = bite + 1;
        }
      }
    }
  }
  alert(`${eat}EAT,${bite}BITE`);

  if (eat === 3) {
    alert("正解");
    location.reload();
  }
});
