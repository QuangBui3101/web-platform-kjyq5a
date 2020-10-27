const activeClass = "active";

var codeParam = document.getElementById("SPInitParam");
var codeConfig = document.getElementById("SPInitConfig");

var code = document.getElementsByClassName("code");
var tags = document.getElementsByClassName("tag")[0].getElementsByTagName("a");
CodeAction();

function ClickedParam(element) 
{
    codeParam.classList.add(activeClass);
    codeConfig.classList.remove(activeClass);
    CodeAction();
}

function ClickedConfig(element) 
{
    codeParam.classList.remove(activeClass);
    codeConfig.classList.add(activeClass);
    CodeAction();
}

function Show(node) {
    node.style.height = "auto";
    node.style.opacity = "100%";    
}

function Hide(node) {
    node.style.height = null;
    node.style.opacity = null;
}

function CodeAction() {
    for (let i = 0; i < code.length; i++) {
        const node = code[i];
        if (node.classList.contains("active")) {
            Show(node);
        }
        else {
            Hide(node);
        }
    }
}

function ActiveTag(element) {
    element.style.borderTop = "thick solid #7014e8";
}

function DeactivateTags(elements) {
    
}
