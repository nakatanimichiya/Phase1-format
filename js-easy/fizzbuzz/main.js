// let i = 0;

// const rewriteCntUp = function () {
//     const rewriteNum = document.getElementById("rewriteNum");
//     

//     if (i % 3 === 0 && i % 5 === 0) {
//         rewriteNum.innerHTML = "fizzbuzz";
//     } else if (i % 3 === 0) {
//         rewriteNum.innerHTML = "fizz";
//     } else if (i % 5 === 0) {
//         rewriteNum.innerHTML = "buzz";
//     } else {
//         rewriteNum.innerHTML = i;
//     }
//     i += 1;
//
// };

// const title = document.getElementById("title")
// console.log(`<h1>タグの中身のテキストは${title.textContent}です。`)
// let i = 0;

// const showNum = document.getElementById("showNum");
// showNum.innerHTML = i;

// const fizzBtn = function () {
//     i += 1;
//     if (i % 3 === 0) {
//         showNum.innerHTML = "fizz";
//     } else {
//         alert("miss");
//         location.reload();
//     }
// };

// const buzzBtn = function () {
//     i += 1;
//     if (i % 5 === 0) {
//         showNum.innerHTML = "buzz";
//     } else {
//         alert("miss");
//         location.reload();
//     }
// };

// const fizzbuzzBtn = function () {
//     i += 1;
//     if (i % 3 === 0 && i % 5 === 0) {
//         showNum.innerHTML = "fizzbuzz";
//     } else {
//         alert("miss");
//         location.reload();
//     }
// };

// const numBtn = function () {
//     i += 1;
//     if (i % 5 === 0 || i % 3 === 0) {
//         // showNum.innerHTML = "i";
//         // } else {
//         alert("miss");
//         location.reload();
//     }
//     showNum.innerHTML = i;
// };

// let i = 0
// for (let i = 0; i < 20; i++) {


//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz")
//     } else if (i % 5 === 0) {
//         console.log("buzz")
//     } else if (i % 3 === 0) {
//         console.log("fizz")
//     } else {
//         console.log(i)
//     }

// }

// let i = 0

// const rewriteCntUp = function () {
//     const rewriteNum = document.getElementById("rewriteNum");

//     if (i % 3 === 0 && i % 5 === 0) {
//         rewriteNum.innerHTML = "fizzbuzz";
//     } else if (i % 5 === 0) {
//         rewriteNum.innerHTML = "buzz";
//     } else if (i % 3 === 0) {
//         rewriteNum.innerHTML = "fizz";
//     } else {
//         rewriteNum.innerHTML = i
//     }
//     i += 1
// }

let i = 0
const showNum = document.getElementById("showNum")
showNum.innerHTML = i



const fizzbuzzBtn = function () {
    i += 1
    if (i % 3 === 0 && i % 5 === 0) {
        showNum.innerHTML = "fizzbuzz";
    } else {
        alert("間違ってます")
        location.reload();
    }
}

const fizzBtn = function () {
    i += 1

    if (i % 3 === 0) {
        showNum.innerHTML = "fizz";
    } else {
        alert("間違ってます")
        location.reload();
    }
}


const buzzBtn = function () {

    i += 1
    if (i % 5 === 0) {
        showNum.innerHTML = "buzz";
    } else {
        alert("間違ってます")
        location.reload();
    }

}

const numBtn = function () {

    i += 1
    if (i % 3 === 0 || i % 5 === 0) {
        alert("間違ってます")
        location.reload;
    }
    showNum.innerHTML = i
}


