/* Crear una clase Question que tenga las siguientes funciones 
 Agregar titulo
 Agregar answer en un arreglo
 Imprimir question: titulo, numero maximo de answers y las answers
  */
class Question {
    constructor(titulo, numMaximo) {
        this.titulo = titulo;
        this.numMaximo = numMaximo ;
        this.ansewrs=[];
        
    }

    }

}


const q1 = new Question("Pregunta", ["r1","r2","r3","r4","r5","r6","r7"]);
q1.print();