import { useState } from 'react'
import Button from './Button'
import { userService } from '../services/userService'
import { EXCHANGE_RATES } from '../services/exchangeRate'

type Step = 'amount' | 'recipient' | 'account' | 'review' | 'payment'

function SendMoneySteps() {
  const [currentStep, setCurrentStep] = useState<Step>('amount')
  const [formData, setFormData] = useState({
    sendAmount: '',
    receiveAmount: '',
    recipientName: '',
    recipientMethod: 'gcash',
    recipientAccount: '',
    senderEmail: '',
    senderPassword: '',
    hasAccount: false,
    marketingOptIn: true
  })

  const exchangeRate = EXCHANGE_RATES.USD_TO_PHP
  const fee = EXCHANGE_RATES.FEE

  const steps = [
    { id: 'amount', name: 'Amount' },
    { id: 'recipient', name: 'Recipient' },
    { id: 'account', name: 'Your Info' },
    { id: 'review', name: 'Review' },
    { id: 'payment', name: 'Payment' }
  ]

  const currentStepIndex = steps.findIndex(s => s.id === currentStep)

  const nextStep = () => {
    const stepOrder: Step[] = ['amount', 'recipient', 'account', 'review', 'payment']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const stepOrder: Step[] = ['amount', 'recipient', 'account', 'review', 'payment']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const calculateReceiveAmount = (sendAmount: string) => {
    if (sendAmount && !isNaN(Number(sendAmount))) {
      const amount = Number(sendAmount)
      const afterFee = Math.max(0, amount - fee)
      const phpAmount = afterFee * exchangeRate
      return phpAmount.toFixed(2)
    }
    return '0.00'
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1 flex flex-col items-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div 
                  className={`absolute top-5 left-1/2 w-full h-0.5 ${
                    index < currentStepIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  style={{ transform: 'translateX(50%)' }}
                />
              )}
              
              {/* Step Circle */}
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold z-10
                ${index <= currentStepIndex 
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-600'}
              `}>
                {index <= currentStepIndex && index < currentStepIndex ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              
              {/* Step Name */}
              <span className={`mt-2 text-sm font-medium ${
                index <= currentStepIndex ? 'text-orange-600' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl shadow-md p-8">
        {/* Amount Step */}
        {currentStep === 'amount' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">How much do you want to send?</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount in USD
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500">$</span>
                <input
                  type="number"
                  value={formData.sendAmount}
                  onChange={(e) => {
                    const amount = e.target.value
                    setFormData({
                      ...formData, 
                      sendAmount: amount,
                      receiveAmount: calculateReceiveAmount(amount)
                    })
                  }}
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              {formData.sendAmount && (
                <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex justify-between text-sm">
                    <span>Transfer fee:</span>
                    <span className="font-medium">${fee}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>They receive:</span>
                    <span className="font-bold text-orange-600">₱{formData.receiveAmount}</span>
                  </div>
                </div>
              )}
            </div>
            <Button 
              text="Continue" 
              onClick={nextStep}
              variant="primary"
            />
          </div>
        )}

        {/* Recipient Step */}
        {currentStep === 'recipient' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Who are you sending to?</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Name
              </label>
              <input
                type="text"
                value={formData.recipientName}
                onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                placeholder="Juan Dela Cruz"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Method
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData({...formData, recipientMethod: 'gcash'})}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.recipientMethod === 'gcash' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-2xl mb-2">📱</div>
                  <div className="font-semibold">GCash</div>
                  <div className="text-sm text-gray-600">Instant delivery</div>
                </button>
                <button
                  onClick={() => setFormData({...formData, recipientMethod: 'bank'})}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.recipientMethod === 'bank' 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-2xl mb-2">🏦</div>
                  <div className="font-semibold">Bank Account</div>
                  <div className="text-sm text-gray-600">1-2 business days</div>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formData.recipientMethod === 'gcash' ? 'GCash Number' : 'Account Number'}
              </label>
              <input
                type="text"
                value={formData.recipientAccount}
                onChange={(e) => setFormData({...formData, recipientAccount: e.target.value})}
                placeholder={formData.recipientMethod === 'gcash' ? '09XX XXX XXXX' : '1234567890'}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="flex gap-4">
              <Button text="Back" onClick={prevStep} variant="secondary" />
              <Button text="Continue" onClick={nextStep} />
            </div>
          </div>
        )}

        {/* Account/Email Step */}
        {currentStep === 'account' && (
          <div>
            <h3 className="text-2xl font-bold mb-2">Almost there!</h3>
            <p className="text-gray-600 mb-6">
              Create your account to complete this transfer and track your money
            </p>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.senderEmail}
                onChange={(e) => setFormData({...formData, senderEmail: e.target.value})}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                We'll send transfer updates to this email
              </p>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Create Password
              </label>
              <input
                type="password"
                value={formData.senderPassword}
                onChange={(e) => setFormData({...formData, senderPassword: e.target.value})}
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Minimum 8 characters
              </p>
            </div>

            {/* Benefits of creating account */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Why create an account?</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Track your transfer in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Save recipient details for next time</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Get exclusive promotions and lower fees</span>
                </li>
              </ul>
            </div>

            {/* Marketing Opt-in */}
            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.marketingOptIn}
                  onChange={(e) => setFormData({...formData, marketingOptIn: e.target.checked})}
                  className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm text-gray-600">
                  Send me exclusive offers and tips about sending money (you can unsubscribe anytime)
                </span>
              </label>
            </div>

            {/* Already have account link */}
            <div className="text-center mb-6">
              <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                Already have an account? Sign in instead
              </button>
            </div>

            <div className="flex gap-4">
              <Button text="Back" onClick={prevStep} variant="secondary" />
              <Button text="Create Account & Continue" onClick={nextStep} />
            </div>
          </div>
        )}

        {/* Review Step */}
        {currentStep === 'review' && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Review Your Transfer</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600">You're sending</div>
                  <div className="text-2xl font-bold">${formData.sendAmount} USD</div>
                  <div className="text-sm text-gray-500 mt-1">Total charge (incl. ${fee} fee)</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Recipient gets</div>
                  <div className="text-2xl font-bold text-orange-600">₱{formData.receiveAmount} PHP</div>
                  <div className="text-sm text-gray-500 mt-1">Should arrive in minutes</div>
                </div>
              </div>
              
              <div className="border-t mt-6 pt-6">
                <div className="text-sm text-gray-600 mb-1">Sending to</div>
                <div className="font-semibold">{formData.recipientName}</div>
                <div className="text-sm text-gray-600">
                  {formData.recipientMethod === 'gcash' ? 'GCash' : 'Bank Account'}: {formData.recipientAccount}
                </div>
              </div>

              <div className="border-t mt-6 pt-6">
                <div className="text-sm text-gray-600 mb-1">Your email</div>
                <div className="font-medium">{formData.senderEmail}</div>
              </div>
            </div>

            {/* Terms */}
            <div className="text-sm text-gray-600 mb-6">
              By clicking continue, you agree to our{' '}
              <a href="#" className="text-orange-600 hover:text-orange-700">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-orange-600 hover:text-orange-700">Privacy Policy</a>
            </div>

            <div className="flex gap-4">
              <Button text="Back" onClick={prevStep} variant="secondary" />
              <Button text="Proceed to Payment" onClick={nextStep} />
            </div>
          </div>
        )}

        {/* Payment Step */}
        {currentStep === 'payment' && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready for Payment</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This is where the Transak widget would appear. For now, we're capturing user intent and email.
            </p>
            
            {/* Temporary Success Message */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 max-w-md mx-auto">
              <div className="text-green-800">
                <strong>Success!</strong> We've captured your transfer details and created your account.
              </div>
              <div className="text-sm text-green-700 mt-2">
                Email: {formData.senderEmail}
              </div>
            </div>

            <Button 
              text="Complete Demo" 
              onClick={async () => {
                try {
                  // Show loading state
                  alert('Creating your account...')
                  
                  // Create user
                  const { user, error: userError } = await userService.createUser(
                    formData.senderEmail,
                    formData.senderPassword
                  )
                  
                  if (userError) {
                    alert(`Error creating account: ${userError}`)
                    return
                  }
                  
                  if (!user) {
                    alert('Failed to create user')
                    return
                  }
                  
                  // Create transfer intent
                  const { intent, error: intentError } = await userService.createTransferIntent(
                    user.id,
                    {
                      sendAmount: Number(formData.sendAmount),
                      receiveAmount: Number(formData.receiveAmount),
                      exchangeRate: exchangeRate,
                      fee: fee,
                      recipientName: formData.recipientName,
                      recipientMethod: formData.recipientMethod as 'gcash' | 'bank',
                      recipientAccount: formData.recipientAccount
                    }
                  )
                  
                  if (intentError) {
                    alert(`Error saving transfer: ${intentError}`)
                    return
                  }
                  
                  alert(`
                    Success! Account created and transfer saved!
                    
                    User ID: ${user.id}
                    Transfer ID: ${intent?.id}
                    
                    Check your Supabase dashboard to see the data!
                  `)
                } catch (error) {
                  console.error('Error:', error)
                  alert('Something went wrong. Please try again.')
                }
              }} 
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SendMoneySteps