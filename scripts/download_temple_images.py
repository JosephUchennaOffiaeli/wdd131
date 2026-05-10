import json
from urllib.request import Request, urlopen
from urllib.parse import urlencode
from pathlib import Path

headers = {
    'User-Agent': 'wdd131-temple-image-downloader/1.0 (contact: user@example.com)'
}

pages = {
    'Salt Lake Temple': 'Salt_Lake_Temple',
    'Nauvoo Illinois Temple': 'Nauvoo_Illinois_Temple',
    'Washington D.C. Temple': 'Washington_D.C._Temple',
    'San Diego California Temple': 'San_Diego_California_Temple',
    'Laie Hawaii Temple': 'Laie_Hawaii_Temple',
    'Jordan River Utah Temple': 'Jordan_River_Temple',
    'St. George Utah Temple': 'St._George_Utah_Temple',
    'Mesa Arizona Temple': 'Mesa_Arizona_Temple',
    'Rome Italy Temple': 'Rome_Italy_Temple'
}

base = 'https://en.wikipedia.org/w/api.php'
images = {}
for name, title in pages.items():
    params = {
        'action': 'query',
        'titles': title,
        'prop': 'pageimages',
        'format': 'json',
        'pithumbsize': '1200'
    }
    url = base + '?' + urlencode(params)
    print('Query', name, url)
    req = Request(url, headers=headers)
    with urlopen(req) as rsp:
        data = json.load(rsp)
    pages_data = data.get('query', {}).get('pages', {})
    for pageid, page in pages_data.items():
        thumb = page.get('thumbnail', {}).get('source')
        images[name] = thumb
        print('  thumbnail:', thumb)
        if not thumb:
            params2 = {
                'action': 'query',
                'titles': title,
                'prop': 'images',
                'format': 'json',
            }
            url2 = base + '?' + urlencode(params2)
            req2 = Request(url2, headers=headers)
            with urlopen(req2) as rsp2:
                data2 = json.load(rsp2)
            images_list = data2.get('query', {}).get('pages', {}).get(pageid, {}).get('images', [])
            for img in images_list:
                if img['title'].lower().endswith(('.jpg', '.jpeg', '.png')) and 'logo' not in img['title'].lower():
                    filetitle = img['title']
                    params3 = {
                        'action': 'query',
                        'titles': filetitle,
                        'prop': 'imageinfo',
                        'iiprop': 'url',
                        'format': 'json',
                    }
                    url3 = base + '?' + urlencode(params3)
                    req3 = Request(url3, headers=headers)
                    with urlopen(req3) as rsp3:
                        data3 = json.load(rsp3)
                    file_pages = data3.get('query', {}).get('pages', {})
                    for fid, fpage in file_pages.items():
                        info = fpage.get('imageinfo', [])
                        if info:
                            images[name] = info[0].get('url')
                            print('  fallback image:', images[name])
                            break
                    break

print(json.dumps(images, indent=2))

for name, src in images.items():
    if src:
        safe = name.lower().replace(' ', '_').replace('.', '').replace('/', '').replace('-', '_')
        filename = Path('images/temples') / f'{safe}.jpg'
        print('Downloading', name, '->', filename)
        req = Request(src, headers=headers)
        with urlopen(req) as resp:
            data = resp.read()
        filename.write_bytes(data)
    else:
        print('MISSING', name)
