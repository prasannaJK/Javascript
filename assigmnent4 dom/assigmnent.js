const task1El1 = document.getElementById('task-1');
const taks1El2 = document.querySelector('li');

task1El1.style.color = 'red';
taks1El2.style.backgroundColor = 'black';

const docTitle1 = document.querySelector('title');
// docTitle1.textContent = 'ASSIGMENT4 - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'ASSIGMENT4 - Solved!';

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'ASSIGMNENT4 - Solved!';