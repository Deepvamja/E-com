export interface Product {
  id: number;
  name: string;
  category: 'Electronics' | 'Books' | 'Clothing';
  price: number;
  description?: string;
  rating?: number;
  image?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const initialProducts: Product[] = [
  { 
    id: 1, 
    name: 'Laptop', 
    category: 'Electronics', 
    price: 95999, 
    description: 'High-performance laptop with 16GB RAM',
    rating: 4.5,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7834ac2-2b13-44f7-90b1-5d60538e8a19/generated_images/modern-high-performance-laptop-with-slee-ea08aab8-20251113065336.jpg'
  },
  { 
    id: 2, 
    name: 'T-Shirt', 
    category: 'Clothing', 
    price: 1999, 
    description: 'Premium cotton casual t-shirt',
    rating: 4.2,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7834ac2-2b13-44f7-90b1-5d60538e8a19/generated_images/premium-cotton-casual-t-shirt-in-solid-c-4a475e38-20251113065337.jpg'
  },
  { 
    id: 3, 
    name: 'The Great Gatsby', 
    category: 'Books', 
    price: 1199, 
    description: 'Classic American novel by F. Scott Fitzgerald',
    rating: 4.8,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7834ac2-2b13-44f7-90b1-5d60538e8a19/generated_images/the-great-gatsby-book-cover-by-f-scott-f-5aa347dc-20251113065337.jpg'
  },
  { 
    id: 4, 
    name: 'Smartphone', 
    category: 'Electronics', 
    price: 63999, 
    description: '5G enabled smartphone with excellent camera',
    rating: 4.6,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7834ac2-2b13-44f7-90b1-5d60538e8a19/generated_images/modern-5g-smartphone-with-excellent-came-e02f31cb-20251113065336.jpg'
  },
  { 
    id: 5, 
    name: 'Jeans', 
    category: 'Clothing', 
    price: 3999, 
    description: 'Slim fit denim jeans',
    rating: 4.3,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7834ac2-2b13-44f7-90b1-5d60538e8a19/generated_images/slim-fit-denim-jeans-in-classic-blue-was-a76cf3b6-20251113065337.jpg'
  },
  { 
    id: 6, 
    name: 'Sapiens', 
    category: 'Books', 
    price: 1599, 
    description: 'A Brief History of Humankind by Yuval Noah Harari',
    rating: 4.7,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b7834ac2-2b13-44f7-90b1-5d60538e8a19/generated_images/sapiens-book-cover-by-yuval-noah-harari--4d94298c-20251113065337.jpg'
  },
];