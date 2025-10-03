import { supabase } from '../lib/supabase'
import type { User, TransferIntent } from '../lib/supabase'

export const userService = {
  // Create or get existing user (simplified - in production, use Supabase Auth)
  async createUser(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
    try {
      // First check if user already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select()
        .eq('email', email)
        .single()

      if (existingUser) {
        // User already exists, return the existing user
        console.log('User already exists, returning existing user')
        return { user: existingUser, error: null }
      }

      // Create new user if doesn't exist
      const { data, error } = await supabase
        .from('users')
        .insert([{ 
          email, 
          password_hash: password // In production, hash this!
        }])
        .select()
        .single()

      if (error) throw error

      return { user: data, error: null }
    } catch (error: any) {
      console.error('Error creating user:', error)
      return { user: null, error: error.message }
    }
  },

  // Check if user exists
  async checkUserExists(email: string): Promise<boolean> {
    const { data } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single()

    return !!data
  },

  // Create transfer intent
  async createTransferIntent(
    userId: string,
    transferData: {
      sendAmount: number
      receiveAmount: number
      exchangeRate: number
      fee: number
      recipientName: string
      recipientMethod: 'gcash' | 'bank'
      recipientAccount: string
    }
  ): Promise<{ intent: TransferIntent | null; error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('transfer_intents')
        .insert([{
          user_id: userId,
          send_amount: transferData.sendAmount,
          receive_amount: transferData.receiveAmount,
          exchange_rate: transferData.exchangeRate,
          fee: transferData.fee,
          recipient_name: transferData.recipientName,
          recipient_method: transferData.recipientMethod,
          recipient_account: transferData.recipientAccount
        }])
        .select()
        .single()

      if (error) throw error

      return { intent: data, error: null }
    } catch (error: any) {
      console.error('Error creating transfer intent:', error)
      return { intent: null, error: error.message }
    }
  }
}