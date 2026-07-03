document.addEventListener('DOMContentLoaded', () => {
    // 1. Intercept Add to Cart
    const forms = document.querySelectorAll('form[action*="/cart/add"], form[data-type="add-to-cart-form"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            
            // Extract data
            const titleElement = document.querySelector('h1') || document.querySelector('.product__title');
            const title = titleElement ? titleElement.innerText.trim() : 'Unknown Product';
            
            const priceElement = document.querySelector('.price-item--regular') || document.querySelector('.price__regular .price-item');
            const priceText = priceElement ? priceElement.innerText.trim() : '0';
            const price = parseFloat(priceText.replace(/[^\d.]/g, '')) || 0;
            
            const variantInput = form.querySelector('input[name="id"]');
            const variantId = variantInput ? variantInput.value : Date.now().toString();
            
            const activeVariant = document.querySelector('fieldset input:checked');
            const variantTitle = activeVariant ? activeVariant.value : 'Default Title';
            
            const imageElement = document.querySelector('.product__media img') || document.querySelector('img');
            const image = imageElement ? imageElement.src : '';
            
            const quantityInput = form.querySelector('input[name="quantity"]');
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            
            const item = { id: variantId, title: title, variantTitle: variantTitle, price: price, image: image, quantity: quantity };
            
            let cart = JSON.parse(localStorage.getItem('postering_cart') || '[]');
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += item.quantity;
            } else {
                cart.push(item);
            }
            
            localStorage.setItem('postering_cart', JSON.stringify(cart));
            window.location.href = '/www.posterized.in/cart.html';
        });
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                form.dispatchEvent(new Event('submit', { cancelable: true }));
            });
        }
    });
    
    // 2. Render Cart on cart.html
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
});

function renderCart() {
    let cart = JSON.parse(localStorage.getItem('postering_cart') || '[]');
    const isCartEmpty = cart.length === 0;
    
    const cartWarnings = document.querySelector('.cart__warnings');
    const formMain = document.getElementById('cart') || document.querySelector('form.cart__contents');
    
    if (cartWarnings) cartWarnings.style.display = isCartEmpty ? 'block' : 'none';
    
    if (!formMain) return;
    
    if (isCartEmpty) {
        formMain.style.display = 'none';
        const checkoutMain = document.getElementById('main-cart-footer');
        if (checkoutMain) checkoutMain.style.display = 'none';
        return;
    } else {
        const checkoutMain = document.getElementById('main-cart-footer');
        if (checkoutMain) checkoutMain.style.display = 'block';
    }
    
    formMain.style.display = 'block';
    const tbody = formMain.querySelector('tbody') || formMain;
    if (!tbody) return;
    
    const existingItems = tbody.querySelectorAll('.cart-item');
    existingItems.forEach(el => el.remove());
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const tr = document.createElement(tbody.tagName.toLowerCase() === 'tbody' ? 'tr' : 'div');
        tr.className = 'cart-item';
        tr.innerHTML = `
            <td class="cart-item__media">
                ${item.image ? `<img src="${item.image}" alt="${item.title}" class="cart-item__image" width="100">` : ''}
            </td>
            <td class="cart-item__details">
                <a href="#" class="cart-item__name h4 break">${item.title}</a>
                <div class="product-option">${item.variantTitle !== 'Default Title' ? item.variantTitle : ''}</div>
                <div class="cart-item__price-wrapper">
                    <span class="price price--end">Rs. ${item.price.toFixed(2)}</span>
                </div>
            </td>
            <td class="cart-item__quantity">
                <div class="cart-item__quantity-wrapper">
                    <span style="padding: 1rem;">Qty: ${item.quantity}</span>
                    <cart-remove-button>
                        <a href="#" class="button button--tertiary" onclick="removeCartItem(${index}); return false;">Remove</a>
                    </cart-remove-button>
                </div>
            </td>
            <td class="cart-item__totals right">
                <div class="cart-item__price-wrapper">
                    <span class="price price--end">Rs. ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    const subtotalElements = document.querySelectorAll('.totals__subtotal-value');
    subtotalElements.forEach(el => {
        el.innerText = 'Rs. ' + total.toFixed(2);
    });
}

window.removeCartItem = function(index) {
    let cart = JSON.parse(localStorage.getItem('postering_cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('postering_cart', JSON.stringify(cart));
    renderCart();
};
