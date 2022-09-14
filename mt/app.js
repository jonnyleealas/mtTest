var button = document.getElementById('counter');
var counter = document.getElementById('number');
var count = 0;
counter.onclick = function () {
    count += 1;
    counter.toString().innerHTML = count;
};
console.log('henry kisanger likes');
