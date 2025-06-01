/* 25 – Últimas atualizações do sistema
O painel de notificações mostra as atualizações do sistema na ordem em que foram recebidas. Para exibir as mais recentes primeiro, você precisa inverter a lista atual.
*/

let atualizacoes = [
  "Backup diário concluído",
  "Servidor reiniciado",
  "Nova versão implantada",
  "Logs exportados",
  "Firewall atualizado",
  "Monitoramento ativado",
  "Banco de dados otimizado",
  "Script de segurança executado"
];

let atualizacoesMaisRecentes = atualizacoes.reverse();

console.log(`Atualizações mais recentes: ${atualizacoesMaisRecentes}`);
