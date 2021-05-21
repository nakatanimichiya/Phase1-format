let view = document.getElementById("view");

let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");
let tr5 = document.createElement("tr");
let tr6 = document.createElement("tr");

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");

let td6 = document.createElement("td");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
let td9 = document.createElement("td");
let td10 = document.createElement("td");

let td11 = document.createElement("td");
let td12 = document.createElement("td");
let td13 = document.createElement("td");
let td14 = document.createElement("td");
let td15 = document.createElement("td");

let td16 = document.createElement("td");
let td17 = document.createElement("td");
let td18 = document.createElement("td");
let td19 = document.createElement("td");
let td20 = document.createElement("td");

let td21 = document.createElement("td");
let td22 = document.createElement("td");
let td23 = document.createElement("td");
let td24 = document.createElement("td");
let td25 = document.createElement("td");

let td26 = document.createElement("td");
let td27 = document.createElement("td");
let td28 = document.createElement("td");
let td29 = document.createElement("td");
let td30 = document.createElement("td");

view.appendChild(tr1);
view.appendChild(tr2);
view.appendChild(tr3);
view.appendChild(tr4);
view.appendChild(tr5);
view.appendChild(tr6);

tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr1.appendChild(td4);
tr1.appendChild(td5);

tr2.appendChild(td6);
tr2.appendChild(td7);
tr2.appendChild(td8);
tr2.appendChild(td9);
tr2.appendChild(td10);

tr3.appendChild(td11);
tr3.appendChild(td12);
tr3.appendChild(td13);
tr3.appendChild(td14);
tr3.appendChild(td15);

tr4.appendChild(td16);
tr4.appendChild(td17);
tr4.appendChild(td18);
tr4.appendChild(td19);
tr4.appendChild(td20);

tr5.appendChild(td21);
tr5.appendChild(td22);
tr5.appendChild(td23);
tr5.appendChild(td24);
tr5.appendChild(td25);

tr6.appendChild(td26);
tr6.appendChild(td27);
tr6.appendChild(td28);
tr6.appendChild(td29);
tr6.appendChild(td30);

td1.textContent = "B";
td2.textContent = "I";
td3.textContent = "N";
td4.textContent = "G";
td5.textContent = "O";

td18.textContent = "free";

const button = document.getElementById("hitNum");
let array1;
let array2;
let array3;
let array4;
let array5;
button.addEventListener("click", () => {
  array1 = [];
  array2 = [];
  array3 = [];
  array4 = [];
  array5 = [];

  td18.style.backgroundColor = "black";
  td18.style.color = "rgb(70, 206, 216)";

  while (array1.length < 5) {
    let random1 = Math.floor(Math.random() * 15 + 1);
    if (!array1.includes(random1)) {
      array1.push(random1);
    }
  }
  console.log(array1);
  console.log(array1[0]);

  td6.textContent = array1[0];
  td11.textContent = array1[1];
  td16.textContent = array1[2];
  td21.textContent = array1[3];
  td26.textContent = array1[4];

  while (array2.length < 5) {
    let random2 = Math.floor(Math.random() * 15) + 16;
    if (!array2.includes(random2)) {
      array2.push(random2);
    }
  }
  console.log(array2);

  td7.textContent = array2[0];
  td12.textContent = array2[1];
  td17.textContent = array2[2];
  td22.textContent = array2[3];
  td27.textContent = array2[4];

  while (array3.length < 5) {
    let random3 = Math.floor(Math.random() * 15) + 31;
    if (!array3.includes(random3)) {
      array3.push(random3);
    }
  }
  console.log(array3);

  td8.textContent = array3[0];
  td13.textContent = array3[1];
  // td18.textContent = array3[2];　→free
  td23.textContent = array3[3];
  td28.textContent = array3[4];

  while (array4.length < 5) {
    let random4 = Math.floor(Math.random() * 15) + 46;
    if (!array4.includes(random4)) {
      array4.push(random4);
    }
  }
  console.log(array4);

  td9.textContent = array4[0];
  td14.textContent = array4[1];
  td19.textContent = array4[2];
  td24.textContent = array4[3];
  td29.textContent = array4[4];

  while (array5.length < 5) {
    let random5 = Math.floor(Math.random() * 15) + 61;
    if (!array5.includes(random5)) {
      array5.push(random5);
    }
  }
  console.log(array5);

  td10.textContent = array5[0];
  td15.textContent = array5[1];
  td20.textContent = array5[2];
  td25.textContent = array5[3];
  td30.textContent = array5[4];

  return array1, array2, array3, array4, array5;
});

const scrach = document.getElementById("scrach");
scrach.addEventListener("click", () => {
  let array6 = [];
  let randomScrach = Math.floor(Math.random() * 78) + 1;
  if (!array6.includes(randomScrach)) {
    array6.push(randomScrach);
    console.log(randomScrach);
    // alert(randomScrach);

    if (array6[0] === array1[0]) {
      td6.style.backgroundColor = "black";
      td6.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array1[1]) {
      td11.style.backgroundColor = "black";
      td11.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array1[2]) {
      td16.style.backgroundColor = "black";
      td16.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array1[3]) {
      td21.style.backgroundColor = "black";
      td21.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array1[4]) {
      td26.style.backgroundColor = "black";
      td26.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array2[0]) {
      td7.style.backgroundColor = "black";
      td7.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array2[1]) {
      td12.style.backgroundColor = "black";
      td12.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array2[2]) {
      td17.style.backgroundColor = "black";
      td17.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array2[3]) {
      td22.style.backgroundColor = "black";
      td22.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array2[4]) {
      td27.style.backgroundColor = "black";
      td27.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array3[0]) {
      td8.style.backgroundColor = "black";
      td8.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array3[1]) {
      td13.style.backgroundColor = "black";
      td13.style.color = "rgb(70, 206, 216)";
    }

    if (array6[0] === array3[2]) {
      td18.style.backgroundColor = "black";
      td18.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array3[3]) {
      td23.style.backgroundColor = "black";
      td23.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array3[4]) {
      td28.style.backgroundColor = "black";
      td28.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array4[0]) {
      td9.style.backgroundColor = "black";
      td9.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array4[1]) {
      td14.style.backgroundColor = "black";
      td14.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array4[2]) {
      td19.style.backgroundColor = "black";
      td19.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array4[3]) {
      td24.style.backgroundColor = "black";
      td24.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array4[4]) {
      td29.style.backgroundColor = "black";
      td29.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array5[0]) {
      td10.style.backgroundColor = "black";
      td10.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array5[1]) {
      td15.style.backgroundColor = "black";
      td15.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array5[2]) {
      td20.style.backgroundColor = "black";
      td20.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array5[3]) {
      td25.style.backgroundColor = "black";
      td25.style.color = "rgb(70, 206, 216)";
    }
    if (array6[0] === array5[4]) {
      td30.style.backgroundColor = "black";
      td30.style.color = "rgb(70, 206, 216)";
    }
    console.log(array6);
    return array6;
  }
});

if (td6.style.backgroundColor === "black" && td7.backgroundColor === "black" && td8.backgroundColor === "black" && td9.backgroundColor === "black" && td10.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td11.style.backgroundColor === "black" && td12.backgroundColor === "black" && td13.backgroundColor === "black" && td14.backgroundColor === "black" && td15.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td16.style.backgroundColor === "black" && td17.backgroundColor === "black" && td18.backgroundColor === "black" && td19.backgroundColor === "black" && td20.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td21.style.backgroundColor === "black" && td22.backgroundColor === "black" && td23.backgroundColor === "black" && td24.backgroundColor === "black" && td25.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td26.style.backgroundColor === "black" && td27.backgroundColor === "black" && td28.backgroundColor === "black" && td29.backgroundColor === "black" && td30.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td6.style.backgroundColor === "black" && td11.backgroundColor === "black" && td16.backgroundColor === "black" && td21.backgroundColor === "black" && td26.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td7.style.backgroundColor === "black" && td12.backgroundColor === "black" && td17.backgroundColor === "black" && td22.backgroundColor === "black" && td27.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td8.style.backgroundColor === "black" && td13.backgroundColor === "black" && td18.backgroundColor === "black" && td23.backgroundColor === "black" && td28.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td9.style.backgroundColor === "black" && td14.backgroundColor === "black" && td19.backgroundColor === "black" && td24.backgroundColor === "black" && td29.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td10.style.backgroundColor === "black" && td15.backgroundColor === "black" && td20.backgroundColor === "black" && td25.backgroundColor === "black" && td30.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td6.style.backgroundColor === "black" && td12.backgroundColor === "black" && td18.backgroundColor === "black" && td24.backgroundColor === "black" && td30.backgroundColor === "black") {
  alert("ビンゴ！");
}
if (td10.style.backgroundColor === "black" && td14.backgroundColor === "black" && td18.backgroundColor === "black" && td22.backgroundColor === "black" && td26.backgroundColor === "black") {
  alert("ビンゴ！");
}
