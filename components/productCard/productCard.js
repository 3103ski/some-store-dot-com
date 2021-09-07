import { createStyleLink, makeEl, imgEl} from '../../util/helperFunctions.js';

export class ProductCard extends HTMLElement {
    constructor(){
        super();
        
        // setup shadow DOM
        const shadow = this.attachShadow({mode: 'open'})
        const style = createStyleLink('productCard')
        shadow.appendChild(style)

        // create elements
        const mainWrapper = makeEl('div', 'store-product-card');
        const imgWrapper = makeEl('div', 'product-wrapper-img');
        const img = imgEl(this.getAttribute('data-img'), 'blue shirt', 'product-img');

        const textWrapper = makeEl('div', 'product-wrapper-text');
        const topText = makeEl('div', 'product-text-top');
        const bottomText = makeEl('div', 'product-text-bottom');

        const title = makeEl('h1', 'store-product-title');
        const price = makeEl('h4', 'store-product-price');
        const description = makeEl('p', 'store-product-description');

        
        // set elements' data content
        price.textContent = `$${this.getAttribute('data-price')}`;
        title.textContent = this.getAttribute('data-title');
        description.textContent = this.getAttribute('data-description');
        

        // assemble elements
        shadow.appendChild(mainWrapper);

        mainWrapper.appendChild(imgWrapper);
        mainWrapper.appendChild(textWrapper);

        imgWrapper.appendChild(img);
        
        textWrapper.appendChild(topText)
        textWrapper.appendChild(bottomText)

        topText.appendChild(title);
        topText.appendChild(price);

        bottomText.appendChild(description);
    }
}

customElements.define('product-card', ProductCard)