let button_counter: HTMLElement = document.getElementById('counter') as HTMLElement;
var counter = document.getElementById('number') as HTMLInputElement;
var count: number = 0;
button_counter.onclick = function () {
    count +=1;
    console.log("why all the types")
    counter.innerText = `${count}`;
}
