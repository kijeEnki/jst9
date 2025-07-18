const buffer = document.getElementById("buffer");
const written = document.getElementById("text");
const caret = document.getElementById("caret");

const layout = document.getElementById("layout");

const keys = {
    "1": document.getElementById("1"),
    "2": document.getElementById("2"),
    "3": document.getElementById("3"),
    "4": document.getElementById("4"),
    "5": document.getElementById("5"),
    "6": document.getElementById("6"),
    "7": document.getElementById("7"),
    "8": document.getElementById("8"),
    "9": document.getElementById("9"),
    "0": document.getElementById("0"),
    "*": document.getElementById("star"),
    "#": document.getElementById("hash")
};

const mappings = {
    "lc": {
        "1": [".", ",", ":", ";", "!", "?", "1"],
        "2": ["a", "b", "c", "2"],
        "3": ["d", "e", "f", "3"],
        "4": ["g", "h", "i", "4"],
        "5": ["j", "k", "l", "5"],
        "6": ["m", "n", "o", "6"],
        "7": ["p", "q", "r", "s", "7"],
        "8": ["t", "u", "v", "8"],
        "9": ["w", "x", "y", "z", "9"],
        "0": [" ", "0"],
        "*": null,
        "#": null
    },
    "uc": {
        "1": [".", ",", ":", ";", "!", "?", "1"],
        "2": ["A", "B", "C", "2"],
        "3": ["D", "E", "F", "3"],
        "4": ["G", "H", "I", "4"],
        "5": ["J", "K", "L", "5"],
        "6": ["M", "N", "O", "6"],
        "7": ["P", "Q", "R", "S", "7"],
        "8": ["T", "U", "V", "8"],
        "9": ["W", "X", "Y", "Z", "9"],
        "0": [" ", "0"],
        "*": null,
        "#": null
    },
    "nm": {
        "1": ["1", "^"],
        "2": ["2", "+"],
        "3": ["3", "%"],
        "4": ["4", "-"],
        "5": ["5", "="],
        "6": ["6", "×"],
        "7": ["7", "."],
        "8": ["8", "÷"],
        "9": ["9", ","],
        "0": ["0", " "],
        "*": null,
        "#": null
    },
    "cl": {
        "1": ["'", ".", ",", ":", ";", "!", "?", "1"],
        "2": ["а", "б", "в", "г", "ґ", "2"],
        "3": ["д", "е", "ё", "є", "ж", "з", "3"],
        "4": ["и", "і", "ї", "й", "к", "л", "4"],
        "5": ["м", "н", "о", "п", "5"],
        "6": ["р", "с", "т", "у", "ў", "6"],
        "7": ["ф", "х", "ц", "ч", "7"],
        "8": ["ш", "щ", "ъ", "ы", "8"],
        "9": ["ь", "э", "ю", "я", "9"],
        "0": [" ", "0"],
        "*": null,
        "#": null
    },
    "cu": {
        "1": ["'", ".", ",", ":", ";", "!", "?", "1"],
        "2": ["А", "Б", "В", "Г", "Ґ", "2"],
        "3": ["Д", "Е", "Ё", "Є", "Ж", "З", "3"],
        "4": ["И", "І", "Ї", "Й", "К", "Л", "4"],
        "5": ["М", "Н", "О", "П", "5"],
        "6": ["Р", "С", "Т", "У", "Ў", "6"],
        "7": ["Ф", "Х", "Ц", "Ч", "7"],
        "8": ["Ш", "Щ", "Ъ", "Ы", "8"],
        "9": ["Ь", "Э", "Ю", "Я", "9"],
        "0": [" ", "0"],
        "*": null,
        "#": null
    },
    "sm": {
        "1": ["‘", "“", "‚", "„", "`", "′", "'"],
        "2": ["•", "·", "°", "*", "×", "¤", "®", "©", "™"],
        "3": ["’", "”", "″", "=", "\""],
        "4": ["<", "≤", "‹", "«", "(", "[", "{"],
        "5": ["@", "~", "_", "&", "/", "|", "\\"],
        "6": [">", "≥", "›", "»", ")", "]", "}"],
        "7": ["#", "№", "%", "º", "ª", "µ"],
        "8": ["$", "¢", "€", "£", "¥"],
        "9": ["¡", "¿", "…", "¶", "§"],
        "0": ["†", "‡", "—", "–", "±"],
        "*": null,
        "#": null
    }
};

const labels = {
    "lc": {
        "1": "1  ;!?",
        "2": "2  abc",
        "3": "3  def",
        "4": "4  ghi",
        "5": "5  jkl",
        "6": "6  mno",
        "7": "7 pqrs",
        "8": "8  tuv",
        "9": "9 wxyz",
        "0": "0    ␣",
        "*": "*    ⇤",
        "#": "#    →"
    },
    "uc": {
        "1": "1  ;!?",
        "2": "2  ABC",
        "3": "3  DEF",
        "4": "4  GHI",
        "5": "5  JKL",
        "6": "6  MNO",
        "7": "7 PQRS",
        "8": "8  TUV",
        "9": "9 WXYZ",
        "0": "0    ␣",
        "*": "*    ⇤",
        "#": "#    →"
    },
    "nm": {
        "1": "1    ^",
        "2": "2    +",
        "3": "3    %",
        "4": "4    -",
        "5": "5    =",
        "6": "6    ×",
        "7": "7    .",
        "8": "8    ÷",
        "9": "9    ,",
        "0": "0    ␣",
        "*": "*    ⇤",
        "#": "#    →"
    },
    "cl": {
        "1": "1 ';!?",
        "2": "2 абвг",
        "3": "3 дежз",
        "4": "4 ийкл",
        "5": "5 мноп",
        "6": "6 рсту",
        "7": "7 фхцч",
        "8": "8 шщъы",
        "9": "9 ьэюя",
        "0": "0    ␣",
        "*": "*    ⇤",
        "#": "#    →"
    },
    "cu": {
        "1": "1 ';!?",
        "2": "2 АБВГ",
        "3": "3 ДЕЖЗ",
        "4": "4 ИЙКЛ",
        "5": "5 МНОП",
        "6": "6 РСТУ",
        "7": "7 ФХЦЧ",
        "8": "8 ШЩЪЫ",
        "9": "9 ЬЭЮЯ",
        "0": "0    ␣",
        "*": "*    ⇤",
        "#": "#    →"
    },
    "sm": {
        "1": "“„`′",
        "2": "•°¤©",
        "3": "’”″=",
        "4": "≤«[{",
        "5": "@~&/",
        "6": "≥»]}",
        "7": "#№%µ",
        "8": "$€£¥",
        "9": "¡¿…§",
        "0": "†‡—±",
        "*": "*    ⇤",
        "#": "#    →"
    }
};

let mapping = Object.create(mappings["lc"]);

let lastKey;
let pressCount;
let timeoutId;
let committedText;
let isShifted = false;

function setMapping() {
    mapping = Object.create(mappings[layout.value]);
    for (let key in keys) {
        keys[key].innerText = labels[layout.value][key];
    }
    lastKey = null;
    pressCount = 0;
}

function updateCaret() {
    caret.innerText = committedText || "_";
    if (committedText == " ") {
        caret.innerText = "·";
    }
}

function updateSettings() {
    shiftIndicator.innerText = isShifted ? "⇑" : "";
}

function processInput(key) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    if (key !== lastKey) {
        submitLetter();
        pressCount = 0;
    }
    lastKey = key;
    pressCount += 1;
    if (mapping[key]) {
        committedText = mapping[key][(pressCount - 1) % mapping[key].length];
        committedText = isShifted ? committedText.toUpperCase() : committedText;
        updateCaret();
    }
    timeoutId = setTimeout(() => {
        submitLetter();
    }, 3000);
}

function backspace() {
    if ("*" !== lastKey) {
        pressCount = 0;
    }
    lastKey = "*";
    pressCount += 1;
    if (committedText) {
        committedText = "";
        updateCaret();
    } else {
        if (written.innerText) {
            written.innerText = written.innerText.substring(0, written.innerText.length - 1);
        }
    }
}

function submitLetter() {
    if ("#" !== lastKey) {
        pressCount = 0;
    }
    lastKey = "#";
    pressCount += 1;
    if (committedText) {
        written.innerText += committedText;
        committedText = "";
        updateCaret();
    }
}

function onPress(key) {
    if (key >= 0 && key <= 9) {
        processInput(key);
    } else if (key === "*") {
        backspace();
    } else if (key === "#") {
        submitLetter();
    }
}

for (let key in keys) {
    keys[key].addEventListener("click", () => { onPress(key); });
}

layout.addEventListener("input", setMapping);