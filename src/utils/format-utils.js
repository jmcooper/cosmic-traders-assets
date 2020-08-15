const toCurrencyFormat = (value) => {
  return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}

export { toCurrencyFormat }