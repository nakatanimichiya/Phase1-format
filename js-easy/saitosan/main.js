// 押してねを押す　反復構造
// 0から9までの数字を1つつくる　反復構造
// 0から5未満の数字が出たら「ぺっぺぺー」とアラートする　分岐構造
// 5から10未満の数字が出たら「斎藤さんだぞ」とアラートする　分岐構造

// 実行→ボタンを押す→0から9までの数字を表示→0から5未満の数字が出たら「ぺっぺぺー」
// →5から10未満の数字が出たら「斎藤さんだぞ」→ループ



// const setBtn = function () {
//     const num = Math.random() * 10;

//     if (num < 5) {
//         alert("ok");
//     } else if (5 <= num) {
//         alert("no");
//     }

// };
// console.log(num)


// //三項演算子
// const setBtn = function () {
//     const num = Math.random() * 10;
//     num < 5 ? alert("pepe") : alert("dazo");
// };

const word1 = "bubu";
const word2 = "pinpin";

const setBtn = function () {
    const num = Math.random() * 10;
    if (num < 5) {
        const result = window.confirm(word1);
        if (result) { //result=ok
            alert(word1);
        } else {
            alert(word2);
        }

    } else if (5 <= num) {
        const result = window.confirm(word2);
        if (result) {
            alert(word2);
        } else {
            alert(word1);
        }
    }
};
