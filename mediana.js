
function calcularPromedio(listado){
  let sumaListado = 0;
  for(let i = 0; i < listado.length; i++){
    sumaListado = sumaListado + listado[i];
  };
  
  const promedioListado = sumaListado / listado.length;
  
  return promedioListado;
  
}

const listado = [100, 200, 1000, 390, 500, 360, 235];

const listadoSorted = listado.sort(
  function(a, b){
    return b - a;
  }
);

const mitadListado = parseInt(listado.length / 2);

function esPar(num){
  if(num % 2 === 0){
    return true;
  }else{
    return false;
  }
};

let mediana;

if(esPar(listado.length)){
  const elemento1 = listado[mitadListado - 1];
  const elemento2 = listado[mitadListado];

  const promedio1y2 = (elemento1 + elemento2) / 2;
  // const promedioelemento1y2 = calcularPromedio([
  //   elemento1,
  //   elemento2,
  // ]);

  mediana = promedio1y2;
}else{
  mediana = listado[mitadListado];
};

console.log('La mediana es: ' + mediana);