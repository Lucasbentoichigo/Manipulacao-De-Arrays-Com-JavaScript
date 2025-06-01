/* 18 – Catálogo unificado
Um cliente corporativo pediu que fosse feito um catálogo unificado com os produtos de duas categorias: hardware e periféricos. Gere uma nova lista com todos os itens.
*/

let hardware = [
  "processador i7",
  "placa-mãe",
  "memória RAM 16GB",
  "SSD 1TB"
];

let perifericos = [
  "teclado gamer",
  "mouse ótico",
  "webcam HD",
  "fone com microfone"
];

console.log(`Catálogo Unificado: ${hardware.concat(perifericos).join(', ')}`);