import {createStyleLink, makeEl} from '../../util/helperFunctions.js';

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

export class Navbar extends HTMLElement {
    constructor() {
        super();
        let shadow =this.attachShadow({mode: 'open'});
        let rootpage = document.querySelector('nav-bar').getAttribute('rootpage');
        let style = createStyleLink('navbar', rootpage ? null : true);
        shadow.appendChild(containerTemplate.content.cloneNode(true));
        shadow.appendChild(style)
    }
    
}

export class Navlink extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        let rootpage = document.querySelector('nav-bar').getAttribute('rootpage');
        let style = createStyleLink('navbar', rootpage ? null : true);
        shadow.appendChild(linkTemplate.content.cloneNode(true));
        shadow.appendChild(style)
        
        let a = shadow.querySelector('a')
        a.innerText = this.getAttribute('name');
        a.href = this.getAttribute('to')
    }
}

customElements.define('nav-link', Navlink);
customElements.define('nav-bar', Navbar);