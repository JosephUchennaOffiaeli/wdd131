#!/usr/bin/env python3
"""Download LDS temple images from Wikimedia Commons"""

import urllib.request
import os
import time
from pathlib import Path

# Temple image URLs from Wikimedia Commons
temples = {
    'salt_lake_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Salt_Lake_Temple%2C_Utah_-_Sept_2004.jpg/1280px-Salt_Lake_Temple%2C_Utah_-_Sept_2004.jpg',
    'nauvoo_illinois_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nauvoo_Temple01.jpg/1280px-Nauvoo_Temple01.jpg',
    'washington_dc_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Washington_D.C._Temple_At_Dusk.jpg/1280px-Washington_D.C._Temple_At_Dusk.jpg',
    'san_diego_california_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2019_San_Diego_LDS_Temple_1.jpg/1280px-2019_San_Diego_LDS_Temple_1.jpg',
    'laie_hawaii_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/LDS_Laie_Hawaii_Temple_front_view.jpg/1280px-LDS_Laie_Hawaii_Temple_front_view.jpg',
    'jordan_river_utah_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jordan_River_Temple.jpg/1280px-Jordan_River_Temple.jpg',
    'st_george_utah_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/St._George_Utah_Temple_2023-10-02.jpg/1280px-St._George_Utah_Temple_2023-10-02.jpg',
    'mesa_arizona_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Mesa_Temple.jpg/1280px-Mesa_Temple.jpg',
    'rome_italy_temple.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/RomeTempleatSunset.jpg/1280px-RomeTempleatSunset.jpg',
}

output_dir = Path(__file__).parent.parent / 'images' / 'temples'
output_dir.mkdir(parents=True, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for filename, url in temples.items():
    filepath = output_dir / filename
    if filepath.exists():
        print(f'✓ {filename} already exists')
        continue
    
    print(f'Downloading {filename}...', end=' ', flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as response:
            data = response.read()
            with open(filepath, 'wb') as f:
                f.write(data)
        print(f'OK ({len(data)} bytes)')
    except Exception as e:
        print(f'ERROR: {e}')
    
    time.sleep(4)  # Rate limiting: wait 4 seconds between requests

print('\nDone!')
print(f'Files in {output_dir}:')
for f in sorted(output_dir.glob('*.jpg')):
    print(f'  {f.name} ({f.stat().st_size} bytes)')
