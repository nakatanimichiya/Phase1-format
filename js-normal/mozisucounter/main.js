//文字を入力する　→　textareaで設定済み

const sampleForm = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");

// 入力するたびに残り文字数を計算する　→　keyUpのイベントが実行される
let maxCount = 10;
sampleForm.addEventListener("keyup", function () {
    const wordCount = sampleForm.value.length;
    // 文字数を取得する
    // 文字を取得する
    console.log(sampleForm.value.length);

    //文字を入力することで「あと○○文字」の字数を減少
    textCounter.textContent = `${maxCount - wordCount}`;

    if (wordCount === 11) {
        alert("400字以内です")
        textCounter.style.color = "red";
    } else if (wordCount <= 10) {
        textCounter.style.color = "black"
    }

});


// リセットボタンでテキストを一括削除
resetBtn.addEventListener("click", () => {
    textCounter.textContent = `あと${maxCount}文字`;
});