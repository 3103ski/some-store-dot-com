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