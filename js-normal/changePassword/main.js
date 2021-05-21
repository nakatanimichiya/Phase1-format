
// 開いた時に現在のパスワードを表示 →textContent
const nowPassword = document.getElementById("nowPassword");
let passwordValue = "aaaaa";
nowPassword.textContent = `現在のパスワードは ${passwordValue}`;

// 現在のパスワードをinputタグに入力
// 新しいパスワードをinputタグに入力

// 変更ボタンを押す
const setBtn = document.getElementById("setPassword");
setBtn.addEventListener("click", () => {
    // 現在のパスワードを取得
    const confirmPassword = document.getElementById("confirmPassword").value;

    // 新しいパスワードを取得
    const newPassword = document.getElementById("newPassword").value;




    // 条件分岐 No1
    // if (passwordValue === confirmPassword) {

    //     // 新しいパスワードに変更
    //     passwordValue = newPassword;
    //     passwordValue.textContent = passwordValue;
    //     nowPassword.textContent = `現在のパスワードは${passwordValue}`;
    //     alert(`新しいパスワードは${newPassword}です`)

    //     // 新しいパスワードは現在のパスワードを使えない →　alert
    // } else if (newPassword === passwordValue) {
    //     alert("同じパスワードです");

    //     // 現在のパスワードが間違っている　→　alert
    // } else {
    //     alert("現在のパスワードが間違っています");
    // };

    // 条件分岐 No2
    // 新しいパスワードは八文字以上 →　alert
    // if (newPassword.length < 8) {
    //     alert("8文字以上必要です");
    // } else {
    //     // 新しいパスワードに変更
    //     passwordValue = newPassword;
    //     passwordValue.textContent = passwordValue;
    //     nowPassword.textContent = `現在のパスワードは${passwordValue}`;
    //     alert(`新しいパスワードは${newPassword}です`)
    // };

    //条件分岐 No.3
    // if (passwordValue !== newPassword) {
    //     let result = newPassword.match(/^\d{3}-?\d{4}$/g);
    //     if (!result) {
    //         alert("xxx-yyyyの形式で入力してください");
    //     } else {
    //         passwordValue = newPassword;
    //         passwordValue.textContent = passwordValue;
    //         nowPassword.textContent = `現在のパスワードは${passwordValue}`;
    //         alert(`新しいパスワードは${newPassword}です`)
    //     }
    // }

    // 条件分岐　No4
    // if (passwordValue !== newPassword) {
    //     const check = /(.)\1/;
    //     let result = check.test(newPassword);
    //     if (!result) {
    //         passwordValue = newPassword;
    // passwordValue.textContent = passwordValue;
    // nowPassword.textContent = `現在のパスワードは${passwordValue}`;
    // alert(`新しいパスワードは${newPassword}です`)
    //     } else {
    //         alert("同じ文字を連続で使うことはできません")
    //     }
    // }

    // 条件分岐 No5
    // if (passwordValue !== newPassword) {
    //     const reserch = /abc/g;
    //     let result = newPassword.search(reserch);
    //     if (result < 0) {
    //        passwordValue = newPassword;
    // passwordValue.textContent = passwordValue;
    // nowPassword.textContent = `現在のパスワードは${passwordValue}`;
    // alert(`新しいパスワードは${newPassword}です`)
    //     } else {
    //         alert("「abc」を含むものは使えません");
    //     }
    // }


});



