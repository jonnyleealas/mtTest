var button_counter = document.getElementById('counter');
var counter = document.getElementById('number');
var count = 0;
button_counter.onclick = function () {
    count += 1;
    console.log("why all the types");
    counter.innerText = "".concat(count);
};
