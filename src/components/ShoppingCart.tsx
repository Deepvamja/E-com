"use client";

import { CartItem } from "@/types/product";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface ShoppingCartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  onUpdateQuantity?: (productId: number, quantity: number) => void;
}

export default function ShoppingCart({ 
  cartItems, 
  onRemoveFromCart,
  onUpdateQuantity 
}: ShoppingCartProps) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    
    toast.success(`Checkout successful! Total: ₹${totalPrice.toLocaleString('en-IN')}`);
    // Clear cart after checkout
    cartItems.forEach(item => onRemoveFromCart(item.id));
  };

  return (
    <Card className="sticky top-6 shadow-lg">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Cart ({itemCount})
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-3">🛒</div>
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="p-3 rounded-lg border bg-card"
              >
                <div className="flex gap-3">
                  {item.image && (
                    <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="h-8 w-8 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-muted rounded px-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity?.(item.id, Math.max(1, item.quantity - 1))}
                          className="h-6 w-6"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                          className="h-6 w-6"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="font-semibold text-primary">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {cartItems.length > 0 && (
        <CardFooter className="flex-col items-stretch gap-3">
          <Separator />
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">
              ₹{totalPrice.toLocaleString('en-IN')}
            </span>
          </div>
          
          <Button 
            size="lg" 
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Proceed to Checkout
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}