import { useState } from 'react'
import { supabase } from '../lib/supabase'
import Button from './Button'

function TestSupabase() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    setStatus('Testing connection...')
    
    try {
      // Test 1: Basic connection
      const { data, error } = await supabase
        .from('users')
        .select('count')
        .limit(1)
      
      if (error) {
        setStatus(`Connection Error: ${error.message}`)
        console.error('Supabase error:', error)
        return
      }
      
      setStatus('✅ Connection successful!')
      console.log('Connection test passed:', data)
      
    } catch (err) {
      setStatus(`Error: ${err}`)
      console.error('Connection failed:', err)
    } finally {
      setLoading(false)
    }
  }

  const testAuth = async () => {
    setLoading(true)
    setStatus('Testing authentication...')
    
    try {
      const testEmail = `test${Date.now()}@example.com`
      const testPassword = 'TestPassword123!'
      
      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
      })
      
      if (error) {
        setStatus(`Auth Error: ${error.message}`)
        console.error('Auth error:', error)
        return
      }
      
      setStatus(`✅ Auth working! Test user created: ${data.user?.email}`)
      console.log('Auth test passed:', data)
      
      // Clean up - sign out
      await supabase.auth.signOut()
      
    } catch (err) {
      setStatus(`Error: ${err}`)
      console.error('Auth failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Supabase Connection Test</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600 mb-2">Supabase URL:</p>
          <p className="font-mono text-xs break-all">{import.meta.env.VITE_SUPABASE_URL}</p>
        </div>
        
        <div className="p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600 mb-2">Status:</p>
          <p className="font-semibold">{status || 'Not tested yet'}</p>
        </div>
        
        <div className="flex gap-4">
          <Button 
            text={loading ? "Testing..." : "Test Connection"} 
            onClick={testConnection}
            disabled={loading}
          />
          <Button 
            text={loading ? "Testing..." : "Test Auth"} 
            onClick={testAuth}
            variant="secondary"
            disabled={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default TestSupabase