import './components/index.js';

import {jeans} from './data/products.js'

(function init(){
    jeans.map(j => {
        const html = `
            <product-card data-title="${j.title}" data-description="${j.description}" data-img=${j.img} data-price="${j.price}" />
        `;
        document.getElementById('app').insertAdjacentHTML('beforeend', html)
    })
})()