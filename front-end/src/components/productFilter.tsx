// src/components/ProductFilter.tsx
import React, { useState } from 'react';

interface ProductFilterProps {
  onFilterChange: (filters: { priceRange?: number[]; category?: string }) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [category, setCategory] = useState<string>('');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newPriceRange = [...priceRange];
    if (name === 'min') newPriceRange[0] = parseInt(value);
    if (name === 'max') newPriceRange[1] = parseInt(value);
    setPriceRange(newPriceRange);
    onFilterChange({ priceRange: newPriceRange });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    onFilterChange({ category: e.target.value });
  };

  return (
    <div className="product-filter">
      <h3>Filter Products</h3>
      <div>
        <label>Price Range:</label>
        <input type="number" name="min" value={priceRange[0]} onChange={handlePriceChange} placeholder="Min" />
        <input type="number" name="max" value={priceRange[1]} onChange={handlePriceChange} placeholder="Max" />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          {/* Thêm các danh mục khác nếu có */}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
