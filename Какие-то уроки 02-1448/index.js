// Elements: html, css
// Mobile toggler + Add devises
// Console: Preserve log, hide logs, Store object, Stack Trace
// Source: debugger
// Rendering: Vision deficience, Frame rendering stats, Layers borders
// Network
// Application
// Lighthouse
// Performance
// Layers
// Animation
// Memory leak

const memoryButton = document.querySelector('#memory');
const memoryStopButton = document.querySelector('#memory_stop');
const removeButton = document.querySelector('#memory_remove');
const input = document.querySelector('#input');
const debug = document.querySelector('#debug');
const fetchButton = document.querySelector('#fetchButton');

let intervalId = null;

memoryButton.addEventListener('click', () => {
  window.testArray = [];
  const info = document.createElement('div');
  document.body.append(info);

  intervalId = setInterval(() => {
    for (let i = 0; i < 1000; i++) {
      window.testArray.push(new Date());
    }
info.textContent = `Создано ${window.testArray.length} элементов`
  }, 500);
})

fetchButton.addEventListener('click', () => {
  fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
})