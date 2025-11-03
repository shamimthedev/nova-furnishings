'use client'

import { useCartStore } from '@/lib/store/cart-store'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartContent() {
  const { 
    cartItems, 
    totalQuantity, 
    totalPrice, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    clearCart 
  } = useCartStore()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-custom py-16 text-center">
          <ShoppingBag className="h-24 w-24 text-border mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h1>
          <p className="text-text-light mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. Start shopping to find amazing furniture for your home.
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Shopping Cart</h1>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="text-red-500 border-red-200 hover:bg-red-50"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="card p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-text-light text-sm">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-text-light">Quantity:</span>
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-3 py-1 hover:bg-background-card transition-colors rounded-lg"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1 min-w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="px-3 py-1 hover:bg-background-card transition-colors rounded-lg"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Items ({totalQuantity})</span>
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
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full mb-3" size="lg">
                <Link href="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link href="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}