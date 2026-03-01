// Lumière Fashion Products Database
// This is a simple JavaScript database containing all products with their details

const productsDatabase = {
  // Women's Collection
  women: [
    {
      id: 'casual-sneakers',
      name: 'Casual Sneakers',
      category: 'Women',
      price: 285,
      rating: 5,
      reviews: 167,
      description: 'Comfortable canvas sneakers perfect for everyday wear.',
      image: 'linear-gradient(135deg, #e8d5c4 0%, #f5e6d3 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Beige', 'Grey'],
      highlights: 'All-day comfort'
    },
    {
      id: 'evening-gown',
      name: 'Evening Gown',
      category: 'Women',
      price: 1895,
      rating: 5,
      reviews: 156,
      description: 'Floor-length silk gown in exquisite fabric. The epitome of evening elegance with sophisticated draping and timeless silhouette. Perfect for galas and formal celebrations.',
      image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Deep Plum', 'Navy'],
      highlights: 'Premium silk, floor-length'
    },
    {
      id: 'white-blouse',
      name: 'White Blouse',
      category: 'Women',
      price: 425,
      rating: 5,
      reviews: 142,
      description: 'Crisp white cotton blouse with classic tailoring.',
      image: 'linear-gradient(135deg, #f5f5f0 0%, #ffffff 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Ivory', 'Off-white'],
      highlights: 'Versatile essential'
    },
    {
      id: 'floral-dress',
      name: 'Floral Dress',
      category: 'Women',
      price: 595,
      rating: 5,
      reviews: 183,
      description: 'Beautiful floral print dress perfect for spring and summer occasions.',
      image: 'linear-gradient(135deg, #d4a574 0%, #c9936d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Floral Mix', 'Rose Garden', 'Botanical'],
      highlights: 'Seasonal favorite'
    },
    {
      id: 'cotton-dress',
      name: 'Cotton Dress',
      category: 'Women',
      price: 375,
      rating: 5,
      reviews: 128,
      description: 'Lightweight cotton dress for casual elegance.',
      image: 'linear-gradient(135deg, #e8c4b8 0%, #d4a89f 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Natural', 'Sage', 'Taupe'],
      highlights: 'Breathable comfort'
    },
    {
      id: 'silk-slip-dress',
      name: 'Silk Slip Dress',
      category: 'Women',
      price: 925,
      rating: 5,
      reviews: 194,
      description: 'Luxurious silk slip dress with a minimalist design.',
      image: 'linear-gradient(135deg, #2a1a1a 0%, #1a0a0a 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Champagne', 'Charcoal'],
      highlights: 'Pure silk elegance'
    },
    {
      id: 'pencil-skirt',
      name: 'Pencil Skirt',
      category: 'Women',
      price: 385,
      rating: 5,
      reviews: 175,
      description: 'Classic pencil skirt in versatile colors.',
      image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Professional style'
    },
    {
      id: 'party-dress',
      name: 'Party Dress',
      category: 'Women',
      price: 725,
      rating: 5,
      reviews: 156,
      description: 'Eye-catching party dress with modern cuts and elegant details.',
      image: 'linear-gradient(135deg, #c41e3a 0%, #8a0f2d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Ruby Red', 'Emerald', 'Sapphire'],
      highlights: 'Statement piece'
    },
    {
      id: 'wool-cardigan',
      name: 'Wool Cardigan',
      category: 'Women',
      price: 545,
      rating: 5,
      reviews: 167,
      description: 'Soft wool cardigan for layering and comfort.',
      image: 'linear-gradient(135deg, #8b7355 0%, #6b5344 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Camel', 'Cream', 'Charcoal'],
      highlights: 'Timeless layering'
    },
    {
      id: 'cashmere-cardigan',
      name: 'Cashmere Cardigan',
      category: 'Women',
      price: 1295,
      rating: 5,
      reviews: 189,
      description: 'Premium cashmere cardigan with luxurious softness.',
      image: 'linear-gradient(135deg, #d4a89f 0%, #c9936d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Cream', 'Grey', 'Blush'],
      highlights: 'Ultimate luxury'
    },
    {
      id: 'turtleneck',
      name: 'Turtleneck',
      category: 'Women',
      price: 485,
      rating: 5,
      reviews: 172,
      description: 'Classic turtleneck sweater for timeless style.',
      image: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Burgundy'],
      highlights: 'Iconic classic'
    },
    {
      id: 'cotton-jeans',
      name: 'Cotton Jeans',
      category: 'Women',
      price: 325,
      rating: 5,
      reviews: 198,
      description: 'Premium cotton jeans with perfect fit and comfort.',
      image: 'linear-gradient(135deg, #1e3a5f 0%, #0f1d3d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Classic Blue', 'Dark Indigo', 'Black'],
      highlights: 'Everyday essential'
    },
    {
      id: 'trench-coat',
      name: 'Trench Coat',
      category: 'Women',
      price: 895,
      rating: 5,
      reviews: 181,
      description: 'Sophisticated trench coat for all seasons.',
      image: 'linear-gradient(135deg, #d4a574 0%, #c9936d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Khaki', 'Camel', 'Navy'],
      highlights: 'Timeless outerwear'
    },
    {
      id: 'festive-cardigan',
      name: 'Festive Cardigan',
      category: 'Women',
      price: 625,
      rating: 5,
      reviews: 145,
      description: 'Decorative cardigan perfect for celebrations and festive occasions.',
      image: 'linear-gradient(135deg, #c41e3a 0%, #8a0f2d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Holiday Red', 'Forest Green', 'Gold'],
      highlights: 'Celebratory style'
    },
    {
      id: 'leather-handbag',
      name: 'Leather Handbag',
      category: 'Women',
      price: 895,
      rating: 5,
      reviews: 176,
      description: 'Premium leather handbag for everyday elegance.',
      image: 'linear-gradient(135deg, #8b7355 0%, #6b5344 100%)',
      sizes: ['One Size'],
      colors: ['Brown', 'Black', 'Tan'],
      highlights: 'Versatile accessory'
    },
    {
      id: 'ballet-flats',
      name: 'Ballet Flats',
      category: 'Women',
      price: 365,
      rating: 5,
      reviews: 169,
      description: 'Elegant ballet flats perfect for any occasion.',
      image: 'linear-gradient(135deg, #d4a89f 0%, #c9936d 100%)',
      sizes: ['5', '6', '7', '8', '9', '10', '11'],
      colors: ['Nude', 'Black', 'Grey'],
      highlights: 'Comfortable chic'
    },
    {
      id: 'beach-coverup',
      name: 'Beach Coverup',
      category: 'Women',
      price: 295,
      rating: 5,
      reviews: 142,
      description: 'Light and airy beach coverup for summer days.',
      image: 'linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Natural', 'Cream'],
      highlights: 'Resort wear'
    }
  ],

  // Men's Collection
  men: [
    {
      id: 'men-cashmere',
      name: 'Cashmere Sweater',
      category: 'Men',
      price: 695,
      rating: 5,
      reviews: 189,
      description: 'Pure cashmere sweater with unmatched softness and warmth.',
      image: 'linear-gradient(135deg, #d4a574 0%, #c9936d 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Cream', 'Grey', 'Navy'],
      highlights: 'Ultimate comfort and warmth'
    },
    {
      id: 'oxford-button-down',
      name: 'Oxford Button-Down',
      category: 'Men',
      price: 425,
      rating: 5,
      reviews: 167,
      description: 'Classic Oxford cloth button-down shirt.',
      image: 'linear-gradient(135deg, #f5f5f0 0%, #ffffff 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Light Blue', 'Pale Pink'],
      highlights: 'Versatile classic'
    },
    {
      id: 'striped-shirt',
      name: 'Striped Shirt',
      category: 'Men',
      price: 375,
      rating: 5,
      reviews: 154,
      description: 'Stylish striped shirt for casual and formal wear.',
      image: 'linear-gradient(135deg, #1e3a5f 0%, #0f1d3d 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy Stripes', 'Grey Stripes', 'Black Stripes'],
      highlights: 'Timeless pattern'
    },
    {
      id: 'henley-shirt',
      name: 'Henley Shirt',
      category: 'Men',
      price: 285,
      rating: 5,
      reviews: 178,
      description: 'Comfortable henley shirt for everyday wear.',
      image: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Casual comfort'
    },
    {
      id: 'linen-shirt',
      name: 'Linen Shirt',
      category: 'Men',
      price: 385,
      rating: 5,
      reviews: 143,
      description: 'Breathable linen shirt perfect for warm weather.',
      image: 'linear-gradient(135deg, #e8d5c4 0%, #f5e6d3 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Natural', 'White', 'Khaki'],
      highlights: 'Summer essential'
    },
    {
      id: 'mens-sweater',
      name: 'Wool Sweater',
      category: 'Men',
      price: 485,
      rating: 5,
      reviews: 165,
      description: 'Premium wool sweater for warmth and style.',
      image: 'linear-gradient(135deg, #8b7355 0%, #6b5344 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Camel', 'Navy', 'Charcoal'],
      highlights: 'Classic warmth'
    },
    {
      id: 'men-chinos',
      name: 'Chino Pants',
      category: 'Men',
      price: 325,
      rating: 5,
      reviews: 181,
      description: 'Versatile chino pants for casual and smart-casual occasions.',
      image: 'linear-gradient(135deg, #d4a574 0%, #c9936d 100%)',
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Khaki', 'Navy', 'Grey'],
      highlights: 'Everyday versatile'
    },
    {
      id: 'occasion-trousers',
      name: 'Dress Trousers',
      category: 'Men',
      price: 425,
      rating: 5,
      reviews: 156,
      description: 'Tailored dress trousers for formal occasions.',
      image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Professional elegance'
    },
    {
      id: 'wool-suit',
      name: 'Wool Suit',
      category: 'Men',
      price: 1495,
      rating: 5,
      reviews: 172,
      description: 'Premium wool suit for timeless elegance.',
      image: 'linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)',
      sizes: ['36', '38', '40', '42', '44'],
      colors: ['Charcoal', 'Navy', 'Black'],
      highlights: 'Signature tailoring'
    },
    {
      id: 'bomber-jacket',
      name: 'Bomber Jacket',
      category: 'Men',
      price: 695,
      rating: 5,
      reviews: 148,
      description: 'Stylish bomber jacket for modern casual wear.',
      image: 'linear-gradient(135deg, #3d2b1f 0%, #2a1a11 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Tan', 'Navy'],
      highlights: 'Modern style'
    },
    {
      id: 'sailing-jacket',
      name: 'Sailing Jacket',
      category: 'Men',
      price: 825,
      rating: 5,
      reviews: 134,
      description: 'Weather-resistant sailing jacket for outdoor adventures.',
      image: 'linear-gradient(135deg, #1e3a5f 0%, #0f1d3d 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'Light Blue', 'White'],
      highlights: 'Adventure ready'
    },
    {
      id: 'track-jacket',
      name: 'Track Jacket',
      category: 'Men',
      price: 395,
      rating: 5,
      reviews: 167,
      description: 'Comfortable track jacket for active lifestyle.',
      image: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Grey', 'Navy'],
      highlights: 'Athletic style'
    },
    {
      id: 'men-leather-belt',
      name: 'Leather Belt',
      category: 'Men',
      price: 245,
      rating: 5,
      reviews: 189,
      description: 'Premium leather belt for any occasion.',
      image: 'linear-gradient(135deg, #8b7355 0%, #6b5344 100%)',
      sizes: ['30', '32', '34', '36', '38'],
      colors: ['Brown', 'Black', 'Tan'],
      highlights: 'Essential accessory'
    },
    {
      id: 'men-dress-shoes',
      name: 'Dress Shoes',
      category: 'Men',
      price: 625,
      rating: 5,
      reviews: 176,
      description: 'Classic dress shoes for formal occasions.',
      image: 'linear-gradient(135deg, #2a1a1a 0%, #0a0a0a 100%)',
      sizes: ['7', '8', '9', '10', '11', '12', '13'],
      colors: ['Black', 'Brown', 'Burgundy'],
      highlights: 'Formal elegance'
    },
    {
      id: 'loafers',
      name: 'Loafers',
      category: 'Men',
      price: 475,
      rating: 5,
      reviews: 158,
      description: 'Comfortable loafers for casual elegance.',
      image: 'linear-gradient(135deg, #8b6f47 0%, #6b5f37 100%)',
      sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
      colors: ['Burgundy', 'Black', 'Tan'],
      highlights: 'Timeless comfort'
    },
    {
      id: 'silk-tie',
      name: 'Silk Tie',
      category: 'Men',
      price: 185,
      rating: 5,
      reviews: 142,
      description: 'Luxurious silk tie in various elegant patterns.',
      image: 'linear-gradient(135deg, #3d2b1f 0%, #2a1a11 100%)',
      sizes: ['One Size'],
      colors: ['Navy', 'Burgundy', 'Silver'],
      highlights: 'Sophisticated accessory'
    }
  ],

  // Kids' Collection
  kids: [
    {
      id: 'kids-polo',
      name: 'Kids Polo',
      category: 'Kids',
      price: 165,
      rating: 5,
      reviews: 134,
      description: 'Classic polo shirt for kids in comfortable cotton.',
      image: 'linear-gradient(135deg, #1e3a5f 0%, #0f1d3d 100%)',
      sizes: ['2', '4', '6', '8', '10', '12'],
      colors: ['Navy', 'Red', 'White'],
      highlights: 'School essential'
    },
    {
      id: 'kids-shorts',
      name: 'Kids Shorts',
      category: 'Kids',
      price: 125,
      rating: 5,
      reviews: 121,
      description: 'Comfortable shorts for active kids.',
      image: 'linear-gradient(135deg, #d4a574 0%, #c9936d 100%)',
      sizes: ['2', '4', '6', '8', '10', '12'],
      colors: ['Khaki', 'Navy', 'Grey'],
      highlights: 'Playtime ready'
    },
    {
      id: 'kids-jacket',
      name: 'Kids Jacket',
      category: 'Kids',
      price: 285,
      rating: 5,
      reviews: 156,
      description: 'Warm and stylish jacket for kids.',
      image: 'linear-gradient(135deg, #3d2b1f 0%, #2a1a11 100%)',
      sizes: ['2', '4', '6', '8', '10', '12'],
      colors: ['Black', 'Navy', 'Brown'],
      highlights: 'Cozy warmth'
    },
    {
      id: 'kids-sneakers',
      name: 'Kids Sneakers',
      category: 'Kids',
      price: 185,
      rating: 5,
      reviews: 148,
      description: 'Durable sneakers designed for growing feet.',
      image: 'linear-gradient(135deg, #e8d5c4 0%, #f5e6d3 100%)',
      sizes: ['12', '1', '2', '3', '4', '5', '6'],
      colors: ['White', 'Black', 'Grey'],
      highlights: 'Active support'
    },
    {
      id: 'rain-jacket-kids',
      name: 'Rain Jacket',
      category: 'Kids',
      price: 245,
      rating: 5,
      reviews: 167,
      description: 'Waterproof rain jacket for outdoor play.',
      image: 'linear-gradient(135deg, #c41e3a 0%, #8a0f2d 100%)',
      sizes: ['2', '4', '6', '8', '10', '12'],
      colors: ['Red', 'Yellow', 'Blue'],
      highlights: 'Weather protection'
    }
  ],

  // Accessories & Special Items
  accessories: [
    {
      id: 'pearl-necklace',
      name: 'Pearl Necklace',
      category: 'Accessories',
      price: 695,
      rating: 5,
      reviews: 178,
      description: 'Elegant pearl necklace for timeless sophistication.',
      image: 'linear-gradient(135deg, #f0e68c 0%, #daa520 100%)',
      sizes: ['One Size'],
      colors: ['White Pearl', 'Golden Pearl'],
      highlights: 'Classic elegance'
    },
    {
      id: 'elegant-watch',
      name: 'Elegant Watch',
      category: 'Accessories',
      price: 1295,
      rating: 5,
      reviews: 142,
      description: 'Sophisticated timepiece for everyday elegance.',
      image: 'linear-gradient(135deg, #c9b037 0%, #a68c2a 100%)',
      sizes: ['One Size'],
      colors: ['Gold', 'Silver', 'Rose Gold'],
      highlights: 'Premium craftsmanship'
    },
    {
      id: 'sunglasses',
      name: 'Sunglasses',
      category: 'Accessories',
      price: 385,
      rating: 5,
      reviews: 165,
      description: 'Stylish UV-protective sunglasses.',
      image: 'linear-gradient(135deg, #2a1a1a 0%, #0a0a0a 100%)',
      sizes: ['One Size'],
      colors: ['Black', 'Tortoiseshell', 'Brown'],
      highlights: 'UV protection'
    },
    {
      id: 'leather-belt',
      name: 'Leather Belt',
      category: 'Accessories',
      price: 225,
      rating: 5,
      reviews: 154,
      description: 'Premium leather belt for versatile styling.',
      image: 'linear-gradient(135deg, #8b7355 0%, #6b5344 100%)',
      sizes: ['30', '32', '34', '36', '38'],
      colors: ['Brown', 'Black', 'Cognac'],
      highlights: 'Timeless essential'
    },
    {
      id: 'wool-beret',
      name: 'Wool Beret',
      category: 'Accessories',
      price: 195,
      rating: 5,
      reviews: 138,
      description: 'Classic wool beret for effortless style.',
      image: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'Camel'],
      highlights: 'Parisian chic'
    },
    {
      id: 'cashmere-scarf',
      name: 'Cashmere Scarf',
      category: 'Accessories',
      price: 495,
      rating: 5,
      reviews: 171,
      description: 'Luxurious cashmere scarf for warmth and elegance.',
      image: 'linear-gradient(135deg, #d4a89f 0%, #c9936d 100%)',
      sizes: ['One Size'],
      colors: ['Cream', 'Grey', 'Burgundy'],
      highlights: 'Pure luxury'
    }
  ],

  // Formal & Occasion Wear
  formal: [
    {
      id: 'celebration-suit',
      name: 'Celebration Suit',
      category: 'Formal',
      price: 1795,
      rating: 5,
      reviews: 156,
      description: 'Premium suit for special celebrations.',
      image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      sizes: ['36', '38', '40', '42', '44'],
      colors: ['Black', 'Navy', 'Charcoal'],
      highlights: 'Special occasion'
    },
    {
      id: 'tailored-jacket',
      name: 'Tailored Jacket',
      category: 'Formal',
      price: 895,
      rating: 5,
      reviews: 167,
      description: 'Precision-tailored blazer for professional elegance.',
      image: 'linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)',
      sizes: ['36', '38', '40', '42', '44'],
      colors: ['Black', 'Navy', 'Burgundy'],
      highlights: 'Professional style'
    },
    {
      id: 'tailored-trousers',
      name: 'Tailored Trousers',
      category: 'Formal',
      price: 485,
      rating: 5,
      reviews: 145,
      description: 'Perfectly tailored trousers for formal wear.',
      image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Precise tailoring'
    },
    {
      id: 'classic-blazer',
      name: 'Classic Blazer',
      category: 'Formal',
      price: 785,
      rating: 5,
      reviews: 182,
      description: 'Timeless blazer that works with any occasion.',
      image: 'linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)',
      sizes: ['36', '38', '40', '42', '44'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Versatile classic'
    },
    {
      id: 'dress-shoes',
      name: 'Dress Shoes',
      category: 'Formal',
      price: 725,
      rating: 5,
      reviews: 174,
      description: 'Premium dress shoes for formal occasions.',
      image: 'linear-gradient(135deg, #2a1a1a 0%, #0a0a0a 100%)',
      sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
      colors: ['Black', 'Brown', 'Cognac'],
      highlights: 'Formal elegance'
    }
  ],

  // Active & Sportswear
  active: [
    {
      id: 'active-tee',
      name: 'Active Tee',
      category: 'Active',
      price: 145,
      rating: 5,
      reviews: 167,
      description: 'Moisture-wicking athletic t-shirt.',
      image: 'linear-gradient(135deg, #1e3a5f 0%, #0f1d3d 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Performance fabric'
    },
    {
      id: 'yoga-pants',
      name: 'Yoga Pants',
      category: 'Active',
      price: 185,
      rating: 5,
      reviews: 145,
      description: 'Comfortable yoga and athletic pants.',
      image: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Grey'],
      highlights: 'Flexible comfort'
    },
    {
      id: 'merino-wool-sweater',
      name: 'Merino Wool Sweater',
      category: 'Active',
      price: 425,
      rating: 5,
      reviews: 153,
      description: 'Natural merino wool for temperature regulation.',
      image: 'linear-gradient(135deg, #8b7355 0%, #6b5344 100%)',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Grey', 'Navy', 'Cream'],
      highlights: 'Natural performance'
    }
  ]
};

// Helper functions to access products

/**
 * Get all products
 */
function getAllProducts() {
  return Object.values(productsDatabase).flat();
}

/**
 * Get products by category
 */
function getProductsByCategory(category) {
  const categoryName = category.toLowerCase();
  if (productsDatabase[categoryName]) {
    return productsDatabase[categoryName];
  }
  return [];
}

/**
 * Get a single product by ID
 */
function getProductById(id) {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id);
}

/**
 * Search products by name or description
 */
function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return getAllProducts().filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get products within a price range
 */
function getProductsByPriceRange(minPrice, maxPrice) {
  return getAllProducts().filter(product =>
    product.price >= minPrice && product.price <= maxPrice
  );
}

/**
 * Get highest rated products
 */
function getTopRatedProducts(limit = 10) {
  return getAllProducts()
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, limit);
}

/**
 * Get featured products (most reviews)
 */
function getFeaturedProducts(limit = 8) {
  return getAllProducts()
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, limit);
}
