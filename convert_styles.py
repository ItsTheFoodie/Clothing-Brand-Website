#!/usr/bin/env python3
"""
Script to convert inline styles to CSS classes in HTML files.
This script processes all HTML files and replaces common inline styles with class names.
"""

import os
import re
from pathlib import Path

# Define style to class mappings
STYLE_MAPPINGS = {
    # Sections and containers
    r'style="max-width:800px;margin:3rem auto;padding:0 2rem"': 'class="max-width-800"',
    r'style="max-width:900px;margin:3rem auto;padding:0 2rem"': 'class="max-width-900"',
    r'style="max-width:1100px;margin:3rem auto;padding:0 1rem"': 'class="main-content"',
    r'style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-bottom:4rem"': 'class="grid-2col"',
    
    # Product image boxes
    r'style="height:500px;background:linear-gradient\(135deg, #[a-f0-9]+ 0%, #[a-f0-9]+ 100%\);border:1px solid #e8e4e0;transition:all 0.3s ease"': 'class="product-image-box" style="background:linear-gradient(135deg, #f5f1ed 0%, #e8dfd0 100%)"',
    
    # Section spacing
    r'style="max-width:900px;margin:4rem auto;padding:0 2rem"': 'class="reviews-section"',
    r'style="margin-bottom:2rem"': 'class="page-header-container"',
    r'style="margin:3rem auto;padding:0 2rem"': 'class="max-width-900"',
    r'style="margin:4rem auto;padding:0 2rem"': 'class="reviews-section"',
    
    # Typography
    r'style="font-family:Garamond,serif;font-size:2.5rem;margin:0"': 'class="heading-lg"',
    r'style="font-family:Garamond,serif;font-size:2rem;margin-bottom:2rem"': 'class="heading-md"',
    r'style="font-family:Garamond,serif;margin:0 0 1rem 0"': 'class="heading-sm text-garamond"',
    r'style="font-family:Garamond,serif;font-size:2rem;margin:1rem 0 0 0;color:#1a1a1a"': 'class="price-text"',
    r'style="color:#888"': 'class="text-muted"',
    r'style="color:#b8860b;font-size:1.2rem"': 'class="text-gold-lg"',
    r'style="color:#b8860b"': 'class="text-gold"',
    r'style="color:#555;line-height:1.8"': 'class="text-gray"',
    r'style="color:#555;line-height:1.6"': 'class="text-gray"',
    r'style="color:#666"': 'class="text-muted"',
    r'style="font-family:Garamond,serif"': 'class="text-garamond"',
    r'style="font-family:Garamond,serif;font-weight:500"': 'class="text-garamond" style="font-weight:500"',
    r'style="margin:0;font-family:Garamond,serif"': 'class="text-garamond" style="margin:0"',
    
    # Margins
    r'style="margin:1.5rem 0"': 'class="mt-1-5"',
    r'style="margin-bottom:2rem"': 'class="mb-2"',
    r'style="margin-bottom:1.5rem"': 'class="mb-1-5"',
    r'style="margin-bottom:1rem"': 'class="mb-1"',
    r'style="margin:0.5rem 0"': 'class="mt-0-5"',
    
    # Forms and inputs
    r'style="width:100%;padding:0.8rem;border:1px solid #e8e4e0;font-size:1rem;box-sizing:border-box"': 'class="form-input"',
    r'style="width:100%;padding:0.8rem;border:1px solid #e8e4e0;margin-bottom:1rem"': 'class="form-select"',
    r'style="display:block;margin-bottom:0.5rem;font-weight:500"': 'class="form-label"',
    r'style="width:100%;padding:0.8rem;border:1px solid #e8e4e0;font-size:1rem;font-family:Segoe UI,sans-serif;box-sizing:border-box;min-height:120px;resize:vertical"': 'class="form-textarea"',
    
    # Buttons
    r'style="width:100%;padding:0.8rem;background:#1a1a1a;color:white;border:none;cursor:pointer;font-weight:500;font-size:1rem"': 'class="btn-primary"',
    r'style="width:100%;padding:1rem;background:#1a1a1a;color:#fff;border:0"': 'class="btn-primary"',
    r'style="width:100%;padding:0.8rem;background:white;border:1px solid #e8e4e0;cursor:pointer;font-weight:500;font-size:1rem"': 'class="btn-secondary"',
    r'style="flex:1;padding:0.8rem;background:#1a1a1a;color:white;border:none;cursor:pointer;font-weight:500;font-size:1rem"': 'class="btn-primary"',
    r'style="flex:1;padding:0.8rem;background:white;border:1px solid #e8e4e0;cursor:pointer;font-weight:500;font-size:1rem"': 'class="btn-secondary"',
    
    # Reviews
    r'style="padding:1.5rem;border:1px solid #e8e4e0;margin-bottom:1rem"': 'class="review-card"',
    r'style="padding:2rem;background:#fafafa;border:1px solid #e8e4e0;margin-bottom:3rem"': 'class="review-form"',
    
    # Flexbox containers
    r'style="display:flex;gap:1rem"': 'class="btn-group"',
    r'style="display:flex;gap:0.5rem"': 'class="stars-container"',
    r'style="display:flex;gap:1rem"': 'class="colors-grid"',
}

def convert_html_file(filepath):
    """Convert inline styles to classes in an HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Apply all style mappings
    for style_pattern, class_replacement in STYLE_MAPPINGS.items():
        content = re.sub(style_pattern, class_replacement, content, flags=re.IGNORECASE)
    
    # Only write if content changed
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Process all HTML files in the project."""
    project_root = Path('/workspaces/Clothing-Brand-Website')
    html_files = list(project_root.glob('**/*.html'))
    
    print(f"Found {len(html_files)} HTML files")
    
    converted_count = 0
    for html_file in html_files:
        # Skip node_modules and similar directories
        if 'node_modules' in str(html_file):
            continue
        
        if convert_html_file(html_file):
            converted_count += 1
            print(f"✓ Converted: {html_file.relative_to(project_root)}")
    
    print(f"\nConversion complete! {converted_count} files were updated.")

if __name__ == '__main__':
    main()
