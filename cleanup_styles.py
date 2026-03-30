#!/usr/bin/env python3
"""
Script to remove remaining inline styles from HTML files.
This cleans up the leftover style attributes that match simple patterns.
"""

import os
import re
from pathlib import Path

# Additional mappings for remaining styles
ADDITIONAL_MAPPINGS = {
    # Product image placeholder
    r'style="height:300px;background:#ddd;border:1px solid #e8e4e0;margin-bottom:2rem"': 'class="product-image-placeholder"',
    
    # Highlight boxes
    r'style="border:1px solid #e8e4e0;padding:1rem;margin:1em 0"': 'class="highlight-box"',
    
    # Rating text
    r'style="color:#b8860b;margin:0.5rem 0"': 'class="rating-display"',
    
    # Heading margin resets
    r'style="margin:0"': 'style=""',  # Remove empty style attributes
    r'\s+style=""': '',  # Remove empty style attributes
    
    # Common combinations
    r'style="font-size:2rem;background:none;border:none;cursor:pointer;opacity:0.3;transition:all 0.2s"': 'class="star-btn"',
}

def clean_html_file(filepath):
    """Remove unnecessary inline styles from an HTML file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Apply additional mappings
    for style_pattern, replacement in ADDITIONAL_MAPPINGS.items():
        content = re.sub(style_pattern, replacement, content)
    
    # Remove empty class attributes
    content = re.sub(r'class=""', '', content)
    
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
    
    print(f"Cleaning up {len(html_files)} HTML files")
    
    cleaned_count = 0
    for html_file in html_files:
        if 'node_modules' in str(html_file):
            continue
        
        if clean_html_file(html_file):
            cleaned_count += 1
            print(f"✓ Cleaned: {html_file.relative_to(project_root)}")
    
    print(f"\nCleanup complete! {cleaned_count} files were updated.")

if __name__ == '__main__':
    main()
