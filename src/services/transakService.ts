const Transak = require('@transak/transak-sdk')

export const transakService = {
  // Initialize Transak widget
  initializeWidget(config: any) {
    const settings = {
      apiKey: import.meta.env.VITE_TRANSAK_API_KEY,
      environment: import.meta.env.VITE_TRANSAK_ENV || 'STAGING',
      fiatCurrency: 'USD',
      cryptoCurrencyCode: 'USDT',
      network: 'solana',
      hideMenu: true,
      walletAddress: 'YOUR_WALLET_ADDRESS',
      fiatAmount: 100,
      ...config
    }

    const transak = new (Transak as any)(settings)

    transak.init()

    // The Transak SDK events are accessed differently
    // Events are attached via the instance
    
    return transak
  }
}

