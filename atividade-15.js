/* 15 – Remoção de itens inativos no menu
Dois itens do menu de navegação estão obsoletos e precisam ser removidos da posição 2 e 3, pois o sistema não oferece mais esses serviços.
*/

let menuNavegacao = [
  "Início",
  "Serviços",
  "Portfólio",
  "Blog",
  "Contato",
  "Login",
  "Área do cliente"
];

let itensRemovidos = menuNavegacao.splice(2, 2);

console.log(`Depois do splice: ${menuNavegacao}`);
console.log(`Elementos removidos: ${itensRemovidos}`);
