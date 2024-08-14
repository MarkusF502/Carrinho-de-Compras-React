const FormatCurrency = (value, currency) => {
  return value.toLocaleString('pt-BR', {
    style:  'currency',
    currency
  })
}

export default FormatCurrency