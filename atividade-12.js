/*  12 – Tags para URL
Na construção dinâmica de URLs de busca, o array de palavras-chave precisa ser convertido em uma string separada por traços para funcionar corretamente.
*/
let palavrasChave = [
  "desenvolvimento",
  "frontend",
  "javascript",
  "css",
  "react"
];

console.log(`Palavras-chave de URL separadas por traço: ${palavrasChave.join('-')}`);