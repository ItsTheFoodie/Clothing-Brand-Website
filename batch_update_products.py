#!/usr/bin/env python3
import os
import re
from pathlib import Path

products_dir = Path("/workspaces/Clothing-Brand-Website/products")

# List of products to skip (already updated)
skip_files = {"merino-wool-sweater.html", "classic-blazer.html"}

def extract_product_info(filepath):
    """Extract product name and price from file"""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Extract from title or h1
    title_match = re.search(r'<title>([^|]+)\|', content)
    h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    product_name = h1_match.group(1) if h1_match else title_match.group(1).strip() if title_match else "Product"
    
    # Extract price
    price_match = re.search(r'\$(\d+)', content)
    price = int(price_match.group(1)) if price_match else "99"
    
    # Extract collection/description
    collection_match = re.search(r'<p[^>]*style="color:#888"[^>]*>([^<]+)</p>', content)
    collection = collection_match.group(1) if collection_match else "Collection"
    
    desc_match = re.search(r'<p>([^<]*[a-z][^<]*)</p>', content)
    description = desc_match.group(1) if desc_match and len(desc_match.group(1)) > 20 else "Premium fashion item"
    
    review_match = re.search(r'\((\d+) reviews\)', content)
    review_count = review_match.group(1) if review_match else "100"
    
    return product_name, price, collection, description, review_count

def generate_product_page(product_name, price, collection, description, review_count):
    """Generate full product page HTML with color-change functionality"""
    gradient1 = "linear-gradient(135deg, #f5f1ed 0%, #e8dfd0 100%)"  # cream
    gradient2 = "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)"  # black
    gradient3 = "linear-gradient(135deg, #4a5568 0%, #3a4558 100%)"  # navy
    
    html = f"""<!DOCTYPE html><html><head><title>{product_name} | Lumière</title><link rel="stylesheet" href="../css/styles.css"></head><body><nav class="navbar"><div class="nav-container"><div class="logo"><a href="../index.html">LUMIÈRE</a></div><ul class="nav-menu"><li><a href="../pages/women.html">Women</a></li><li><a href="../pages/men.html">Men</a></li><li><a href="../pages/kids.html">Kids</a></li><li><a href="../pages/occasions.html">Occasions</a></li><li><a href="../pages/about.html">About</a></li><li><a href="../pages/contact.html">Contact</a></li></ul><div class="nav-icons"><a href="#" class="icon">Search</a><a href="#" class="icon">Cart</a></div></div></nav><section style="max-width:900px;margin:3rem auto;padding:0 2rem"><div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-bottom:4rem"><div id="productImage" style="height:500px;background:{gradient1};border:1px solid #e8e4e0;transition:all 0.3s ease"></div><div><h1 style="font-family:Garamond,serif;font-size:2.5rem;margin:0">{product_name}</h1><p style="color:#888">{collection}</p><div style="margin:1.5rem 0"><div style="color:#b8860b;font-size:1.2rem">★ ★ ★ ★ ★</div><span style="color:#888">({review_count} reviews)</span><p style="font-family:Garamond,serif;font-size:2rem;margin:1rem 0 0 0;color:#1a1a1a">${price}</p></div><div style="margin-bottom:2rem"><h3 style="font-family:Garamond,serif;margin:0 0 1rem 0">Description</h3><p style="color:#555;line-height:1.8">{description}</p></div><div style="margin-bottom:2rem"><label style="display:block;margin-bottom:0.5rem;font-weight:500">Size</label><select style="width:100%;padding:0.8rem;border:1px solid #e8e4e0;margin-bottom:1rem"><option>Select Size</option><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option></select></div><div style="margin-bottom:2rem"><label style="display:block;margin-bottom:0.5rem;font-weight:500">Color</label><div style="display:flex;gap:1rem"><div style="width:50px;height:50px;background:#f5f1ed;border:3px solid #b8860b;cursor:pointer" onclick="changeColor('cream','{gradient1}')" class="color-option" title="Cream"></div><div style="width:50px;height:50px;background:#1a1a1a;border:2px solid #e8e4e0;cursor:pointer" onclick="changeColor('black','{gradient2}')" class="color-option" title="Black"></div><div style="width:50px;height:50px;background:#4a5568;border:2px solid #e8e4e0;cursor:pointer" onclick="changeColor('navy','{gradient3}')" class="color-option" title="Navy"></div></div></div><div style="display:flex;gap:1rem"><button onclick="addProductCart('{product_name}',{price})" style="flex:1;padding:0.8rem;background:#1a1a1a;color:white;border:none;cursor:pointer;font-weight:500;font-family:Segoe UI,sans-serif">Add to Cart</button><button onclick="addToWishlist(this,'{product_name}')" style="flex:1;padding:0.8rem;background:white;border:1px solid #e8e4e0;cursor:pointer;font-weight:500;font-family:Segoe UI,sans-serif">♡ Wishlist</button></div></div></div></section><section style="max-width:900px;margin:4rem auto;padding:0 2rem"><h2 style="font-family:Garamond,serif;font-size:2rem;margin-bottom:2rem">Customer Reviews</h2><div style="padding:1.5rem;border:1px solid #e8e4e0;margin-bottom:1rem"><h4 style="margin:0;font-family:Garamond,serif">Exceptional Quality</h4><p style="color:#b8860b;margin:0.5rem 0">★ ★ ★ ★ ★</p><p style="color:#555;line-height:1.6">This piece is everything. Perfect quality and exactly what I was looking for.</p></div><div style="padding:1.5rem;border:1px solid #e8e4e0;margin-bottom:1rem"><h4 style="margin:0;font-family:Garamond,serif">Highly Recommend</h4><p style="color:#b8860b;margin:0.5rem 0">★ ★ ★ ★ ★</p><p style="color:#555;line-height:1.6">Great fit and premium materials. Worth the investment.</p></div></section><footer class="footer"><div class="footer-content"><div class="footer-section"><h4>LUMIÈRE</h4><p>Luxury fashion for those who understand true elegance.</p></div><div class="footer-section"><h4>Collections</h4><ul><li><a href="../pages/women.html">Women</a></li><li><a href="../pages/men.html">Men</a></li><li><a href="../pages/kids.html">Kids</a></li></ul></div><div class="footer-section"><h4>Company</h4><ul><li><a href="../pages/about.html">About Us</a></li><li><a href="../pages/contact.html">Contact</a></li></ul></div></div><div class="footer-bottom"><p>&copy; 2026 Lumière. All rights reserved.</p></div></footer><script src="../js/script.js"></script><script>function changeColor(name,gradient){{document.getElementById('productImage').style.background=gradient;document.querySelectorAll('.color-option').forEach(el=>el.style.borderColor='#e8e4e0');event.target.style.borderColor='#b8860b'}}function addProductCart(n,p){{let c=JSON.parse(localStorage.getItem('cart'))||[];let e=c.find(i=>i.name===n);if(e){{e.quantity++}}else{{c.push({{name:n,price:p,quantity:1}})}}localStorage.setItem('cart',JSON.stringify(c));if(typeof updateCartCount==='function'){{updateCartCount()}}if(typeof showAddedNotification==='function'){{showAddedNotification()}}}}function addToWishlist(btn,n){{let w=JSON.parse(localStorage.getItem('wishlist'))||[];if(w.find(i=>i===n)){{w=w.filter(i=>i!==n);btn.textContent='♡ Wishlist';btn.style.color='#888'}}else{{w.push(n);btn.textContent='♥ In Wishlist';btn.style.color='#b8860b'}}localStorage.setItem('wishlist',JSON.stringify(w))}}</script></body></html>"""
    
    return html

# Process all product files
updated_count = 0
for html_file in sorted(products_dir.glob("*.html")):
    if html_file.name in skip_files:
        print(f"⏭️  Skipping {html_file.name} (already updated)")
        continue
    
    try:
        product_name, price, collection, description, review_count = extract_product_info(html_file)
        html_content = generate_product_page(product_name, price, collection, description, review_count)
        
        with open(html_file, 'w') as f:
            f.write(html_content)
        
        print(f"✅ Updated: {html_file.name} - {product_name} (${price})")
        updated_count += 1
    except Exception as e:
        print(f"❌ Error updating {html_file.name}: {e}")

print(f"\n🎉 Successfully updated {updated_count} product pages!")
