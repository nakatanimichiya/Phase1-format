let i = 0;

const rewriteCntUp = function () {
    const rewriteNum = document.getElementById("rewriteNum");
    // for (let i = 1; i < 1000; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        rewriteNum.innerHTML = "fizzbuzz";
    } else if (i % 3 === 0) {
        rewriteNum.innerHTML = "fizz";
    } else if (i % 5 === 0) {
        rewriteNum.innerHTML = "buzz";
    } else {
        rewriteNum.innerHTML = i;
    }
    i += 1;
    // }
};

const title = document.getElementById("title")
console.log(`<h1>タグの中身のテキストは${title.textContent}です。`)
