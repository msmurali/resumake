function isNum(text) {
  for (let indx = 0; indx < text.length; indx++) {
    if (text[indx] >= "0" && text[indx] <= "9") {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function isAlphabet(text) {
  for (let indx = 0; indx < text.length; indx++) {
    if (
      (text[indx] >= "a" && text[indx] <= "z") ||
      (text[indx] >= "A" && text[indx] <= "Z")
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function hasSpecialChars(text) {
  for (let indx = 0; indx < text.length; indx++) {
    if (isNum(text[indx]) || isAlphabet(text[indx]) || text[indx] == " ") {
      continue;
    } else {
      return true;
    }
  }
  return false;
}

function isEmpty(text) {
  return text.length === 0;
}

function isValidUrl(text) {}

function isValidEmail(text) {}

function isValidYear(text) {}
