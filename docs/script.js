const activeClass = "active";
const activeTag = "activeTag";

var codeParam = document.getElementById("SPInitParam");
var codeConfig = document.getElementById("SPInitConfig");

var code = document.getElementsByClassName("code");
var tags = document.getElementsByClassName("tag")[0].getElementsByTagName("a");
CodeAction();

function ClickedParam(element) {
  DeactivateTags(tags);
  element.classList.add(activeTag);
  codeParam.classList.add(activeClass);
  codeConfig.classList.remove(activeClass);
  CodeAction(element);
}

function ClickedConfig(element) {
  DeactivateTags(tags);
  element.classList.add(activeTag);
  codeParam.classList.remove(activeClass);
  codeConfig.classList.add(activeClass);
  CodeAction(element);
}

function Show(node) {
  node.style.height = "auto";
  node.style.opacity = "100%";
}

function Hide(node) {
  node.style.height = null;
  node.style.opacity = null;
}

function CodeAction(element) {
  if (element == null) {
    ActiveTag(tags[0]);
  } else {
    ActiveTag(element);
  }
  for (let i = 0; i < code.length; i++) {
    const node = code[i];
    if (node.classList.contains("active")) {
      Show(node);
    } else {
      Hide(node);
    }
  }
}

function ActiveTag(element) {
  element.style.borderTop = "thick solid #7014e8";
}

function DeactivateTags(elements) {
  for (let i = 0; i < elements.length; i++) {
    const tag = elements[i];
    tag.classList.remove(activeTag);
    tag.style.borderTop = null;
  }
}
