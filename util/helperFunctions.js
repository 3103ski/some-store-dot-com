export const createStyleLink = (filename) => {
    const path = `css/${filename}/${filename}.css`;
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