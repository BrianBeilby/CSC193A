function increaseFontSize() {
  document.getElementById("textArea").style.fontSize = "2em";
}

function changeStyle() {
  let textArea = document.getElementById("textArea");
  if (document.getElementById("fancyShmancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else if (document.getElementById("boringBetty").checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
    let textArea = document.getElementById("textArea");
    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(".").toUpperCase();
}