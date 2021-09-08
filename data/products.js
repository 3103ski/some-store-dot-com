const jeansPath = filename => `pants/${filename}`;
const shirtsPath = filename => `shirts/${filename}`;
const shoesPath = filename => `shoes/${filename}`;

export const jeans = [
    {
        title: 'Blue Baggy Jeans',
        tags: ['baggy', 'blue', 'comfortable', 'casual'],
        price: 59.99,
        description: 'Wide leg jeans to dress up or dress down; go out or stay in. They just work.',
        img: jeansPath('jeans-1.jpg')
    },
    {
        title: 'Fitted Light Blues',
        tags: ['slim', 'light blue', 'comfortable', 'casual'],
        price: 43.99,
        description: 'The look tight, but feel right. No matter the top, it will look great.',
        img: jeansPath('jeans-2.jpg')
    },
    {
        title: 'High Waist',
        tags: ['slim', 'blue', 'comfortable', 'high waist'],
        price: 39.99,
        description: 'Everything you would look for in some high waist jeans',
        img: jeansPath('jeans-3.jpg')
    },
    {
        title: 'Dark Fitted',
        tags: ['slim', 'black', 'comfortable', 'casual'],
        price: 79.99,
        description: 'Dressy but classy, grab your favorite button up.',
        img: jeansPath('jeans-4.jpg')
    },
]

const shirts = [
    {
        title: 'Blue Shirt',
        tags: ['fitted', 'blue', 'comfortable', 'casual'],
        price: 9.99,
        description: 'Classic blue tees',
        img: shirtsPath('shirt-1.jpeg')
    },
    {
        title: 'Aqua Tee',
        tags: ['slim', 'aqua', 'comfortable', 'casual'],
        price: 13.99,
        description: 'Fleible comfy tee shirt',
        img: shirtsPath('shirt-2.jpg')
    },
    {
        title: 'Tan',
        tags: ['soft', 'tan', 'comfortable'],
        price: 19.99,
        description: 'The most comfortable shirt ever',
        img: shirtsPath('shirt-3.png')
    },
    {
        title: 'Sports Shirt',
        tags: ['slim', 'pattern', 'athletic'],
        price: 29.99,
        description: 'Get your workout on in something that breathes.',
        img: shirtsPath('shirt-4.jpg')
    },
]

export const products = [...jeans, ...shirts];