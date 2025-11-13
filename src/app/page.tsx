"use client";

import { useState } from "react";
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";
import { initialProducts } from "@/types/product";
import { Product, CartItem } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Sparkles } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    ShopVista
                  </h1>
                  <p className="text-muted-foreground mt-1 text-lg">
                    Premium Shopping Experience
                  </p>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="h-12 w-12 rounded-full hover:scale-110 transition-transform"
              >
                {darkMode ? (
                  <Sun className="h-6 w-6 text-amber-500" />
                ) : (
                  <Moon className="h-6 w-6 text-primary" />
                )}
              </Button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProductList
                products={initialProducts}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onAddToCart={handleAddToCart}
              />
            </div>
            
            <div className="lg:col-span-1">
              <ShoppingCart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}