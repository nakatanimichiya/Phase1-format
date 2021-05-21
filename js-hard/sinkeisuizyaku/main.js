const panel = document.getElementById("panel");
let card1 = document.createElement("button");
card1.className = "card back";
panel.appendChild(card1);

let card2 = document.createElement("button");
card2.className = "card back";
panel.appendChild(card2);

let card3 = document.createElement("button");
card3.className = "card back";
panel.appendChild(card3);

let card4 = document.createElement("button");
card4.className = "card back";
panel.appendChild(card4);

let card5 = document.createElement("button");
card5.className = "card back";
panel.appendChild(card5);

let card6 = document.createElement("button");
card6.className = "card back";
panel.appendChild(card6);

let card7 = document.createElement("button");
card7.className = "card back";
panel.appendChild(card7);

let card8 = document.createElement("button");
card8.className = "card back";
panel.appendChild(card8);

let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let array6 = [];
let array7 = [];
let array8 = [];

let random1 = Math.floor(Math.random() * 4) + 1;
let random2 = Math.floor(Math.random() * 4) + 1;
let random3 = Math.floor(Math.random() * 4) + 1;
let random4 = Math.floor(Math.random() * 4) + 1;

random1;
console.log(random1);
while (array1.length < 1) {
  if (random1 !== random2 && random1 !== random3 && random1 !== random4) {
    array1.push(random1);
    console.log(array1);
  }
}

card1.addEventListener("click", () => {
  card1.textContent = array1[0];
  console.log(card1.textContent);
});

card2.addEventListener("click", () => {
  while (array2.length < 1) {
    random2;
    array2.push(random2);
    card2.textContent = array2[0];
    console.log(random2);
  }
  console.log(array2);
  return array2;
});

card3.addEventListener("click", () => {
  while (array3.length < 1) {
    random3;
    array3.push(random3);
    card3.textContent = array3[0];
    console.log(random3);
  }
  console.log(array3);
  return array3;
});

card4.addEventListener("click", () => {
  while (array4.length < 1) {
    random4;
    array4.push(random4);
    card4.textContent = array4[0];
    console.log(random4);
  }
  console.log(array4);
  return array4;
});

card5.addEventListener("click", () => {
  while (array5.length < 1) {
    random1;
    array5.push(random1);
    card5.textContent = array5[0];
    console.log(random1);
  }
  console.log(array5);
  return array5;
});

card6.addEventListener("click", () => {
  while (array6.length < 1) {
    random2;
    array6.push(random2);
    card6.textContent = array6[0];
    console.log(random2);
  }
  console.log(array6);
  return array6;
});

card7.addEventListener("click", () => {
  while (array7.length < 1) {
    random3;
    array7.push(random3);
    card7.textContent = array7[0];
    console.log(random3);
  }
  console.log(array7);
  return array7;
});

card8.addEventListener("click", () => {
  while (array8.length < 1) {
    random4;
    array8.push(random4);
    card8.textContent = array8[0];
    console.log(random4);
  }
  console.log(array8);
  return array8;
});
