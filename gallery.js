 let cartCount = 0;
  const cartCounter = document.createElement('span');
  cartCounter.className = 'badge bg-danger ms-2';
  cartCounter.textContent = cartCount;

  // Add cartCounter to the navbar (e.g., next to Home link)
  const homeLink = document.querySelector('a.nav-link[href="index.html"]');
  if (homeLink) homeLink.appendChild(cartCounter);

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCounter.textContent = cartCount;
      alert('Added to cart!');
    });
  });