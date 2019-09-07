// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let i=0;
const texto = () => {
   
console.log('Hello World');
    i++;

    if (i == 5){
        clearInterval(time);
    }
};
const time = setInterval(texto,1000);


   

