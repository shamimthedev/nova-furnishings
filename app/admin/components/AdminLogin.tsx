'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store/admin-store'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, Lock, User } from 'lucide-react'

export default function AdminLogin() {
  const router = useRouter()
  const login = useAdminStore((state) => state.login)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password')
      setIsLoading(false)
      return
    }

    try {
      // Call the async login function
      const success = await login(username, password)
      if (success) {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Admin Login</h1>
          <p className="text-text-light mt-2">Access the admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-light hover:text-text"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-secondary hover:bg-secondary-light"
            size="lg"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>

          <div className="text-center text-sm text-text-light">
            <p>Demo Credentials:</p>
            <p>Username: <strong>admin</strong> | Password: <strong>admin123</strong></p>
            <p>Username: <strong>manager</strong> | Password: <strong>manager123</strong></p>
          </div>
        </form>
      </div>
    </div>
  )
}