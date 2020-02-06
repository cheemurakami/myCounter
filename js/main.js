let disp_count = document.getElementById('disp-count');
const down = document.getElementById('down');
const up = document.getElementById('up');
let count = 0;

up.addEventListener('click', () => {
    count ++;
    disp_count.innerHTML = count;
})

down.addEventListener('click', () => {
    count --;
    disp_count.innerHTML = count;
})
