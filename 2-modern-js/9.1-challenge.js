const array1= ['two','three'];
const [first, ...last] = ['one','four','five']
const resultado = [first, ...array1,...last];

//Usar restpread 
console.log(resultado);