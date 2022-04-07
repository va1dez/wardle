const keyLogic = {};

keyLogic.translate = function (letter) {
  
  // handle special keys
  if (letter.keyCode === 8) {
    return 'back';
  }

  if (letter.keyCode === 13) {
    return 'enter';
  }

  // escape anything not a letter
  if (letter.keyCode > 64 && letter.keyCode < 91) {
    return String.fromCharCode(letter.keyCode).toUpperCase();
  }
}

export default keyLogic;