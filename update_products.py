#!/usr/bin/env python3
import os
import re
from pathlib import Path

products_dir = Path('/workspaces/Clothing-Brand-Website/products')

# Product info for reference
product_info = {
    'classic-blazer': ('Classic Blazer', 695, "Women's"),
    'silk-slip-dress': ('Silk Slip Dress', 425, "Women's"),
    'cotton-dress': ('Cotton Dress', 185, "Kids"),
    'party-dress': ('Party Dress', 325, "Kids"),
    'wool-suit': ('Wool Suit', 1250, "Men's"),
}

template = '''<!DOCTYPE html><html><head><title>{name} | Lumière</title><link rel="stylesheet" href="../css/styles.css"></head><body><nav class="navbar"><div class="nav-container"><div class="logo"><a href="../index.html">LUMIÈRE</a></div><ul class="nav-menu"><li><a href="../pages/women.html">Women</a></li><li><a href="../pages/men.html">Men</a></li><li><a href="../pages/kids.html">Kids</a></li><li><a href="../pages/occasions.html">Occasions</a></li><li><a href="../pages/about.html">About</a></li><li><a href="../pages/contact.html">Contact</a></li></ul><div class="nav-icons"><a href="#" class="icon">Search</a><a href="#" class="icon">Cart</a></div></div></nav><section style="max-width:900px;margin:3rem auto;padding:0 2rem"><div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-bottom:4rem"><div style="height:500px;background:linear-gradient(135deg, #d9ccc0 0%, #c4b5a0 100%);border:1px solid #e8e4e0"></div><div><h1 style="font-family:Garamond,serif;font-size:2.5rem;margin:0">{name}</h1><p style="color:#888">{collection}</p><div style="margin:1.5rem 0"><div style="color:#b8860b;font-size:1.2rem">★ ★ ★ ★ ★</div><span style="color:#888">(150+ reviews)</span><p style="font-family:Garamond,serif;font-size:2rem;margin:1rem 0 0 0;color:#1a1a1a">${price}</p></div><div style="margin-bottom:2rem"><h3 style="font-family:Garamond,serif;margin:0 0 1rem 0">Description</h3><p style="color:#555;line-height:1.8">Premium quality crafted with attention to detail. Timeless design meets modern elegance in this essential wardrobe piece.</p></div><div style="margin-bottom:2rem"><label style="display:block;margin-bottom:0.5rem;font-weight:500">Size</label><select style="width:100%;padding:0.8rem;border:1px solid #e8e4e0;margin-bottom:1rem"><option>Select Size</option><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option></select></div><div style="margin-bottom:2rem"><label style="display:block;margin-bottom:0.5rem;font-weight:500">Color</label><div style="display:flex;gap:1rem"><div style="width:50px;height:50px;background:#f5f1ed;border:2px solid #e8e4e0;cursor:pointer;transition:all 0.3s" onclick="document.querySelectorAll('.color-option').forEach(el=>el.style.borderColor='#e8e4e0');this.style.borderColor='#b8860b'" class="color-option"></div><div style="width:50px;height:50px;background:#4a5568;border:2px solid #e8e4e0;cursor:pointer;transition:all 0.3s" onclick="document.querySelectorAll('.color-option').forEach(el=>el.style.borderColor='#e8e4e0');this.style.borderColor='#b8860b'" class="color-option"></div><div style="width:50px;height:50px;background:#8b7355;border:2px solid #e8e4e0;cursor:pointer;transition:all 0.3s" onclick="document.querySelectorAll('.color-option').forEach(el=>el.style.borderColor='#e8e4e0');this.style.borderColor='#b8860b'" class="color-option"></div><div style="width:50px;height:50px;background:#c41e3a;border:2px solid #e8e4e0;cursor:pointer;transition:all 0.3s" onclick="document.querySelectorAll('.color-option').forEach(el=>el.style.borderColor='#e8e4e0');this.style.borderColor='#b8860b'" class="color-option"></div></div></div><div style="display:flex;gap:1rem"><button onclick="addProductCart('{name}',{price})" style="flex:1;padding:0.8rem;background:#1a1a1a;color:white;border:none;cursor:pointer;font-weight:500;font-family:Segoe UI,sans-serif">Add to Cart</button><button onclick="addToWishlist(this,'{name}')" style="flex:1;padding:0.8rem;background:white;border:1px solid #e8e4e0;cursor:pointer;font-weight:500;font-family:Segoe UI,sans-serif">♡ Wishlist</button></div></div></div></section><section style="max-width:900px;margin:4rem auto;padding:0 2rem"><h2 style="font-family:Garamond,serif;font-size:2rem;margin-bottom:2rem">Customer Reviews</h2><div style="padding:1.5rem;border:1px solid #e8e4e0;margin-bottom:1rem"><h4 style="margin:0;font-family:Garamond,serif">Excellent Quality</h4><p style="color:#b8860b;margin:0.5rem 0">★ ★ ★ ★ ★</p><p style="color:#555;line-height:1.6">Outstanding craftsmanship and beautiful design. Exceeded my expectations in every way.</p></div><div style="padding:1.5rem;border:1px solid #e8e4e0;margin-bottom:1rem"><h4 style="margin:0;font-family:Garamond,serif">Highly Recommend</h4><p style="color:#b8860b;margin:0.5rem 0">★ ★ ★ ★ ★</p><p style="color:#555;line-height:1.6">True luxury at its finest. Worth every penny and will last for years.</p></div></section><footer class="footer"><div class="footer-content"><div class="footer-section"><h4>LUMIÈRE</h4><p>Luxury fashion for those who understand true elegance.</p></div><div class="footer-section"><h4>Collections</h4><ul><li><a href="../pages/women.html">Women</a></li><li><a href="../pages/men.html">Men</a></li><li><a href="../pages/kids.html">Kids</a></li></ul></div><div class="footer-section"><h4>Company</h4><ul><li><a href="../pages/about.html">About Us</a></li><li><a href="../pages/contact.html">Contact</a></li></ul></div></div><div class="footer-bottom"><p>&copy; 2026 Lumière. All rights reserved.</p></div></footer><script src="../js/script.js"></script><script>function addProductCart(n,p){{let c=JSON.parse(localStorage.getItem('cart'))||[];let e=c.find(i=>i.name===n);if(e){{e.quantity++}}else{{c.push({{name:n,price:p,quantity:1}})}}localStorage.setItem('cart',JSON.stringify(c));if(typeof updateCartCount==='function'){{updateCartCount()}}if(typeof showAddedNotification==='function'){{showAddedNotification()}}}}function addToWishlist(btn,n){{let w=JSON.parse(localStorage.getItem('wishlist'))||[];if(w.find(i=>i===n)){{w=w.filter(i=>i!==n);btn.textContent='♡ Wishlist';btn.style.color='#888'}}else{{w.push(n);btn.textContent='♥ In Wishlist';btn.style.color='#b8860b'}}localStorage.setItem('wishlist',JSON.stringify(w))}}</script></body></html>'''

# Get all product files
for html_file in sorted(products_dir.glob('*.html')):
    if html_file.name == 'merino-wool-sweater.html':
        continue  # Skip, already updated
    
    filename = html_file.stem
    with open(html_file, 'r') as f:
        content = f.read()
    
    # Extract product name and price from current file
    name_match = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    price_match = re.search(r'\$(\d+(?:,\d+)*)', content)
    collection_match = re.search(r"<p[^>]*>([^<]*(Women|Men|Kids)[^<]*)</p>", content)
    
    if name_match:
        name = name_match.group(1).strip()
        price = int(price_match.group(1).replace(',', '')) if price_match else 300
        collection = collection_match.group(1).strip() if collection_match else "Women's"
        
        # Create new content
        new_content = template.format(name=name, price=price, collection=collection)
        
        # Write updated file
        with open(html_file, 'w') as f:
            f.write(new_content)
        
        print(f"✓ Updated: {filename} - {name}")

print("\n✅ All product pages updated!")
