/* 13 – Relatório de férias: Primeira semana
Você precisa gerar um relatório com apenas a primeira semana de férias dos colaboradores listados, sem modificar a lista original.
*/

let diasFaltas = [
  "Carlos – Segunda",
  "Carlos – Terça",
  "Carlos – Quarta",
  "Carlos – Quinta",
  "Carlos – Sexta",
  "Carlos – Segunda (semana 2)",
  "Carlos – Terça (semana 2)",
  "Carlos – Quarta (semana 2)"
];

let clone = diasFaltas.map(item => item);
console.log(`Primeira semana de férias (índices 0 a 4): ${clone.slice(0, 5)}`);