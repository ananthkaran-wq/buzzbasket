
# AffiliMate Store — 10-Page Static Site (Wix Ready)

This is a lightweight, mobile-friendly starter you can host anywhere. It’s built so you can copy sections into Wix quickly, or host externally and point your Wix site to these pages.

## Files
- `index.html` — Home
- `shop.html` — Product grid (reads from `assets/products.json`)
- `product.html` — Product detail (reads `?id=` from URL)
- `categories.html`, `blog.html`, `about.html`, `contact.html`, `faq.html`, `privacy.html`, `terms.html`
- `assets/products.json` — Update titles, images, prices, and `affiliate_url`
- `assets/styles.css` — Styles
- `assets/script.js` — JS

## How to use with Wix (fastest path)
1. **Create a new Wix site** (Business/Store > Content Creator template is fine).
2. For each page you want to mirror, **add a Section** in Wix and copy/paste the text from the matching HTML.
3. For product grids, either:
   - Use **Wix Stores** and add products with your **affiliate links** as the “Buy” URL, **or**
   - Add a **Repeater** in Wix and bind fields to a simple Wix CMS collection (Title, Image, Price, Category, Affiliate URL).
4. On product pages, set the **Buy** button to open your affiliate URL in a new tab and mark as **nofollow**.
5. If you prefer hosting this static site externally, in Wix add a page > **Embed** > **Embed a site**, and paste the hosted URL.

## Replace demo products
Edit `assets/products.json`. Example item:
```json
{ "id": 201, "title": "Tripod", "category": "Creator Gear", "price": "1,199", "badge": "New", "image": "assets/img/your-tripod.jpg", "affiliate_url": "https://your-aff-link", "description": "Solid starter tripod." }
```

> Tip: Keep filenames and IDs stable so your product links in Reels/Bio don’t break.

— Enjoy!
