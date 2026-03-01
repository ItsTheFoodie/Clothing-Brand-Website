// Renderer for products using products-database.js

(function () {
  function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.border = '1px solid #e8e4e0';
    card.style.padding = '1rem';
    card.style.background = '#fff';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '0.75rem';

    const img = document.createElement('div');
    img.style.height = '180px';
    img.style.border = '1px solid #e8e4e0';
    img.style.background = product.image || '#ddd';
    img.style.backgroundSize = 'cover';
    img.style.borderRadius = '4px';
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = product.name;
    title.style.margin = '0';
    title.style.fontFamily = 'Garamond, serif';
    title.style.fontSize = '1.05rem';
    card.appendChild(title);

    const price = document.createElement('div');
    price.textContent = `$${product.price}`;
    price.style.color = '#1a1a1a';
    price.style.fontWeight = '600';
    card.appendChild(price);

    const desc = document.createElement('p');
    desc.textContent = product.description;
    desc.style.color = '#666';
    desc.style.fontSize = '0.95rem';
    desc.style.margin = '0';
    desc.style.flex = '1';
    card.appendChild(desc);

    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.style.padding = '0.6rem';
    btn.style.background = '#1a1a1a';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', function () {
      if (typeof window.addToCart === 'function') {
        window.addToCart(product.name, product.price);
      } else {
        alert(`Add to cart: ${product.name} — $${product.price}`);
      }
    });
    card.appendChild(btn);

    return card;
  }

  function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    products.forEach(p => container.appendChild(createProductCard(p)));
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof getAllProducts === 'function') {
      const products = getAllProducts();
      renderProducts('product-list', products);
    } else {
      console.error('products-database.js not loaded or getAllProducts missing');
    }
  });

  // Export for interactive use
  window.renderProducts = renderProducts;
})();
