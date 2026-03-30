// Renderer for products using products-database.js

(function () {
  /**
   * Create a product card element from product data
   */
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Product image
    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-image women';
    imageDiv.style.background = product.image || '#ddd';
    card.appendChild(imageDiv);
    
    // Product info container
    const infoDiv = document.createElement('div');
    infoDiv.className = 'product-info';
    
    // Product name
    const name = document.createElement('h3');
    name.textContent = product.name;
    infoDiv.appendChild(name);
    
    // Product description
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;
    infoDiv.appendChild(description);
    
    // Product price
    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = `$${product.price}`;
    infoDiv.appendChild(price);
    
    // Add to cart button
    const btn = document.createElement('button');
    btn.className = 'add-to-cart';
    btn.textContent = 'Add to Cart';
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (typeof window.addToCart === 'function') {
        window.addToCart(product.name, product.price);
      } else {
        const originalText = btn.textContent;
        btn.textContent = '✓ Added to Cart';
        btn.style.backgroundColor = '#b8860b';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
        }, 2000);
      }
    });
    infoDiv.appendChild(btn);
    
    card.appendChild(infoDiv);
    return card;
  }

  /**
   * Render products into a container
   */
  function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID "${containerId}" not found`);
      return;
    }
    container.innerHTML = '';
    products.forEach(p => container.appendChild(createProductCard(p)));
  }

  /**
   * Render products by category
   */
  function renderProductsByCategory(containerId, category) {
    if (typeof getProductsByCategory !== 'function') {
      console.error('products-database.js not loaded');
      return;
    }
    const products = getProductsByCategory(category);
    renderProducts(containerId, products);
  }

  /**
   * Auto-render on page load
   */
  document.addEventListener('DOMContentLoaded', function () {
    // Look for containers with data-category attribute
    const categoryContainers = document.querySelectorAll('[data-category]');
    categoryContainers.forEach(container => {
      const category = container.getAttribute('data-category');
      if (typeof getProductsByCategory === 'function') {
        const products = getProductsByCategory(category);
        container.innerHTML = '';
        products.forEach(p => container.appendChild(createProductCard(p)));
      }
    });

    // Handle shop page - render all products in elements with id="product-list"
    const productListElement = document.getElementById('product-list');
    if (productListElement && typeof getAllProducts === 'function') {
      const allProducts = getAllProducts();
      productListElement.innerHTML = '';
      allProducts.forEach(p => productListElement.appendChild(createProductCard(p)));
    }
  });

  // Export for interactive use
  window.renderProducts = renderProducts;
  window.renderProductsByCategory = renderProductsByCategory;
  window.createProductCard = createProductCard;
})();
