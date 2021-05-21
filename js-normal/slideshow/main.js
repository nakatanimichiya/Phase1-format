// 連想配列に画像とボタンの中身の文字をセット
// const winter = { img: "./img/slide3.png", text: "春へ" };
// const spring = { img: "./img/slide0.png", text: "夏へ" };
// const summer = { img: "./img/slide1.png", text: "秋へ" };
// const autumn = { img: "./img/slide2.png", text: "冬へ" };

const season = [
    { img: "./img/slide0.png", text: "春へ" },  //配列の数値=index番号
    { img: "./img/slide1.png", text: "夏へ" },
    { img: "./img/slide2.png", text: "秋へ" },
    { img: "./img/slide3.png", text: "冬へ" },
];

let index = 0;
let seasonNum = season[index];


const pushBtn = document.getElementById("pushBtn");

let viewImg = document.getElementById("viewImg");

//ページを開いた時の最初の表示
pushBtn.textContent = season[0].text;

// ページを開いた時の最初の画像を表示
viewImg.setAttribute("src", "./img/slide0.png");

//ボタンを押す
pushBtn.addEventListener("click", () => {

    // 3だったら0にして、季節を冬に戻す
    if (index === 3) {
        index = 0;

        // それ以外だったら1を足して季節を進める
    } else {
        index += 1;
    }
    seasonNum = season[index];

    // 取得したindex番号のテキストを表示
    pushBtn.textContent = seasonNum.text;

    // 取得したindex番号の画像を表示する
    viewImg.setAttribute("src", seasonNum.img);

});



const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", () => {

    // indexに再代入し、value=配列の数値を取得する
    index = document.getElementById("seasonNum").value;

    // 文字列を数値に変化させる
    index = parseInt(index);

    // valueから取得した数字をseason[index]のindex番号に置き換える
    viewImg.setAttribute("src", season[index].img);
    pushBtn.textContent = season[index].text;
});



