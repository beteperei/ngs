// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let i=0;
const texto = () => {
   
    console.log('Hello after 0.5 seconds. MAYBE!');
    i++;

    if (i == 100){
        clearInterval(time);
    }
};
const time = setInterval(texto,500);


   

