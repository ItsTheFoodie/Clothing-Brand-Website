/* ===== SHOPPING CART FUNCTIONALITY ===== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartButton = document.querySelector('.nav-icons a:nth-child(2)');
    if (cartButton) {
        cartButton.textContent = cartCount > 0 ? `Cart (${cartCount})` : 'Cart';
    }
}

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

// Cart button functionality
const cartButtons = document.querySelectorAll('.nav-icons a:nth-child(2)');
cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        openCartModal();
    });
});

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
const searchButtons = document.querySelectorAll('.nav-icons a:nth-child(1)');
searchButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        openSearchModal();
    });
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
        
        // Get all product names
        const allProducts = Array.from(document.querySelectorAll('.product-info h3')).map(el => el.textContent);
        const filtered = allProducts.filter(product => product.toLowerCase().includes(query));
        
        if (filtered.length === 0) {
            searchResults.innerHTML = '<p>No products found.</p>';
        } else {
            searchResults.innerHTML = `
                <p style="color: #1a1a1a; margin-bottom: 1rem; font-weight: 500;">Found ${filtered.length} product(s):</p>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${filtered.map(product => `<li style="padding: 0.5rem 0; border-bottom: 1px solid #e8e4e0; color: #1a1a1a;">${product}</li>`).join('')}
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

// Initialize cart count on page load
updateCartCount();

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
