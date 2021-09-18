import { makeEl, imgEl, createStyleLink } from '../../util/helperFunctions.js'
import {products} from '../../data/products.js';

export class ProductPage extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow( {mode: 'open'} );
        const style = createStyleLink('productPage');
        shadow.appendChild(style)

        const pageWrapper = makeEl('div', 'product-page-wrapper');
        // image side
        const imgWrapper = makeEl('div', 'product-img-wrapper');
        
        // details
        const detailsWrapper = makeEl('div', 'product-details-wrapper');
        const cartWrapper = makeEl('div', 'product-cart-wrapper');
        
        const title = makeEl('h1', null, 'product-title');
        const mobileTitle = makeEl('h1', null, 'mobile-title');
        const desc = makeEl('p', null, 'product-description');
        const price = makeEl('h5', null, 'product-price');

        // cart elements container
        const cartInput = makeEl('div', 'product-cart-inputs');
        const addBtn = imgEl('add.png', 'add', 'product-add-btn');
        const minusBtn = imgEl('minus.png', 'mins', 'product-minus-btn');
        const countInput = makeEl('input', null, 'product-count-input')

        cartWrapper.appendChild(price);
        cartWrapper.appendChild(cartInput)

        pageWrapper.appendChild(mobileTitle)
        pageWrapper.appendChild(imgWrapper);
        pageWrapper.appendChild(detailsWrapper);

        cartInput.appendChild(minusBtn)
        cartInput.appendChild(countInput)
        cartInput.appendChild(addBtn)
        
        detailsWrapper.appendChild(title);
        detailsWrapper.appendChild(desc);
        detailsWrapper.appendChild(cartWrapper);

        shadow.appendChild(pageWrapper);

    }
    
    connectedCallback() {
        const cart = document.querySelector('nav-cart');
        const input = this.shadowRoot.querySelector('input');

        products.map(p => {
            if (p.id === parseInt(this.getAttribute('id'))) {
                const img = imgEl(p.img, `${p.title} img`, 'product-img');    
                input.value = cart.getItemQty(p);

                this.shadowRoot.querySelector('.product-add-btn').addEventListener('click', () => {
                    if (cart) {
                        cart.addCartItem(p);
                        input.value = parseInt(input.value) + 1;
                    }
                })

                this.shadowRoot.querySelector('.product-minus-btn').addEventListener('click', () => {
                    if (cart) {
                        cart.removeCartItem(p);
                        if (input.value > 0){
                            input.value = parseInt(input.value) - 1;
                        } else {
                            input.value = 0;
                        }
                    }
                })

                this.shadowRoot.querySelector('.product-img-wrapper').appendChild(img);
                this.shadowRoot.getElementById('product-title').innerText = p.title
                this.shadowRoot.getElementById('mobile-title').innerText = p.title
                this.shadowRoot.getElementById('product-description').innerText = p.description
                this.shadowRoot.getElementById('product-price').innerText = `$${p.price}`
            }
        })
    }
}

customElements.define('product-page', ProductPage);