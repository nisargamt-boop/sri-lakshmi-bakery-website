import { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('cakes');
  const defaultFallbackImage = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=80';

  const menuItems = {
    cakes: [
      { name: 'Chocolate Truffle Cake', price: '₹600', description: 'Rich chocolate layers', icon: '🍫', image: 'https://images.unsplash.com/photo-1624353614322-8bed7cfc9a01?w=800&q=80', alt: 'Rich chocolate truffle cake with chocolate ganache' },
      { name: 'Vanilla Cream Cake', price: '₹500', description: 'Classic vanilla perfection', icon: '🎂', image: 'https://images.unsplash.com/photo-1578987992253-2c4af01c1d06?w=800&q=80', alt: 'Classic vanilla cream cake' },
      { name: 'Red Velvet Cake', price: '₹750', description: 'Elegant with cream cheese frosting', icon: '💎', image: 'https://images.unsplash.com/photo-1630080534794-381b73042399?w=800&q=80', alt: 'Red velvet cake with cream cheese frosting' },
    ],
    pastries: [
      { name: 'Black Forest Pastry', price: '₹60', description: 'Chocolate with cherry', icon: '🍒', image: 'https://images.unsplash.com/photo-1587080353051-40251e1b5aa1?w=800&q=80', alt: 'Black forest pastry with chocolate and cherry' },
      { name: 'Butterscotch Pastry', price: '₹70', description: 'Sweet caramel delight', icon: '🧈', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80', alt: 'Butterscotch pastry with caramel' },
      { name: 'Pineapple Pastry', price: '₹60', description: 'Tropical fresh taste', icon: '🍍', image: 'https://images.unsplash.com/photo-1585238341710-4dd40654aae2?w=800&q=80', alt: 'Fresh pineapple pastry' },
    ],
    snacks: [
      { name: 'Veg Puff', price: '₹25', description: 'Crispy and flaky', icon: '🥒', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64a4b?w=800&q=80', alt: 'Crispy vegetable puff pastry' },
      { name: 'Samosa', price: '₹20', description: 'Golden triangles', icon: '🔺', image: 'https://images.unsplash.com/photo-1609501191725-6c0a10b1a4e6?w=800&q=80', alt: 'Golden baked samosa' },
      { name: 'Garlic Bread', price: '₹40', description: 'Warm and aromatic', icon: '🧄', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Warm garlic bread slices' },
    ],
    cookies: [
      { name: 'Butter Cookies', price: '₹150', description: 'Classic and crunchy', icon: '🍪', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80', alt: 'Classic butter cookies' },
      { name: 'Wheat Bread', price: '₹40', description: 'Whole grain goodness', icon: '🌾', image: 'https://images.unsplash.com/photo-1505521918861-8e88dc1ce338?w=800&q=80', alt: 'Healthy whole wheat bread loaf' },
      { name: 'Milk Bread', price: '₹35', description: 'Soft and sweet', icon: '🥛', image: 'https://images.unsplash.com/photo-1533134242443-742ae80e8f60?w=800&q=80', alt: 'Soft milk bread slices' },
    ],
  };

  const categories = [
    { key: 'cakes', label: 'Cakes' },
    { key: 'pastries', label: 'Pastries' },
    { key: 'snacks', label: 'Snacks' },
    { key: 'cookies', label: 'Cookies & Bread' },
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2>Our Menu</h2>
        <p className="menu-subtitle">Freshly baked items and delicious treats</p>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`tab ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-card">
              <div className="menu-image">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => {
                    if (e.target.src !== defaultFallbackImage) {
                      e.target.src = defaultFallbackImage;
                    }
                  }}
                />
              </div>
              <span className="item-icon">{item.icon}</span>
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
