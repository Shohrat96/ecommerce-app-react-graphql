export function capitalizeFirstLetter(string) {
  return string.charAt(0)?.toUpperCase() + string.slice(1);
}
export function convertPrice(prices, activeCurLabel) {
  const price = prices.find(item => item.currency.label === activeCurLabel);
  return {
    currencySymbol: price.currency.symbol,
    currencyLabel: price.currency.label,
    amount: price.amount,
  }
}