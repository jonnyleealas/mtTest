let button_counter: HTMLElement = document.getElementById('counter') as HTMLElement;
var counter = document.getElementById('number') as HTMLElement;
var count = 0;
button_counter.onclick = function () {
    count +=1;
    counter.innerText = `${count}`;
}
