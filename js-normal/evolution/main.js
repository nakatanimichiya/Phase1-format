
// 1枚目の写真はページを開いた時から表示
// showImg.setAttribute("src", "./img/evolution1.png");

// 進化するボタンを押す
const setBtn = document.getElementById("setBtn");
let i = 0;

const items = document.getElementById("items");

const item1 = document.createElement("div");
const img1 = document.createElement("img");
const text1 = document.createElement("p");
const addItem1 = () => {
    img1.setAttribute("src", "./img/evolution1.png");
    item1.appendChild(img1);
    text1.textContent = "原人";
    item1.appendChild(text1);
};



const item2 = document.createElement("div");
const img2 = document.createElement("img");
const text2 = document.createElement("p");
const addItem2 = () => {
    img2.setAttribute("src", "./img/evolution2.png");
    item2.appendChild(img2);
    text2.textContent = "旧人";
    item2.appendChild(text2);

};


const item3 = document.createElement("div");
const img3 = document.createElement("img");
const text3 = document.createElement("p");
const addItem3 = () => {
    img3.setAttribute("src", "./img/evolution3.png");
    item3.appendChild(img3);
    text3.textContent = "新人";
    item3.appendChild(text3);
};


const item4 = document.createElement("div");
const img4 = document.createElement("img");
const text4 = document.createElement("p");
const addItem4 = () => {
    img4.setAttribute("src", "./img/evolution4.png");
    item4.appendChild(img4);
    text4.textContent = "現代人";
    item4.appendChild(text4);
};


setBtn.addEventListener("click", () => {

    // 写真を入れる親要素の中身を削除
    // .innerHTML = ""で新しい内容に置き換える
    items.innerHTML = "";
    console.log(items.innerHTML);

    // 0~9のランダムな数字を取得
    i = Math.floor(Math.random() * 10);
    console.log(i)


    // 条件分岐
    // 0~3は1枚の写真に対応
    if (i < 4) {
        items.appendChild(item1);
        addItem1();

        // 4~6は2枚の写真に対応
    } else if (i < 7) {
        items.appendChild(item1);
        addItem1();

        items.appendChild(item2);
        addItem2();

        // 7~8は3枚の写真に対応
    } else if (i < 9) {
        items.appendChild(item1);
        addItem1();

        items.appendChild(item2);
        addItem2();

        items.appendChild(item3);
        addItem3();


        // 9は4枚の写真に対応
    } else {
        items.appendChild(item1);
        addItem1();

        items.appendChild(item2);
        addItem2();

        items.appendChild(item3);
        addItem3();

        items.appendChild(item4);
        addItem4();
    }
});

// リセットボタンを押す
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    // location.reload()
    location.reload();

    // すべての写真を削除
});




