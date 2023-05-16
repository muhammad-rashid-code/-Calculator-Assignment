var result=document.getElementById("result").value
function get_num(num) {
  document.getElementById("result").value+=num
}
function clearResult() {
    document.getElementById("result").value = ""
}
function getResult() {
    document.getElementById("result").value = eval(document.getElementById("result").value)
}
function clear_num() {
    document.getElementById('result').value = document.getElementById("result").value.slice (0, result.length - 1);
}
// function trignometry() {
//     document.getElementById("result").value=Math.sin(result);
// }
// function sin() {
//     screen.value = Math.sin(screen.value);
// }

function pi() {
    document.getElementById("result").value =eval(3.14159265359);
}
function e(params) {
    document.getElementById("result").value =eval(2.71828182846);
}
function sqrt() {
    document.getElementById("result").value = eva.Math.sqrt();
}
function cos(params) {
    document.getElementById("result").value=Math.cos()
}
function sin(params) {
    document.getElementById("result").value=Math.sin()
}
function tan(params) {
    document.getElementById("result").value=Math.tan()
}
function tan(params) {
    document.getElementById("result").value=Math.tan()
}