function getClickId(scrivi){
    document.getElementById('screen').value += scrivi;
}
function result(){
    document.getElementById('screen').value = eval(document.getElementById('screen').value);
}
function clearAll(){
    document.getElementById('screen').value = '';
}
function deleteOne(){
    document.getElementById('screen').value = document.getElementById('screen').value.slice(0,-1);
}
function radice(){
    document.getElementById('screen').value = Math.sqrt(document.getElementById('screen').value);
}
function quadrato(){
    document.getElementById('screen').value = Math.pow(document.getElementById('screen').value, 2);
}