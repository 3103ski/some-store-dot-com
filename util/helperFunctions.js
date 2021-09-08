export const createStyleLink = (filename, nested = false) => {
    let path;
    
    if (!nested) {
        path = `css/${filename}/${filename}.css`;
    } else {
        path = `../css/${filename}/${filename}.css`;
    }

    let linkEl = document.createElement('link');

    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', path);

    return linkEl;
};

export const makeEl = (type, className, id) => {
    const el = document.createElement(type);
    if (className) {
        el.setAttribute('class', className);
    }
    if (id) {
        el.setAttribute('id', id)
    }
    return el;
}


export const imgEl = (src, alt, className) => {
    const img = document.createElement('img');
    img.setAttribute('src', `/assets/${src}`);
    img.setAttribute('alt', alt);
    img.setAttribute('class', className);

    return img;
}   


export const updateObj = (obj, update) => {
    return {
        ...obj,
        ...update
    }
}

export function loadGoogleFonts() {
    const docHead = document.querySelector('head');

    const gf1 = document.createElement('link');
    const gf2 = document.createElement('link');
    const gf3 = document.createElement('link');

    gf1.setAttribute('rel', 'preconnect');
    gf1.setAttribute('href', 'https://fonts.googleapis.com');
    gf2.setAttribute('rel', 'preconnect');
    gf2.setAttribute('crossorigin', '');
    gf2.setAttribute('href', 'https://fonts.gstatic.com');
    gf3.setAttribute('rel', 'stylesheet');
    gf3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    docHead.appendChild(gf1)
    docHead.appendChild(gf2)
    docHead.appendChild(gf3)

    const style = document.createElement('style');
    style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    `
    docHead.appendChild(style);
}