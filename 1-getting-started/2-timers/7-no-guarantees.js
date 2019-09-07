/*const test = setInterval(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500
);*/
/*for (let i = 0; i < 1e10; i++) {
  // Block Node Synchronously
  console.log(test);
}*/


let i=0;
const texto = () => {
   
    console.log('Hello after 0.5 seconds. MAYBE! for the ' + i + ' time');
    i++;

    if (i == 100){
        clearInterval(time);
    }
};
const time = setInterval(texto,500);

