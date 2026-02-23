/* ===== SHOPPING CART FUNCTIONALITY ===== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
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
});

// Update cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
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
