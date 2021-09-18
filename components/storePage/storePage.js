import { createStyleLink, makeEl, imgEl} from '../../util/helperFunctions.js';
import { products } from '../../data/products.js';

export class StorePage extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow( {mode: 'open' });
        const wrapper = makeEl('div', 'store-page-wrapper');

        const productsSlot = makeEl('slot');
        productsSlot.setAttribute('name', 'products')

        shadow.appendChild(wrapper);
        wrapper.appendChild(productsSlot)

    }

    connectedCallback() {
        const page = document.querySelector('.store-page-wrapper');

        const products = makeEl('products-container', 'products-list-container');
        products.setAttribute('slot', 'products');
        
        page.appendChild(products)
    }
}

export class ProductContainer extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const style = createStyleLink('storePage');
        const wrapper = makeEl('div', 'products-list-container');
        const productSlot = makeEl('slot');

        wrapper.setAttribute('slot', 'products')
        productSlot.setAttribute('name', 'product');

        wrapper.appendChild(productSlot);
        shadow.appendChild(wrapper)
        shadow.appendChild(style);
    }

    connectedCallback() {
        products.map(p => {
            let pEl = document.createElement('product-card');
            let container = document.querySelector('.products-list-container');

            pEl.setAttribute('slot', 'product');
            pEl.setAttribute('data-img', p.img)
            pEl.setAttribute('data-title', p.title);
            pEl.setAttribute('data-description', p.description);
            pEl.setAttribute('data-price', p.price);
            pEl.setAttribute('data-id', p.id);

            container.appendChild(pEl);
        })
    }
}
export class ProductCard extends HTMLElement {
    constructor(){
        super();
        
        // setup shadow DOM
        const shadow = this.attachShadow({ mode: 'open' })
        const style = createStyleLink('storePage')
        shadow.appendChild(style)

        // create elements
        const mainWrapper = makeEl('div', 'store-product-card');
        const imgWrapper = makeEl('div', 'product-wrapper-img');
        imgWrapper.setAttribute('route', '/store/1')        

        const textWrapper = makeEl('div', 'product-wrapper-text');
        const topText = makeEl('div', 'product-text-top');
        const bottomText = makeEl('div', 'product-text-bottom');

        const title = makeEl('h1', 'store-product-title');
        const price = makeEl('h4', 'store-product-price');
        const description = makeEl('p', 'store-product-description');


        
        
        // assemble elements
        shadow.appendChild(mainWrapper);
        
        mainWrapper.appendChild(imgWrapper);
        mainWrapper.appendChild(textWrapper);
        
        textWrapper.appendChild(topText)
        textWrapper.appendChild(bottomText)
        
        topText.appendChild(title);
        topText.appendChild(price);
        
        bottomText.appendChild(description);

    }

    connectedCallback() {
        const router = document.querySelector('b-router');
        let img = imgEl(this.getAttribute('data-img'), this.getAttribute('data-title'), 'product-img');
        let price = this.shadowRoot.querySelector('.store-product-price');
        let description = this.shadowRoot.querySelector('.store-product-description');
        let title = this.shadowRoot.querySelector('.store-product-title');
        
        price.textContent = `${this.getAttribute('data-price')}`;
        description.textContent = `${this.getAttribute('data-description')}`;
        title.textContent = `${this.getAttribute('data-title')}`;
        
        this.shadowRoot.querySelector('.product-wrapper-img').appendChild(img)
        this.addEventListener('click', () => {
            router.navigate(`/store/${this.getAttribute('data-id')}`)
        })

    }
}

customElements.define('store-page', StorePage)
customElements.define('products-container', ProductContainer)
customElements.define('product-card', ProductCard)

