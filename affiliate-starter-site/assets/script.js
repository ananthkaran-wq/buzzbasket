
// Minimal client-side helpers
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Render product grid if container exists
  const grid = document.getElementById('product-grid');
  if (grid) {
    fetch('assets/products.json')
      .then(r => r.json())
      .then(products => {
        grid.innerHTML = products.map(p => `
          <article class="card">
            <a href="product.html?id=${encodeURIComponent(p.id)}">
              <img src="${p.image}" alt="${p.title}" />
            </a>
            <div class="p">
              <div class="kicker">${p.category}</div>
              <h3><a href="product.html?id=${encodeURIComponent(p.id)}">${p.title}</a></h3>
              <div class="price-row">
                <strong>₹${p.price}</strong>
                ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
              </div>
              <div class="notice">As an affiliate, we may earn if you buy.</div>
            </div>
          </article>
        `).join('');
      });
  }

  // Render single product page
  const productWrap = document.getElementById('product-detail');
  if (productWrap) {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    fetch('assets/products.json')
      .then(r => r.json())
      .then(products => {
        const p = products.find(x => String(x.id) === String(id)) || products[0];
        productWrap.innerHTML = `
          <div class="section">
            <div class="grid" style="grid-template-columns: 1fr 1fr;">
              <div>
                <img src="${p.image}" alt="${p.title}" style="width:100%; height:350px; object-fit:cover; border-radius:12px; border:1px solid #e5e7eb;" />
              </div>
              <div>
                <div class="kicker">${p.category}</div>
                <h1 style="margin-top:6px;">${p.title}</h1>
                <p>${p.description}</p>
                <p><strong>Price:</strong> ₹${p.price}</p>
                <div class="cta">
                  <a class="btn primary" href="${p.affiliate_url}" target="_blank" rel="nofollow noopener">Buy on Partner Site</a>
                  <a class="btn" href="shop.html">Back to Shop</a>
                </div>
                <p class="notice" style="margin-top:10px;">Affiliate Disclosure: We may earn a commission at no extra cost to you.</p>
              </div>
            </div>
          </div>
        `;
      });
  }
});
