export function CurrencyFormatter(valor: number) {
  return Math.abs((valor * 100) / 100).toFixed(2)
}
