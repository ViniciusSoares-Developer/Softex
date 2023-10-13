const visor = document.getElementById('visor')
const historicoBody = document.getElementById('historico')

function inserir(value) {
  if (visor.innerHTML.length < 13) visor.innerHTML += value
}
function inserircalc(operacao) {
  if (visor.innerHTML.length > 0 && visor.innerHTML.length < 13) visor.innerHTML += operacao
}

function limpar() {
  visor.innerHTML = ''
}

function retirar() {
  visor.innerHTML = visor.innerHTML.slice(0, -1)
}

function limparHistorico() {
  historicoBody.innerHTML = ''
}

const resto = (calculo) => {
  return calculo.includes('/') == 1 ? `
    <br/>
    <label>
      Resto: ${eval(calculo.replace(/\//g, '%')).toFixed(2)}
    </label>
  ` : ''
}

function calcular() {
  let calculo = converterOperacoes(visor.innerHTML)
  if (!calculo) return
  if (/[+\-*/]/.test(calculo.charAt(calculo.length - 1))) calculo += '1'
  let result = eval(calculo)
  if (result == Infinity) result = '9999999999999'
  historicoBody.innerHTML += `
    <tr>
      <td>
        <label>
          ${calculo.replace(/\*/g, 'x').replace(/\//g, '÷')} = ${result}
        </label>
        ${resto(calculo)}
      </td>
    </tr>
  `
  visor.innerHTML = result % 1 !== 0 ? parseFloat(result).toFixed(2) : result
}

function porcentagem() {
  if (visor.innerHTML.length > 0) {
    const numeros = converterOperacoes(visor.innerHTML).replace().split(/[+\-*/]/)
    const porcentagem = numeros.slice(-1)[0] / 100
    visor.innerHTML = visor.innerHTML.slice(0, -1) + porcentagem
  }
}

function converterOperacoes(str) {
  return str.toLowerCase().replace(/x/g, '*').replace(/÷/g, '/')
}

function verHistorico() {
  const button = document.getElementById('visibleHistory')
  const historicoContainer = document.getElementsByClassName('historico-body')[0]
  const expand = button.innerHTML === '&gt;'
  button.innerHTML = expand ? '&lt;' : '&gt;'
  historicoContainer.style.transform = expand ? 'translate(0, 0)' : 'translate(-100%, 0)'
}

function ajustarFontVisor() {
  const tamanhoFonte = (visor.offsetWidth / 15) * 2
  visor.style.fontSize = `${tamanhoFonte}px`
}
ajustarFontVisor()
window.addEventListener("resize", ajustarFontVisor)

window.addEventListener("keydown", (event) => {
  if (/[0-9\+\-\*\/]/.test(event.key) && !event.key.toLocaleLowerCase().startsWith('f')) inserir(event.key)
  else if (event.key === '%') porcentagem()
  else if(event.key.toLocaleLowerCase === 'c') limpar()
  else if (event.code === 'Backspace') retirar()
  else if (event.key.toLocaleLowerCase() === "h") limparHistorico()
  else if (event.key === 'Enter') calcular()
})