'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart-store'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'

type PaymentMethod = 'cod' | 'bkash' | 'nagad' | null

export default function CheckoutContent() {
  const { cartItems, totalQuantity, totalPrice, clearCart } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    notes: ''
  })

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">No Items in Cart</h1>
          <p className="text-text-light mb-8">Please add some items to your cart before checkout.</p>
          <Button asChild>
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setOrderComplete(true)
      clearCart()
    }, 2000)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-custom py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-4">Order Confirmed!</h1>
            <p className="text-text-light mb-6">
              Thank you for your purchase. Your order has been received and is being processed.
              You will receive a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/cart" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Shipping Information */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">
                      District *
                    </label>
                    <select
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select District</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="khulna">Khulna</option>
                      <option value="barishal">Barishal</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="rangpur">Rangpur</option>
                      <option value="mymensingh">Mymensingh</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Any special instructions for delivery..."
                  />
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('cod')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    paymentMethod === 'cod' 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      paymentMethod === 'cod' ? 'border-accent bg-accent' : 'border-border'
                    }`} />
                    <div>
                      <div className="font-medium">Cash on Delivery</div>
                      <div className="text-sm text-text-light">Pay when you receive your order</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('bkash')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    paymentMethod === 'bkash' 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      paymentMethod === 'bkash' ? 'border-accent bg-accent' : 'border-border'
                    }`} />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        bK
                      </div>
                      <div>
                        <div className="font-medium">bKash</div>
                        <div className="text-sm text-text-light">015XXXXXXXX</div>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('nagad')}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    paymentMethod === 'nagad' 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      paymentMethod === 'nagad' ? 'border-accent bg-accent' : 'border-border'
                    }`} />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        N
                      </div>
                      <div>
                        <div className="font-medium">Nagad</div>
                        <div className="text-sm text-text-light">013XXXXXXXX</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {paymentMethod && (
                <div className="mt-4 p-4 bg-background-card rounded-lg">
                  <h3 className="font-medium mb-2">Payment Instructions:</h3>
                  {paymentMethod === 'cod' && (
                    <p className="text-sm text-text-light">
                      Please keep the exact amount ready for our delivery executive. 
                      We accept cash only for COD orders.
                    </p>
                  )}
                  {paymentMethod === 'bkash' && (
                    <div className="text-sm text-text-light space-y-1">
                      <p>1. Go to bKash menu</p>
                      <p>2. Choose &quot;Send Money&quot;</p>
                      <p>3. Enter number: 015XXXXXXXX</p>
                      <p>4. Enter amount: ${totalPrice.toFixed(2)}</p>
                      <p>5. Enter reference: Order#{Date.now()}</p>
                    </div>
                  )}
                  {paymentMethod === 'nagad' && (
                    <div className="text-sm text-text-light space-y-1">
                      <p>1. Go to Nagad menu</p>
                      <p>2. Choose &quot;Send Money&quot;</p>
                      <p>3. Enter number: 013XXXXXXXX</p>
                      <p>4. Enter amount: ${totalPrice.toFixed(2)}</p>
                      <p>5. Enter reference: Order#{Date.now()}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-primary truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-text-light">
                        Qty: {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <div className="text-sm font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-border pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Complete Order Button */}
              <Button
                onClick={handleSubmit}
                disabled={!paymentMethod || isProcessing}
                className="w-full mt-6"
                size="lg"
              >
                {isProcessing ? 'Processing...' : `Complete Order - $${totalPrice.toFixed(2)}`}
              </Button>

              <p className="text-xs text-text-light text-center mt-4">
                By completing your purchase, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}