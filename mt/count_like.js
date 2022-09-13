var button = document.getElementById("counter");
var number = document.getElementById("number")
 var count = 0;
button.onclick = function() {
    count +=1;
    number.innerHTML = count;
};
