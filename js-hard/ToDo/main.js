//追加ボタン
const addBtn = document.getElementById("add-btn");
//ulタグのId
const todo = document.getElementById("todo");
// 追加ボタンを押したとき取得した文字をリストに追加
addBtn.addEventListener("click", () => {
  // 空欄ボックスに入力した文字を取得
  //テストの内容
  let addArea = document.getElementById("add-area").value;
  //横並びにするためにdivタグを生成
  let div = document.createElement("div");
  //divタグの中にliタグを生成
  let list = document.createElement("li");
  //完了ボタンのbuttonタグを生成
  let reset = document.createElement("button");
  //div,li,buttonを追加
  todo.appendChild(div);
  list.textContent = addArea;
  div.appendChild(list);
  reset.textContent = "完了";
  div.appendChild(reset);
  if (list.textContent === "") {
    alert("空欄");
  }
  document.getElementById("add-area").value = "";
  // 完了ボタンを押したときにリストから削除
  reset.addEventListener("click", () => {
    todo.removeChild(div);
  });
});
