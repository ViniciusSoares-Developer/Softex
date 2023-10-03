
document.getElementById('cadastrar').addEventListener('click', () => {
  const pessoa = {
    nome: document.getElementById('nome').value,
    idade: parseInt(document.getElementById('idade').value),
    salario: parseFloat(document.getElementById('salario').value),
    diploma: document.getElementById('diploma').checked
  }

  if (!pessoa.nome || !pessoa.idade || !pessoa.salario){
    alert('Por favor preencha todos os campos para cadastrar')
    return
  }

  const tableBody = document.getElementById('tableBody')
  tableBody.innerHTML += `
    <tr>
      <td>${pessoa.nome}</td>
      <td>${pessoa.idade}</td>
      <td>R$ ${pessoa.salario.toFixed(2).toString().replace('.', ',')}</td>
      <td class="text-center">${pessoa.diploma ? 'Tem' : 'Não tem' }</td>
    </tr>
  `
})
