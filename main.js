// Functionize Minecraft Fishing Start Code

// HTML variables n stuff
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let customFishBtn = document.getElementById("customFish");
let imgEl = document.getElementById("fishImg");
let sortBtn = document.getElementById("sortFish");

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Other variables i dont know what to call
let output;
let overHaul = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
customFishBtn.addEventListener("click", customFish);
sortBtn.addEventListener("click", sortInventory);

function fishOnce() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve fishing sim
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      output = "cod";
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      output = "salmon";
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      output = "tropical";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      output = "puffer";
    }
  } else if (character === "alex") {
    // Alex fishing sim
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      output = "cod";
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      output = "salmon";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      output = "tropical";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      output = "puffer";
    }
  } else if (character === "villager") {
    // Villager fishing sim
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      output = "cod";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      output = "salmon";
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      output = "tropical";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      output = "puffer";
    }
  }
  if (overHaul <= 229) {
    if (output == "cod") {
      imgEl.innerHTML += `<img id="fishImg" src='img/Raw-Cod.png'/>`;
      overHaul++;
    } else if (output == "salmon") {
      imgEl.innerHTML += `<img id="fishImg" src='img/Raw-Salmon.png'/>`;
      overHaul++;
    } else if (output == "tropical") {
      imgEl.innerHTML += `<img id="fishImg" src='img/Tropical-Fish.png'/>`;
      overHaul++;
    } else if (output == "puffer") {
      imgEl.innerHTML += `<img id="fishImg" src='img/Pufferfish.png'/>`;
      overHaul++;
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

function until200() {
  let codTarget = (numCode = numCod + 200);
  let count = 0;
  while (numCod < codTarget) {
    fishOnce();
    count++;
  }
}

function customFish() {
  let numFishEl = +document.getElementById("numFish").value;
  for (let counter = 0; counter < numFishEl; counter++) {
    fishOnce();
  }
}

function sortInventory() {
  imgEl.innerHTML = `<span id="fishImg"></span>`;

  for (let numInv = 0; numInv < numCod; numInv++) {
    imgEl.innerHTML += `<img id="fishImg" src='img/Raw-Cod.png'/>`;
  }

  for (let numInv2 = 0; numInv2 < numSalmon; numInv2++) {
    imgEl.innerHTML += `<img id="fishImg" src='img/Raw-Salmon.png'/>`;
  }

  for (let numInv3 = 0; numInv3 < numTropical; numInv3++) {
    imgEl.innerHTML += `<img id="fishImg" src='img/Tropical-Fish.png'/>`;
  }

  for (let numInv4 = 0; numInv4 < numPuffer; numInv4++) {
    imgEl.innerHTML += `<img id="fishImg" src='img/Pufferfish.png'/>`;
  }
}
