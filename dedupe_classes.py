#!/usr/bin/env python3
"""
Final cleanup script to remove duplicate class attributes.
"""

import re
from pathlib import Path

def remove_duplicate_classes(filepath):
    """Remove duplicate class attributes and consolidate them."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Remove duplicate class attributes: class="X" class="X" -> class="X"
    content = re.sub(r'class="([^"]+)"\s+class="\1"', r'class="\1"', content)
    
    # Consolidate classes that appear multiple times
    # Example: class="btn-primary" data-something class="btn-primary" -> class="btn-primary" data-something
    content = re.sub(r'class="([^"]+)"\s+([^>]+?)\s+class="\1"', r'class="\1" \2', content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Process all HTML files."""
    project_root = Path('/workspaces/Clothing-Brand-Website')
    html_files = list(project_root.glob('**/*.html'))
    
    print(f"Removing duplicate class attributes from {len(html_files)} files...")
    
    count = 0
    for html_file in html_files:
        if 'node_modules' in str(html_file):
            continue
        
        if remove_duplicate_classes(html_file):
            count += 1
            if count <= 10:  # Only show first 10
                print(f"✓ {html_file.relative_to(project_root)}")
    
    print(f"\nFixed {count} files with duplicate class attributes.")

if __name__ == '__main__':
    main()
