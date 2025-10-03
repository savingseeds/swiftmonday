import { useEffect, useState } from 'react'
import { transakService } from '../services/transakService'

interface TransakPaymentProps {
  amount: number
  email: string
  orderId: string
  onSuccess: (orderData: any) => void
  onFailure: (error: any) => void
  onClose: () => void
}

function TransakPayment({ amount, email, orderId }: TransakPaymentProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize Transak widget
    const transak = transakService.initializeWidget({
      fiatAmount: amount,
      email: email,
      partnerOrderId: orderId,
      userData: {
        email: email
      }
    })

    // For the Transak SDK v4, events are handled differently
    // The widget will handle its own events
    setIsLoading(false)

    // Cleanup
    return () => {
      if (transak && transak.close) {
        transak.close()
      }
    }
  }, [amount, email, orderId])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        <p className="mt-4 text-gray-600">Loading payment widget...</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <p className="text-sm text-gray-600 mb-4">
        Complete your payment in the Transak widget that opened.
      </p>
      <p className="text-xs text-gray-500">
        If the widget didn't open, please check your popup blocker.
      </p>
    </div>
  )
}

export default TransakPayment