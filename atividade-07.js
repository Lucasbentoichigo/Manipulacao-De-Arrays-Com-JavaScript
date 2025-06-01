/*  7 – Prioridade na fila
Uma emergência surgiu e dois clientes VIP precisam ser atendidos imediatamente. Adicione-os ao início da fila.
*/

let filaAtendimento = [
  "cliente 003",
  "cliente 004",
  "cliente 005",
  "cliente 006",
  "cliente 007"
];

filaAtendimento.unshift("Cliente Vip1");
filaAtendimento.unshift("Cliente Vip2");

console.log("Fila de atendimento", filaAtendimento);