import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our database
export interface User {
  id: string
  email: string
  created_at: string
  full_name?: string
  phone?: string
}

export interface TransferIntent {
  id: string
  user_id: string
  send_amount: number
  receive_amount: number
  exchange_rate: number
  fee: number
  recipient_name: string
  recipient_method: 'gcash' | 'bank'
  recipient_account: string
  status: 'pending' | 'completed' | 'failed'
  created_at: string
}

export interface Recipient {
  id: string
  user_id: string
  name: string
  method: 'gcash' | 'bank'
  account_number: string
  created_at: string
}