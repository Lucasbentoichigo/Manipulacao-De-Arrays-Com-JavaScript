/* 5 – Erro de importação
O primeiro item do carregamento chegou com defeito e precisa ser descartado. Remova-o da lista de produtos importados.
*/
let importados = [
  "carregador portátil",
  "cabo HDMI",
  "leitor biométrico",
  "controle sem fio",
  "webcam 4K"
];

let descartados = importados.shift();
console.log(`Lista de importados atualizada: ${importados}`);
console.log(`Item descartado: ${descartados}`);