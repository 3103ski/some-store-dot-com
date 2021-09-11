import { createStyleLink, makeEl, imgEl} from '../../util/helperFunctions.js';
import { products } from '../../data/products.js';

export class ProductContainer extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const style = createStyleLink('productCard');
        const wrapper = makeEl('div', 'product-list-container');
        const productSlot = makeEl('slot');

        productSlot.setAttribute('name', 'product');

        wrapper.appendChild(productSlot);

        shadow.appendChild(wrapper)
        shadow.appendChild(style);
    }

    connectedCallback() {
        products.map(p => {
            let pEl = document.createElement('product-card');
            let container = document.querySelector('.product-list-container');

            pEl.setAttribute('slot', 'product');
            pEl.setAttribute('data-img', p.img)
            pEl.setAttribute('data-title', p.title);
            pEl.setAttribute('data-description', p.description);
            pEl.setAttribute('data-price', p.price);


            container.appendChild(pEl);
        })
    }
}
export class ProductCard extends HTMLElement {
    constructor(){
        super();
        
        // setup shadow DOM
        const shadow = this.attachShadow({mode: 'open'})
        const style = createStyleLink('productCard')
        shadow.appendChild(style)

        // create elements
        const mainWrapper = makeEl('div', 'store-product-card');
        const imgWrapper = makeEl('a', 'product-wrapper-img');
        

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
        let img = imgEl(this.getAttribute('data-img'), this.getAttribute('data-title'), 'product-img');
        let price = this.shadowRoot.querySelector('.store-product-price');
        let description = this.shadowRoot.querySelector('.store-product-description');
        let title = this.shadowRoot.querySelector('.store-product-title');
        
        this.shadowRoot.querySelector('.product-wrapper-img').appendChild(img)
        price.textContent = `${this.getAttribute('data-price')}`;
        description.textContent = `${this.getAttribute('data-description')}`;
        title.textContent = `${this.getAttribute('data-title')}`;

    }
}


customElements.define('page-store', ProductContainer)
customElements.define('product-card', ProductCard)

