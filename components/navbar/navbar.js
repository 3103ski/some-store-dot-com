
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
        let shadow = this.shadowRoot({mode: 'open'})
        let rootpage = document.querySelector('nav-bar').getAttribute('rootpage');
        let style = createStyleLink('navbar', rootpage ? null : 1);
        
        let container = makeEl('div', 'nav-cart-container');
    }
}

export class Navbar extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        let rootpage = document.querySelector('nav-bar').getAttribute('rootpage');
        let style = createStyleLink('navbar', rootpage ? null : 1);

        shadow.appendChild(containerTemplate.content.cloneNode(true));
        shadow.appendChild(style)
    }
    
}

export class Navlink extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});
        let rootpage = document.querySelector('nav-bar').getAttribute('rootpage');
        let style = createStyleLink('navbar', rootpage ? null : 1);

        shadow.appendChild(linkTemplate.content.cloneNode(true));
        shadow.appendChild(style)

        let a = shadow.querySelector('a')
        a.innerText = this.getAttribute('name');
        a.route = this.getAttribute('to')
    }
}

customElements.define('nav-link', Navlink);
customElements.define('nav-bar', Navbar);