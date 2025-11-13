"use client";

import { Product } from "@/types/product";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Star, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ProductListProps {
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onAddToCart: (product: Product) => void;
}

const categories = ['All', 'Electronics', 'Books', 'Clothing'];

const categoryIcons = {
  'Electronics': '📱',
  'Books': '📚',
  'Clothing': '👕',
  'All': '🛍️'
};

const categoryColors = {
  'Electronics': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'Books': 'bg-gradient-to-r from-amber-500 to-orange-500',
  'Clothing': 'bg-gradient-to-r from-pink-500 to-rose-500',
};

export default function ProductList({
  products,
  selectedCategory,
  onCategoryChange,
  onAddToCart,
}: ProductListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'rating'>('name');

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="w-full space-y-6">
      <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8 rounded-2xl text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-8 w-8 animate-pulse" />
          <h2 className="text-3xl font-bold">Discover Products</h2>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-white"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "secondary" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={`transition-all duration-300 hover:scale-105 shine-effect ${
                selectedCategory === category 
                  ? 'bg-white text-primary shadow-xl scale-105' 
                  : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
              }`}
              size="lg"
            >
              <span className="mr-2 text-xl">{categoryIcons[category as keyof typeof categoryIcons]}</span>
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between bg-card p-4 rounded-xl shadow-md border">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TrendingUp className="h-5 w-5" />
          <span className="font-medium">{filteredProducts.length} Products</span>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-muted-foreground">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card 
            key={product.id} 
            className="group flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shine-effect overflow-hidden border-2 hover:border-primary/50"
          >
            <div className={`h-2 ${categoryColors[product.category as keyof typeof categoryColors]}`} />
            
            {product.image && (
              <div className="relative w-full h-64 bg-muted overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <Badge 
                  variant="secondary" 
                  className="text-xs font-semibold"
                >
                  {product.category}
                </Badge>
              </div>
              {product.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              )}
              {product.rating && (
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating!) 
                          ? 'fill-amber-400 text-amber-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm font-medium ml-1">{product.rating}</span>
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-muted-foreground">Inclusive of all taxes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => onAddToCart(product)}
                className="w-full group-hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-muted/30 rounded-2xl">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}