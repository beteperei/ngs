/*const test = setInterval(
  () => console.log('Hello after 0.5 seconds. MAYBE!')
);*/
setTimeout(() => {
  console.log('Hello after 0.5 seconds. MAYBE!');
}, timeout);


for (let i = 0; i < 1e10; i++) {
  // Block Node Synchronously
  setTimeout(test,500 * i);
}
