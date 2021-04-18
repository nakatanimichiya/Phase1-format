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
window.alert("これはwindow.alert()で表示したアラートです")

//window.　に限り、省略することが出来る。
alert("これはalert()で表示したアラートです")

//documentのプロパティにアクセスする例
console.log(document.doctype) //=> <!doctype html>
console.log(document.title) //=> DOM API