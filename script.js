let display = document.getElementById("screen");
function allclear() {
    display.value="";
}
function clear() {
    display.value="";
}
function show(n) {
    display.value+=n;
}
function calc() {
    display.value = eval(display.value);
}