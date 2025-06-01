/* 22 – Alunos com média acima de 7
Você está gerando um relatório com os nomes dos alunos que atingiram média igual ou superior a 7 e podem ir direto para a recuperação final.
*/

let alunos = [
  { nome: "Carlos", media: 6.5 },
  { nome: "Fernanda", media: 7.2 },
  { nome: "Lucas", media: 8.1 },
  { nome: "Marina", media: 5.9 },
  { nome: "João", media: 7.0 },
  { nome: "Aline", media: 9.3 }
];

const aprovados = alunos.filter(aluno => aluno.media >= 7);

console.log("Alunos com média igual ou maior que 7:");
aprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.media}`);
});
