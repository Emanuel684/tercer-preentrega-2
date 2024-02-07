class Prestamo {
  constructor(monto, plazo, interes) {
    this.monto = monto;
    this.plazo = plazo;
    this.interes = interes;
  }
}

const calcularcuota = () => {
  console.log('this.monto', this.monto)
  tasa_mensual = this.interes / 100 / 12
  let couta = (this.monto / this.plazo) + tasa_mensual * (this.monto - (this.monto * (1 - 1 / this.plazo)) / tasa_mensual);
  return couta;
};
