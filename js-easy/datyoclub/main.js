let i = 0;

const cntUp = function () {
    i += 1
}
const reply = function () {
    const str = "どうぞどうぞ";
    const action = str.repeat(i);
    alert(action);
}


const cntDown = function () {
    i -= 1;
    if (i === 0) {
        alert("もう誰もいない…")
        i = 0
    }
}

// let v = 0;
// const cntUp = function () {
//     v += 1
// };
// const reply = function () {
//     const action = Array(1 * v + 1).join("どうぞどうぞ");
//     alert("action");
//     i = 0;
// }
