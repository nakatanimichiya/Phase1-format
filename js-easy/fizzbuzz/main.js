for (let i = 1; i < 21; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }

}

const title = document.getElementById("title")
console.log(`<h1>タグの中身のテキストは${title.textContent}です。`)

const cntup = document.getElementsByClassName("cntup")

cntup.addEventListener("click", (event) => {
    const cntup = document.getElementsByClassName("cntup")
    const number = document.createElement("p")
    number.textContent = "新しいアイテム"
    list.appendChild(number)
})