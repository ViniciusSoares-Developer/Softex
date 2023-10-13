function media() {
  const quantNota = parseInt(prompt('Quantidade de notas para a média: '))
  if (!quantNota) {
    return alert('Invalido, insira um número')
  }
  const notas = []
  for (var i = 1; i <= quantNota; i++) {
    let nota = parseFloat(prompt(`Digite a ${i}° nota:`))
    if (!nota) {
      nota = 0
      alert('Valor invalido, definido como 0')
    }
    notas.push(nota)
  }
  if (notas.length) console.log(`Média das notas: ${(notas.reduce((media, valor) => media += valor)) / quantNota}`) 
  else console.log('Sem nota para calcular')
}
