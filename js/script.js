let GCURRFONTSIZE = 16;
let GMINUSHIDDEN = false;
let GPLUSHIDDEN = false;
let GEL = document.getElementById("canvas");

function changeFontSize(val) {
  let computedSize = 0;
  let currSize = getCurrFontSize();
  if (val === "enlarge") {
    computedSize = computeSize(currSize, "add");
  } else {
    computedSize = computeSize(currSize, "subtract");
  }
  GEL.style.fontSize = computedSize;
  document.getElementById("curr-num").innerHTML = computedSize;
}

function computeSize(currSize, action) {
  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");
  if (action === "add") {
    let res = `${currSize + 4}px`;
    GCURRFONTSIZE = parseFloat(res);
    if (GCURRFONTSIZE > 8 && GCURRFONTSIZE < 100) {
      minus.disabled = false;
      GMINUSHIDDEN = false;
    } else if (GCURRFONTSIZE >= 100) {
      plus.disabled = true;
      GPLUSHIDDEN = true;
    }
    return res;
  } else {
    let res = `${currSize - 4}px`;
    GCURRFONTSIZE = parseFloat(res);
    if (GCURRFONTSIZE <= 8) {
      minus.disabled = true;
      GMINUSHIDDEN = true;
    } else if (GCURRFONTSIZE < 100) {
      plus.disabled = false;
      GPLUSHIDDEN = false;
    }
    return res;
  }
}

function getCurrFontSize() {
  let currFontSize = window
    .getComputedStyle(GEL, null)
    .getPropertyValue("font-size"); //gets me the current font-size.
  let currSize = parseFloat(currFontSize); //gets me the clean number.
  return currSize;
}

