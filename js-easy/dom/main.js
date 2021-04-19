// //HTMLの特定の<h1>タグの中身のテキストを変える

// const title = document.getElementById("title")
// console.log(`<h1>タグの中身のテキストは${title.textContent}です。`)

// const list = document.querySelector(".list")
// console.log(`<ul>タグの2つ目の子要素のテキストは${list.children[1].textContent}です。`)

// //HTMLの特定の<ul>1タグの中に<li>タグを追加する
// const newItem = document.createElement("li")
// newItem.textContent = "もも"
// list.appendChild(newItem)

// //HTMLの特定の<button>タグがクリックされた時に確認アラートを表示する
// const button = document.getElementById("#button")
// document.addEventListener("click", event => {
//     confirm("削除してよろしいですか？")//実際は削除しない
// })


//アラート表示
// window.alert("これはwindow.alert()で表示したアラートです")

//window.　に限り、省略することが出来る。
// alert("これはalert()で表示したアラートです")

//documentのプロパティにアクセスする例
console.log(document.doctype) //=> <!doctype html>
console.log(document.title) //=> DOM API

//<p id="intro">...</p>要素を取得
//document.getElementById(ID)
const intro = document.getElementById("intro")
console.log(intro.textContent)  //これは紹介文です

//<ul class="list">...</ul>要素を取得
//document.querySelector(セレクタ)
const list = document.querySelector(".list")
console.log(list.children.length) // =>3

//<ul class="list">..</ul>の中にある<li>要素を取得
const items = document.querySelectorAll(".list li")

//itemsは配列なので、forEachで繰り返しが出来る
//forEachは、配列の要素を１つずつ取り出してループしたいとき使う
// 配列.forEach((変数) => {
//     console.log(変数.textContent)
// })
items.forEach((item) => {
    console.log(item.textContent)
})