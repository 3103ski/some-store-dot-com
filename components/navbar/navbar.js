import { createStyleLink, makeEl, imgEl } from '../../util/helperFunctions.js';

const containerTemplate = makeEl('template');
containerTemplate.innerHTML = `
    <div class="nav-container-outer">
        <slot name="link" />
    </div>
`;

const linkTemplate = makeEl('template');
linkTemplate.innerHTML =  `
    <div class="nav-link-outer">
        <a></a>
    </div>
`;

const navCartTemplate = makeEl('template');
navCartTemplate.innerHTML = `
    <div class="nav-cart">
        <img src="/assets/shopping-cart.png" />
    </div>
`;

export class Navcart extends HTMLElement {
    constructor() {
        super();

        this.cartTotal = 0.0;
        this.products = [];
        this.itemQty = 0;

        let shadow = this.attachShadow({mode: 'open'});
        let style = createStyleLink('navbar');
        shadow.appendChild(style);

        let container = makeEl('a', 'nav-cart-container');
        let icon = imgEl('shopping-cart.png', 'cart icon', 'nav-icon-cart');
        let details = makeEl('div', 'nav-cart-details');
        let qty = makeEl('p', 'nav-cart-quantity', 'nav-qty');
        let cartTotal = makeEl('p', 'nav-cart-total', 'nav-total');

        details.appendChild(cartTotal);
        details.appendChild(qty);

        qty.innerText = `(${this.products.length} Items)`;
        cartTotal.innerText = `$${this.cartTotal.toFixed(2)}`;

        container.appendChild(icon);
        container.appendChild(details);
        shadow.appendChild(container);
    }

    getItemQty(product) {
        let foundProduct = this.products.filter(p => p.title === product.title)[0];
        if (foundProduct && foundProduct !== undefined) {
            return foundProduct.qty;
        } else {
            return 0;
        }
    }

    getCartItemQty = () => {
        let qty = 0;
        this.products.map(p => qty += p.qty);
        return parseInt(qty);
    }

    removeCartItem(product) {
        let cartTotalEl = this.shadowRoot.getElementById('nav-total');
        let cartQtyEl = this.shadowRoot.getElementById('nav-qty');
        let updatedCart = this.products;

        if (this.getItemQty(product) > 0) {
            updatedCart = this.products.map(p => {
                if (p.title === product.title) {
                    this.cartTotal -= p.price;
                    if (p.qty > 1) {
                        p.qty -= 1;
                        return p;
                    } else {
                        return null;
                    }
                }
                return p;
            }).filter(p => p !== null);
        }

        this.products = updatedCart;
        this.itemQty = this.getCartItemQty();

        cartQtyEl.innerText = `(${this.itemQty} Items)`;
        if (this.cartTotal > 0.01) {
            cartTotalEl.innerText = `$${this.cartTotal.toFixed(2)}`;
        } else {
            cartTotalEl.innerText = `$0.00`;
        }
    }

    addCartItem(product) {
        let cartTotalEl = this.shadowRoot.getElementById('nav-total');
        let cartQtyEl = this.shadowRoot.getElementById('nav-qty');

        if (this.getItemQty(product) > 0) {
            let updatedCart = this.products.map(i => {
                if (i.title === product.title) {
                    i.qty = i.qty + 1;
                }
                return i;
            })
            this.products = updatedCart;
        } else {
            let newProduct = {
                ...product,
                qty: 1
            }
            this.products = [...this.products, newProduct];
        }

        this.itemQty = this.getCartItemQty();
        this.cartTotal += product.price;

        cartQtyEl.innerText = `(${this.itemQty} Items)`;
        cartTotalEl.innerText = `$${this.cartTotal.toFixed(2)}`;
    }
}

export class Navbar extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        let style = createStyleLink('navbar');

        shadow.appendChild(containerTemplate.content.cloneNode(true));
        shadow.appendChild(style)
    }
    
}

export class Navlink extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        let style = createStyleLink('navbar');

        shadow.appendChild(linkTemplate.content.cloneNode(true));
        shadow.appendChild(style)

        let a = shadow.querySelector('a')
        a.innerText = this.getAttribute('name');
        a.route = this.getAttribute('to')
    }
}

customElements.define('nav-link', Navlink);
customElements.define('nav-bar', Navbar);
customElements.define('nav-cart', Navcart);