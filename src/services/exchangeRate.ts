// Exchange rate configuration
export const EXCHANGE_RATES = {
  USD_TO_PHP: 57.18, // Updated rate - you can change this
  FEE: 2.99
}

// In a real app, this would fetch from an API
export async function getCurrentRate(): Promise<number> {
  // Simulate API call
  return EXCHANGE_RATES.USD_TO_PHP
}

export function calculateReceiveAmount(sendAmount: number): {
  receiveAmount: number
  fee: number
  total: number
  rate: number
} {
  const fee = EXCHANGE_RATES.FEE
  const amountAfterFee = Math.max(0, sendAmount - fee)
  const receiveAmount = amountAfterFee * EXCHANGE_RATES.USD_TO_PHP
  
  return {
    receiveAmount,
    fee,
    total: sendAmount,
    rate: EXCHANGE_RATES.USD_TO_PHP
  }
}