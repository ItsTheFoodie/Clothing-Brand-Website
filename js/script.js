/* ===== SHOPPING CART FUNCTIONALITY ===== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-info h3').textContent;
            const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.replace('$', ''));
            
            // Check if item already in cart
            const existingItem = cart.find(item => item.name === productName);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // Show visual feedback
            const originalText = this.textContent;
            this.textContent = '✓ Added to Cart';
            this.style.backgroundColor = '#b8860b';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
    
    // Product page mapping
    const productPages = {
        'classic blazer': '../products/classic-blazer.html',
        'silk slip dress': '../products/silk-slip-dress.html',
        'merino wool sweater': '../products/merino-wool-sweater.html',
        'tailored trousers': '../products/tailored-trousers.html',
        'linen shirt': '../products/linen-shirt.html',
        'cashmere scarf': '../products/cashmere-scarf.html',
        'oxford button-down': '../products/oxford-button-down.html',
        'wool suit': '../products/wool-suit.html',
        'party dress': '../products/party-dress.html',
        'celebration suit': '../products/celebration-suit.html',
        'wool cardigan': '../products/wool-cardigan.html',
        'festive cardigan': '../products/festive-cardigan.html',
        'cotton dress': '../products/cotton-dress.html',
        'occasion trousers': '../products/occasion-trousers.html',
        'dress shoes': '../products/dress-shoes.html',
        'leather belt': '../products/leather-belt.html',
        'classic trench coat': '../products/trench-coat.html',
        'evening gown': '../products/evening-gown.html',
        'white blouse': '../products/white-blouse.html',
        'tailored jacket': '../products/tailored-jacket.html',
        'cotton jeans': '../products/cotton-jeans.html',
        'cashmere cardigan': '../products/cashmere-cardigan.html',
        'chinos': '../products/men-chinos.html',
        'henley shirt': '../products/henley-shirt.html',
        'crew neck sweater': '../products/mens-sweater.html',
        'track jacket': '../products/track-jacket.html',
        'yoga pants': '../products/yoga-pants.html',
        'active tee': '../products/active-tee.html',
        'polo shirt': '../products/kids-polo.html',
        'shorts': '../products/kids-shorts.html',
        'sneakers': '../products/kids-sneakers.html',
        'wool jacket': '../products/kids-jacket.html',
        'floral dress': '../products/floral-dress.html',
        'striped shirt': '../products/striped-shirt.html',
        'sailing jacket': '../products/sailing-jacket.html',
        'beach cover-up': '../products/beach-coverup.html',
        'casual sneakers': '../products/casual-sneakers.html',
        'loafers': '../products/loafers.html',
        'bomber jacket': '../products/bomber-jacket.html',
        'wool beret': '../products/wool-beret.html',
        'pearl necklace': '../products/pearl-necklace.html',
        'sunglasses': '../products/sunglasses.html',
        'leather handbag': '../products/leather-handbag.html',
        'elegant watch': '../products/elegant-watch.html',
        'rain jacket': '../products/rain-jacket-kids.html',
        'ballet flats': '../products/ballet-flats.html',
        'turtleneck': '../products/turtleneck.html',
        'pencil skirt': '../products/pencil-skirt.html',
        'cashmere sweater': '../products/men-cashmere.html',
        'oxford dress shoes': '../products/men-dress-shoes.html',
        'silk tie': '../products/silk-tie.html'
    };
    
    // Make product cards clickable
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking the add-to-cart button
            if (e.target.classList.contains('add-to-cart')) return;
            
            const productName = this.querySelector('.product-info h3').textContent;
            const url = productPages[productName.toLowerCase()];
            
            if (url) {
                window.location.href = url;
            }
        });
    });
    
    // Initialize wishlist
    initializeWishlist();
    
    // Update cart count on page load
    updateCartCount();
});

// COLOR SWATCH & CART/WISHLIST HELPERS
function changeColor(name,gradient){
    const img=document.getElementById('productImage');
    if(img) img.style.background=gradient;
    document.querySelectorAll('.color-option').forEach(el=>el.style.borderColor='#e8e4e0');
    if(event && event.target) event.target.style.borderColor='#b8860b';
}

function addProductCart(n,p){
    let c=JSON.parse(localStorage.getItem('cart'))||[];
    let e=c.find(i=>i.name===n);
    if(e){e.quantity++}else{c.push({name:n,price:p,quantity:1})}
    localStorage.setItem('cart',JSON.stringify(c));
    if(typeof updateCartCount==='function'){updateCartCount()}
    if(typeof showAddedNotification==='function'){showAddedNotification()}
}

// alias for backwards compatibility
function addToCart(name,price){
    addProductCart(name,price);
}

function addToWishlist(btn,n){
    let w=JSON.parse(localStorage.getItem('wishlist'))||[];
    if(w.find(i=>i===n)){
        w=w.filter(i=>i!==n);
        btn.textContent='♡ Wishlist';
        btn.style.color='#888';
    }else{
        w.push(n);
        btn.textContent='♥ In Wishlist';
        btn.style.color='#b8860b';
    }
    localStorage.setItem('wishlist',JSON.stringify(w));
}

// WISHLIST FUNCTIONALITY
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function initializeWishlist() {
    // Add wishlist button to product pages if it exists
    const productDetail = document.querySelector('.product-info-detail');
    if (productDetail && !document.querySelector('.wishlist-btn')) {
        const productName = document.querySelector('h1')?.textContent || 'Product';
        const wishlistBtn = document.createElement('button');
        wishlistBtn.className = 'wishlist-btn';
        wishlistBtn.style.cssText = `
            padding: 0.8rem 1.5rem;
            background: white;
            border: 1px solid #e8e4e0;
            cursor: pointer;
            font-size: 1rem;
            margin-left: 1rem;
            transition: all 0.3s ease;
        `;
        
        const isInWishlist = wishlist.some(item => item.toLowerCase() === productName.toLowerCase());
        wishlistBtn.textContent = isInWishlist ? '♥ In Wishlist' : '♡ Add to Wishlist';
        wishlistBtn.style.color = isInWishlist ? '#b8860b' : '#888';
        
        wishlistBtn.addEventListener('click', function() {
            toggleWishlist(productName, this);
        });
        
        // Add next to Add to Cart button
        const cartBtn = document.querySelector('button[onclick*="addToCart"]');
        if (cartBtn) {
            cartBtn.parentElement.style.display = 'flex';
            cartBtn.parentElement.style.gap = '1rem';
            cartBtn.parentElement.appendChild(wishlistBtn);
        }
    }
}

function toggleWishlist(productName, btn) {
    const index = wishlist.findIndex(item => item.toLowerCase() === productName.toLowerCase());
    
    if (index > -1) {
        wishlist.splice(index, 1);
        btn.textContent = '♡ Add to Wishlist';
        btn.style.color = '#888';
    } else {
        wishlist.push(productName);
        btn.textContent = '♥ In Wishlist';
        btn.style.color = '#b8860b';
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function viewWishlist() {
    if (wishlist.length === 0) {
        alert('Your wishlist is empty!');
        return;
    }
    
    let content = 'YOUR WISHLIST:\n\n';
    wishlist.forEach(item => {
        content += '• ' + item + '\n';
    });
    alert(content);
}

// Update cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const navIcons = document.querySelector('.nav-icons');
    if (navIcons) {
        const cartButton = navIcons.querySelectorAll('a')[1];
        if (cartButton) {
            cartButton.textContent = cartCount > 0 ? `Cart (${cartCount})` : 'Cart';
        }
    }
}

// Cart button functionality - already set up in DOMContentLoaded above


// Open cart modal
function openCartModal() {
    let cartModal = document.getElementById('cartModal');
    
    if (!cartModal) {
        cartModal = document.createElement('div');
        cartModal.id = 'cartModal';
        cartModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;
        document.body.appendChild(cartModal);
    }
    
    const cartContent = document.createElement('div');
    cartContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 0;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        font-family: 'Segoe UI', sans-serif;
    `;
    
    let total = 0;
    let cartHTML = '<h2 style="font-family: Garamond, serif; font-size: 2rem; margin-bottom: 1.5rem; color: #1a1a1a;">Your Cart</h2>';
    
    if (cart.length === 0) {
        cartHTML += '<p style="color: #888;">Your cart is empty.</p>';
    } else {
        cartHTML += '<div style="margin-bottom: 2rem;">';
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid #e8e4e0;">
                    <div>
                        <h4 style="margin: 0; font-family: Garamond, serif; font-size: 1.1rem;">${item.name}</h4>
                        <p style="margin: 0.5rem 0 0 0; color: #888;">$${item.price} × ${item.quantity}</p>
                    </div>
                    <div style="text-align: right;">
                        <p style="margin: 0; font-family: Garamond, serif; font-size: 1.2rem;">$${itemTotal.toFixed(2)}</p>
                        <button onclick="removeFromCart(${index})" style="background: none; border: none; color: #888; cursor: pointer; font-size: 0.9rem; margin-top: 0.5rem;">Remove</button>
                    </div>
                </div>
            `;
        });
        cartHTML += '</div>';
        cartHTML += `<div style="border-top: 2px solid #b8860b; padding-top: 1rem; margin-bottom: 1.5rem;">
            <p style="font-family: Garamond, serif; font-size: 1.5rem; margin: 0; text-align: right;">Total: $${total.toFixed(2)}</p>
        </div>`;
    }
    
    cartHTML += `
        <div style="display: flex; gap: 1rem;">
            <button onclick="closeCartModal()" style="flex: 1; padding: 0.8rem; background-color: #f5f1ed; border: 1px solid #e8e4e0; cursor: pointer; font-family: 'Segoe UI', sans-serif; font-size: 1rem;">Continue Shopping</button>
            ${cart.length > 0 ? '<button style="flex: 1; padding: 0.8rem; background-color: #1a1a1a; color: white; border: 1px solid #1a1a1a; cursor: pointer; font-family: \'Segoe UI\', sans-serif; font-size: 1rem;">Checkout</button>' : ''}
        </div>
    `;
    
    cartContent.innerHTML = cartHTML;
    cartModal.innerHTML = '';
    cartModal.appendChild(cartContent);
    cartModal.style.display = 'flex';
    
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    openCartModal();
}

// CUSTOM NOTIFICATION SYSTEM
function showAddedNotification() {
    let notification = document.getElementById('addedNotification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'addedNotification';
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #1a1a1a;
            color: white;
            padding: 1.5rem 2rem;
            font-family: 'Segoe UI', sans-serif;
            border: 1px solid #b8860b;
            z-index: 2000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(notification);
    }
    
    notification.innerHTML = `
        <span style="color: #b8860b; font-size: 1.5rem;">✓</span>
        <div>
            <p style="margin: 0; font-weight: 500; font-size: 1rem;">Added to Cart</p>
        </div>
    `;
    notification.style.display = 'flex';
    notification.style.animation = 'slideIn 0.3s ease';
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 300);
    }, 2000);
}

/* ===== SEARCH FUNCTIONALITY ===== */
document.addEventListener('DOMContentLoaded', function() {
    const searchButtons = document.querySelectorAll('.nav-icons a');
    if (searchButtons.length > 0) {
        searchButtons[0].addEventListener('click', function(e) {
            e.preventDefault();
            openSearchModal();
        });
    }
    
    const cartButtons = document.querySelectorAll('.nav-icons a');
    if (cartButtons.length > 1) {
        cartButtons[1].addEventListener('click', function(e) {
            e.preventDefault();
            openCartModal();
        });
    }
});

function openSearchModal() {
    let searchModal = document.getElementById('searchModal');
    
    if (!searchModal) {
        searchModal = document.createElement('div');
        searchModal.id = 'searchModal';
        searchModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            z-index: 1001;
            padding-top: 100px;
        `;
        document.body.appendChild(searchModal);
    }
    
    const searchContent = document.createElement('div');
    searchContent.style.cssText = `
        background: white;
        padding: 2rem;
        width: 90%;
        max-width: 600px;
        font-family: 'Segoe UI', sans-serif;
    `;
    
    searchContent.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <input type="text" id="searchInput" placeholder="Search for products..." style="flex: 1; padding: 0.8rem; border: 1px solid #e8e4e0; font-family: 'Segoe UI', sans-serif; font-size: 1rem;">
            <button onclick="closeSearchModal()" style="padding: 0.8rem 1.5rem; background-color: #1a1a1a; color: white; border: none; cursor: pointer; font-family: 'Segoe UI', sans-serif;">✕</button>
        </div>
        <div id="searchResults" style="min-height: 100px; color: #888;">
            <p>Start typing to search...</p>
        </div>
    `;
    
    searchModal.innerHTML = '';
    searchModal.appendChild(searchContent);
    searchModal.style.display = 'flex';
    
    const searchInput = searchModal.querySelector('#searchInput');
    const searchResults = searchModal.querySelector('#searchResults');
    
    searchInput.focus();
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            searchResults.innerHTML = '<p>Start typing to search...</p>';
            return;
        }
        
        // Map of products to their pages
        const productPages = {
            'classic blazer': 'products/classic-blazer.html',
            'silk slip dress': 'products/silk-slip-dress.html',
            'merino wool sweater': 'products/merino-wool-sweater.html',
            'tailored trousers': 'products/tailored-trousers.html',
            'linen shirt': 'products/linen-shirt.html',
            'cashmere scarf': 'products/cashmere-scarf.html',
            'oxford button-down': 'products/oxford-button-down.html',
            'wool suit': 'products/wool-suit.html',
            'party dress': 'products/party-dress.html',
            'celebration suit': 'products/celebration-suit.html',
            'wool cardigan': 'products/wool-cardigan.html',
            'festive cardigan': 'products/festive-cardigan.html',
            'cotton dress': 'products/cotton-dress.html',
            'occasion trousers': 'products/occasion-trousers.html',
            'dress shoes': 'products/dress-shoes.html',
            'leather belt': 'products/leather-belt.html',
            'cashmere sweater': 'products/men-cashmere.html',
            'oxford dress shoes': 'products/men-dress-shoes.html',
            'silk tie': 'products/silk-tie.html',
            'classic trench coat': 'products/trench-coat.html',
            'evening gown': 'products/evening-gown.html',
            'white blouse': 'products/white-blouse.html',
            'tailored jacket': 'products/tailored-jacket.html',
            'cotton jeans': 'products/cotton-jeans.html',
            'cashmere cardigan': 'products/cashmere-cardigan.html',
            'chinos': 'products/men-chinos.html',
            'henley shirt': 'products/henley-shirt.html',
            'crew neck sweater': 'products/mens-sweater.html',
            'track jacket': 'products/track-jacket.html',
            'yoga pants': 'products/yoga-pants.html',
            'active tee': 'products/active-tee.html',
            'polo shirt': 'products/kids-polo.html',
            'shorts': 'products/kids-shorts.html',
            'sneakers': 'products/kids-sneakers.html',
            'wool jacket': 'products/kids-jacket.html',
            'floral dress': 'products/floral-dress.html',
            'striped shirt': 'products/striped-shirt.html',
            'sailing jacket': 'products/sailing-jacket.html',
            'beach cover-up': 'products/beach-coverup.html',
            'casual sneakers': 'products/casual-sneakers.html',
            'loafers': 'products/loafers.html',
            'bomber jacket': 'products/bomber-jacket.html',
            'wool beret': 'products/wool-beret.html',
            'pearl necklace': 'products/pearl-necklace.html',
            'sunglasses': 'products/sunglasses.html',
            'leather handbag': 'products/leather-handbag.html',
            'elegant watch': 'products/elegant-watch.html',
            'rain jacket': 'products/rain-jacket-kids.html',
            'ballet flats': 'products/ballet-flats.html',
            'turtleneck': 'products/turtleneck.html',
            'pencil skirt': 'products/pencil-skirt.html'
        };
        
        // Get all product names with their pages
        const allProductsWithPages = [];
        document.querySelectorAll('.product-card').forEach(card => {
            const name = card.querySelector('.product-info h3').textContent;
            const url = productPages[name.toLowerCase()] || 'pages/women.html';
            allProductsWithPages.push({ name, url });
        });
        
        const filtered = allProductsWithPages.filter(item => item.name.toLowerCase().includes(query));
        
        if (filtered.length === 0) {
            searchResults.innerHTML = '<p>No products found.</p>';
        } else {
            searchResults.innerHTML = `
                <p style="color: #1a1a1a; margin-bottom: 1rem; font-weight: 500;">Found ${filtered.length} product(s):</p>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${filtered.map((item, idx) => `<li style="padding: 0.8rem 0; border-bottom: 1px solid #e8e4e0;"><div onclick="window.location.href='${item.url}'" style="color: #1a1a1a; cursor: pointer; display: block; padding: 0.5rem 0;" onmouseover="this.style.color='#b8860b'" onmouseout="this.style.color='#1a1a1a'">${item.name}</div></li>`).join('')}
                </ul>
            `;
        }
    });
    
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearchModal();
        }
    });
}

function closeSearchModal() {
    const searchModal = document.getElementById('searchModal');
    if (searchModal) {
        searchModal.style.display = 'none';
    }
}

/* ===== PRODUCT CLICK HANDLERS ===== */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-card').forEach((card, index) => {
        // Make product card clickable
        card.style.cursor = 'pointer';
        
        const productInfo = card.querySelector('.product-info');
        if (productInfo) {
            productInfo.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) return; // Don't open modal if clicking add to cart
                openProductModal(card, index);
            });
        }
    });
    
    // Initialize cart count on page load
    updateCartCount();
});

function openProductModal(card, index) {
    const productName = card.querySelector('.product-info h3').textContent;
    const productPrice = card.querySelector('.product-price').textContent;
    const productDesc = card.querySelector('.product-description').textContent;
    
    let modal = document.getElementById('productModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1002;
        `;
        document.body.appendChild(modal);
    }
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        max-width: 600px;
        width: 90%;
        border-radius: 0;
        font-family: 'Segoe UI', sans-serif;
    `;
    
    const imageColor = card.querySelector('.product-image').className.split(' ')[1];
    const gradientMap = {
        'women': 'linear-gradient(135deg, #d9ccc0 0%, #c4b5a0 100%)',
        'men': 'linear-gradient(135deg, #e8dfd0 0%, #d9c8b0 100%)',
        'kids': 'linear-gradient(135deg, #e8d9c8 0%, #d9c8b0 100%)',
        '': 'linear-gradient(135deg, #e8d9c8 0%, #d9c8b0 100%)'
    };
    
    const gradient = gradientMap[imageColor] || gradientMap[''];
    
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem;">
            <h2 style="font-family: Garamond, serif; font-size: 2rem; margin: 0; flex: 1;">${productName}</h2>
            <button onclick="closeProductModal()" style="background: none; border: none; font-size: 2rem; cursor: pointer; color: #888;">×</button>
        </div>
        <div style="background: ${gradient}; width: 100%; height: 300px; margin-bottom: 2rem;"></div>
        <div style="margin-bottom: 2rem;">
            <p style="color: #888; margin: 0 0 1rem 0; font-size: 1.1rem;">${productDesc}</p>
            <p style="font-family: Garamond, serif; font-size: 1.8rem; margin: 1rem 0; color: #1a1a1a; font-weight: 400;">${productPrice}</p>
            <p style="color: #888; font-size: 0.95rem; margin: 1rem 0;">Premium quality materials. Crafted to last. Made with attention to detail and timeless design.</p>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button onclick="addProductToCart('${productName}', '${productPrice}')" style="flex: 1; padding: 0.8rem; background-color: #1a1a1a; color: white; border: 1px solid #1a1a1a; cursor: pointer; font-family: 'Segoe UI', sans-serif; font-size: 1rem; font-weight: 500;">Add to Cart</button>
            <button onclick="closeProductModal()" style="flex: 1; padding: 0.8rem; background-color: #f5f1ed; border: 1px solid #e8e4e0; cursor: pointer; font-family: 'Segoe UI', sans-serif; font-size: 1rem;">Close</button>
        </div>
    `;
    
    modal.innerHTML = '';
    modal.appendChild(modalContent);
    modal.style.display = 'flex';
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function addProductToCart(name, price) {
    const priceNum = parseFloat(price.replace('$', ''));
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: priceNum,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    closeProductModal();
    alert('Added to cart!');
}

/* ===== SMOOTH SCROLL BEHAVIOR ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



/* ===== INTERSECTION OBSERVER FOR ANIMATIONS ===== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe collection cards
document.querySelectorAll('.collection-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe philosophy items
document.querySelectorAll('.philosophy-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

/* ===== NEWSLETTER FORM HANDLING ===== */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (email && email.includes('@')) {
            alert('Thank you for subscribing, ' + email + '! Expect curated updates soon.');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/* ===== ACTIVE NAV LINK ===== */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ===== PAGE LOAD ANIMATION ===== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

body.style.opacity = '0.95';
body.style.transition = 'opacity 0.3s ease';

/* ===== KEYBOARD NAVIGATION ===== */
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--gold)';
        this.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});
/* ===== AUTO-ENHANCE PRODUCT PAGES ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Auto-enhance product pages with color functionality if not already present
    const productImage = document.getElementById('productImage');
    if (productImage && !window.productEnhanced) {
        window.productEnhanced = true;
        // Initialize with proper styling for color changes
        if (!productImage.style.transition) {
            productImage.style.transition = 'all 0.3s ease';
        }
    }
});
// Insert one-line helper under review name inputs on product pages
// and provide full review system (getDeviceId, submit/edit/delete/display)
let currentRating = 0;
let currentDeviceId = null;

function getDeviceId() {
    let id = localStorage.getItem('deviceId');
    if (!id) {
        id = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', id);
    }
    currentDeviceId = id;
    return id;
}

function setRating(rating) {
    currentRating = rating;
    const ratingInput = document.getElementById('reviewRating');
    if (ratingInput) ratingInput.value = rating;
    document.querySelectorAll('.star-btn').forEach((btn, idx) => {
        btn.style.opacity = idx < rating ? '1' : '0.3';
        btn.style.color = idx < rating ? '#b8860b' : '#1a1a1a';
    });
}

function submitReview(e, productName) {
    e.preventDefault();
    const name = document.getElementById('reviewName').value;
    const text = document.getElementById('reviewText').value;
    const rating = document.getElementById('reviewRating').value;
    const deviceId = getDeviceId();
    if (!rating) {
        alert('Please select a rating');
        return;
    }
    let reviews = JSON.parse(localStorage.getItem('reviews_' + productName) || '[]');
    let existingIndex = reviews.findIndex(r => r.deviceId === deviceId);
    if (existingIndex >= 0) {
        reviews[existingIndex] = { name, rating, text, date: new Date().toLocaleDateString(), deviceId };
    } else {
        reviews.unshift({ name, rating, text, date: new Date().toLocaleDateString(), deviceId });
    }
    localStorage.setItem('reviews_' + productName, JSON.stringify(reviews));
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewRating').value = '0';
    currentRating = 0;
    document.querySelectorAll('.star-btn').forEach(btn => btn.style.opacity = '0.3');
    displayReviews(productName);
}

function editReview(productName) {
    const reviews = JSON.parse(localStorage.getItem('reviews_' + productName) || '[]');
    const myReview = reviews.find(r => r.deviceId === currentDeviceId);
    if (myReview) {
        document.getElementById('reviewName').value = myReview.name;
        document.getElementById('reviewText').value = myReview.text;
        setRating(myReview.rating);
        window.scrollTo(0, document.querySelector('form').offsetTop - 100);
    }
}

function deleteReview(productName) {
    let reviews = JSON.parse(localStorage.getItem('reviews_' + productName) || '[]');
    reviews = reviews.filter(r => r.deviceId !== currentDeviceId);
    localStorage.setItem('reviews_' + productName, JSON.stringify(reviews));
    displayReviews(productName);
}

function displayReviews(productName) {
    let reviews = JSON.parse(localStorage.getItem('reviews_' + productName) || '[]');
    let existingDiv = document.getElementById('userReviews');
    if (existingDiv) existingDiv.remove();
    if (reviews.length > 0) {
        let reviewsDiv = document.createElement('div');
        reviewsDiv.id = 'userReviews';
        reviews.forEach(r => {
            const isMyReview = r.deviceId === currentDeviceId;
            const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
            let reviewHTML = '<div style="padding:1.5rem;border:1px solid ' + (isMyReview ? '#b8860b' : '#e8e4e0') + ';margin-bottom:1rem;background:' + (isMyReview ? '#fefaf3' : 'white') + '"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:1rem"><div><h4 style="margin:0;font-family:Garamond,serif">' + r.name + (isMyReview ? ' (You)' : '') + ' </h4><p style="color:#b8860b;margin:0.5rem 0">' + stars + '</p><p style="color:#888;font-size:0.9rem;margin:0.5rem 0">' + r.date + '</p></div>';
            if (isMyReview) {
                reviewHTML += '<div style="display:flex;gap:0.5rem"><button type="button" onclick="editReview(\'' + productName + '\')" style="background:#b8860b;color:white;border:none;padding:0.4rem 0.8rem;cursor:pointer;font-size:0.9rem;border-radius:3px">Edit</button>';
                reviewHTML += '<button type="button" onclick="deleteReview(\'' + productName + '\')" style="background:#e74c3c;color:white;border:none;padding:0.4rem 0.8rem;cursor:pointer;font-size:0.9rem;border-radius:3px">Delete</button></div>';
            }
            reviewHTML += '</div><p style="color:#555;line-height:1.6">' + r.text + '</p></div>';
            reviewsDiv.innerHTML += reviewHTML;
        });
        let formSection = document.querySelector('form').closest('section');
        formSection.insertBefore(reviewsDiv, formSection.querySelector('form'));
    }
}

// helper note insertion (kept)
document.addEventListener('DOMContentLoaded', function(){
    try{
        var el = document.getElementById('reviewName');
        if(el && !el.parentNode.querySelector('.review-note')){
            var note = document.createElement('p');
            note.className = 'review-note';
            note.style.fontSize = '0.9rem';
            note.style.color = '#666';
            note.style.marginTop = '0.5rem';
            note.textContent = 'One review per device. Edit by submitting again.';
            el.parentNode.insertBefore(note, el.nextSibling);
        }
    }catch(e){/* safe fail */}
});

// initialize reviews when product page loads
function initReviews() {
    var form = document.querySelector('form[onsubmit^="submitReview"]');
    if(form){
        var match = form.getAttribute('onsubmit').match(/'([^']+)'/);
        if(match){
            var productName = match[1];
            getDeviceId();
            displayReviews(productName);
        }
    }
}
document.addEventListener('DOMContentLoaded', initReviews);