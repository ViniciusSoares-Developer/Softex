class Banco {
  constructor(conta, saldo, tipo, agencia) {
    this.conta = conta
    this.saldo = saldo
    this.tipo = tipo
    this.agencia = agencia
  }

  buscarSaldo() {
    return this.saldo
  }
  deposito(value) {
    this.saldo += value
  }
  saque(value) {
    this.saldo -= value
  }
  numeroConta() {
    return this.conta
  }
}

const conta01 = new Banco('0102', 1000000, 'de pobre', 'Agiota')
console.log(conta01.buscarSaldo())
conta01.deposito(2)
console.log(conta01.buscarSaldo())
conta01.saque(600000)
console.log(conta01.buscarSaldo())
console.log(conta01.numeroConta())