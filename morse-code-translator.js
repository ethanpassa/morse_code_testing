  const alphabet = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ' ': "/",
    '!': "-·-·--",
    '.': "·-·-·-",
    ',': "--··--"
  };

  const morseAlphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ",",
    "/": " "
  };

  const morseOutput = document.getElementById('morse-output');
  const engInput = document.getElementById('english__input');
  const englishSubmit = document.getElementById('eng-submit');
  const englishOutput = document.getElementById('english-output');
  const morseInput = document.getElementById('morse__input');
  const morseSubmit = document.getElementById('morse-submit');
  const clearButton = document.querySelector('#clear-morse');
  const undefinedError = new Error('The input you have entered is not defined');

  // English to Morse
  const morseDom = (joinString) => {
    morseOutput.innerHTML = joinString
  }

  const englishTranslate = (englishInput) => {
    if (englishInput === 'undefined') {
      throw undefinedError;
    }
    return englishInput.toLowerCase().split('').map(letter => alphabet[letter]).join(' ');
  }

  // Morse to English
  const englishDom = (joinString) => {
    englishOutput.innerHTML = joinString
  }

  const morseTranslate = (morseInput) => {
    if (morseInput === 'undefined') {
      throw undefinedError;
    }
    return morseInput.split(' ').map(letter => morseAlphabet[letter]).join('');
  }


  window.onload = function () {
    // Event listeners
    englishSubmit.addEventListener('click', () => {
      morseDom(englishTranslate(engInput.value));
    });

    morseSubmit.addEventListener('click', () => {
      englishDom(morseTranslate(morseInput.value));
    });

    clearButton.addEventListener('click', clear);

    // Clear funciton
    function clear() {
      morseOutput.innerHTML = 'Output'
      englishOutput.innerHTML = '--- ..- - .--. ..- -'
    }
  }

  module.exports = {
    englishTranslate,
    morseTranslate
  }