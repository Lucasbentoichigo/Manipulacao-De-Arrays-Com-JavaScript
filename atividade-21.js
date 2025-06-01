/* 21 – Filtrar itens acima do estoque mínimo
No controle de estoque, você precisa listar apenas os produtos que têm mais de 10 unidades disponíveis para reabastecimento automático.
*/

let estoque = [
  { produto: "Teclado", quantidade: 5 },
  { produto: "Mouse", quantidade: 12 },
  { produto: "Monitor", quantidade: 3 },
  { produto: "Notebook", quantidade: 18 },
  { produto: "Impressora", quantidade: 9 },
  { produto: "Webcam", quantidade: 20 }
];

let estoqueFiltrado = estoque.filter(item => item.quantidade > 10);

console.log(`Estoque filtrado (Produtos com mais de 10 unidades disponíveis): ${estoqueFiltrado}`);
estoqueFiltrado.forEach(produto => {console.log(`${produto.produto}: ${produto.quantidade} unidades`);
});