//こんにちは世界！
console.log("hello world!");

// 値
console.log(100);
console.log(1.5);

// 文字列
console.log("hello");
console.log("ありがとう");

// 配列
console.log([1, 2,])

// 真偽値
console.log(true)

// オブジェクト
console.log({ one: 1, })

// 変数
const myname = "nakatani"
console.log(myname);

const number = 100
const userIds = [1, 3, 10]
const isValid = true

//constは変数を初期化する必要がある
//letは変数を初期化する必要がない
let learning = "JavaScript"
//constは再代入できない
//letは再代入できる
learning = "ruby"

console.log(learning)

//文字列
const breakfast = "トースト"

console.log(`今日の朝ごはんは${breakfast}でした
とてもおいしかった。`)//改行はそのまま改行するだけ　または　\n

//配列
const days = ["日", "月", "火"]

console.log(days[2])
console.log(days.length)

const nengo = ["明治", "大正", "昭和", "平成"]
nengo.push("令和")
console.log(nengo)

nengo.splice(3, 1)//（削除したい要素のインデックス、削除したい要素の個数）

nengo[2] = "昭和"

const num = Math.random()

// for文とwhile文の違いは
// 初期化処理ができるかできないか

for (let x = 0; x < 10; x++) {
    console.log(x)
}

let v = 0
while (v < 10) {
    console.log(v)
    v++
}

//関数（処理をまとめて名前を付けるもの）の定義
//function 関数名（引数）{

function cook(food1, food2) {  //cook=関数名
    console.log(`${food1}生姜焼きが出来上がりました`)
    console.log(`${food2}生姜焼きが出来上がりました`)

}

//関数を実行する際は、関数名の横に（）をつける
//実行
cook("生姜焼き", "シチュー")
cook("肉じゃが")
cook("カレー")

function applyTax(price) {
    // console.log(price * 1.1)//消費税込みの金額を出力する
    return price * 1.1
}

const result1 = applyTax(1000)
const result2 = applyTax(500)

console.log(result1 + result2)

//関数式
const applyTax = function (price) { //（）には入れないのが普通
    return price * 1.1
}

//アロー関数
const applyTax = (price) => {
    return price * 1.1
}

//引数が1つの場合、（）を省略できる
const applyTax = price => {
    return price * 1.1
}

//処理が一行の場合、returnとブロック（｛｝）を省略できる
const applyTax = price => price * 1.1







