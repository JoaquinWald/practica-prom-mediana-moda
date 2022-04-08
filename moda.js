function calcularModa(lista1){

  // const lista1 = [2,1,2,4,5,4,6,6,5,6,6,2,2,1,2,2];

  const lista1Count = {};


  lista1.map(
    function(elementoDeIteracionesArray){
      if(lista1Count[elementoDeIteracionesArray]){
        lista1Count[elementoDeIteracionesArray] += 1;
      }else{
        lista1Count[elementoDeIteracionesArray] = 1;
      }
    }
  );

  const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
      return valorAcumulado[1] - nuevoValor[1];
    }
  );

  const moda = lista1Array[lista1Array.length - 1];

  console.log(moda); //['2', 6] el 2 se repite 6 veces

}

