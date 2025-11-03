'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Menu, X, Trash2, Plus, Minus } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart-store'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { CartToast } from '@/components/ui/CartToast'

const navItems = [
    { name: 'BEDROOM', path: '/products?category=beds' },
    { name: 'LIVING ROOM', path: '/products?category=sofas' },
    { name: 'KITCHEN', path: '/products?category=kitchen' },
    { name: 'BATHROOM', path: '/products?category=storage' },
    { name: 'ALL PRODUCTS', path: '/products' },
]

export default function Header() {
    const { cartItems, totalQuantity, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [cartAnimation, setCartAnimation] = useState(false)
    const cartRef = useRef<HTMLDivElement>(null)

    // Close cart when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsCartOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Cart icon animation on item add
    useEffect(() => {
        const handleCartItemAdded = (e: Event) => {
            const customEvent = e as CustomEvent
            const { productName, productImage, productPrice } = customEvent.detail
            
            // Trigger animation
            setCartAnimation(true)
            setTimeout(() => setCartAnimation(false), 600)
            
            // Show toast
            toast.success(
                <CartToast
                    productName={productName}
                    productImage={productImage}
                    productPrice={productPrice}
                    onViewCart={() => {
                        window.location.href = '/cart'
                        toast.dismiss()
                    }}
                />,
                {
                    duration: 5000,
                }
            )
        }
        
        window.addEventListener('cartItemAdded', handleCartItemAdded as EventListener)
        return () => window.removeEventListener('cartItemAdded', handleCartItemAdded as EventListener)
    }, [])

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <header className="bg-secondary fixed top-0 left-0 right-0 w-full z-50 shadow-md">
            <div className="container-custom py-4 flex items-center justify-between">
                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Logo - Responsive sizing for very small screens */}
                <Link
                    href="/"
                    className="flex-1 md:flex-none text-center md:text-left"
                >
                    <h1 className="text-[1.2rem] xs:text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] tracking-[0.08em] uppercase text-background">
                        <span className="text-white font-bold">NOVA</span>
                        <span className="text-border">FURNISHINGS</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="text-white font-medium text-sm uppercase tracking-wide hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Cart Icon */}
                <div className="relative" ref={cartRef}>
                    <Button
                        variant="secondary"
                        size="sm"
                        className={`text-white relative transition-transform ${
                            cartAnimation ? 'animate-bounce' : ''
                        }`}
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <ShoppingCart className="h-5 w-5" />
                        {totalQuantity > 0 && (
                            <span className={`absolute -top-2 -right-2 bg-accent text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center transition-transform ${
                                cartAnimation ? 'scale-125' : 'scale-100'
                            }`}>
                                {totalQuantity}
                            </span>
                        )}
                    </Button>

                    {/* Cart Dropdown */}
                    {isCartOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white border border-border rounded-xl shadow-xl z-50 animate-scale-in">
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-3">Your Cart</h3>

                                {cartItems.length === 0 ? (
                                    <p className="text-text-light text-sm py-4 text-center">Your cart is empty</p>
                                ) : (
                                    <>
                                        <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex items-center gap-3 pb-3 border-b border-border last:border-b-0">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.title}
                                                        width={48}
                                                        height={48}
                                                        className="rounded-lg object-cover flex-shrink-0"
                                                    />

                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-text truncate">{item.title}</p>
                                                        <p className="text-xs text-text-light">${item.price} × {item.quantity}</p>
                                                    </div>

                                                    <p className="text-sm font-semibold text-text whitespace-nowrap">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>

                                                    <div className="flex items-center gap-1">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 w-6 p-0"
                                                            onClick={() => decreaseQuantity(item.id)}
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 w-6 p-0"
                                                            onClick={() => increaseQuantity(item.id)}
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 w-6 p-0 text-red-500 hover:text-red-600"
                                                            onClick={() => removeFromCart(item.id)}
                                                        >
                                                            <Trash2 className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-border">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-semibold text-text">Total:</span>
                                                <span className="text-lg font-bold text-primary">${totalPrice.toFixed(2)}</span>
                                            </div>
                                            
                                            {/* Two-button layout */}
                                            <div className="flex gap-2">
                                                <Link href="/cart" className="flex-1">
                                                    <Button 
                                                        variant="outline" 
                                                        className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                                                        onClick={() => setIsCartOpen(false)}
                                                    >
                                                        View Cart
                                                    </Button>
                                                </Link>
                                                <Link href="/checkout" className="flex-1">
                                                    <Button 
                                                        className="w-full bg-accent hover:bg-accent-light"
                                                        onClick={() => setIsCartOpen(false)}
                                                    >
                                                        Checkout
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                    <div className="bg-white w-4/5 max-w-sm h-full p-6 animate-slide-up">
                        <div className="flex justify-between items-center mb-8">
                            {/* Text-based Logo - Better contrast for mobile menu */}
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <h1 className="text-[1.2rem] xs:text-[1.3rem] sm:text-[1.5rem] tracking-[0.08em] uppercase">
                                    <span className="text-secondary font-bold">NOVA</span>
                                    <span className="text-primary">FURNISHINGS</span>
                                </h1>
                            </Link>

                            {/* Close Button */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-secondary hover:text-primary"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <nav className="space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className="block py-3 text-lg font-medium text-text hover:text-accent transition-colors border-b border-border"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}