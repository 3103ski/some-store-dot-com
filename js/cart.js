const cart = (function(){
    let cartTotal = 0.0;
    let cartItems = [];
    
    function getCartTotal() {
        return cartTotal;
    }

    function getCartItems() {
        return cartItems;
    }

    function addCartItem(item) {
        let hasItem = cartItems.filter(i => i.title === item.title).length > 0;
        if (hasItem) {
            let updatedItems = cartItems.map(i => {
                if (i.title === item.title) {
                    i.qty = i.qty + 1;
                }
                return i;
            })
            cartItems = updatedItems;
        } else {
            let newItem = {
                ...item,
                qty: 1
            }
            cartItems = [...cartItems, newItem];
        }
    }
    console.log('made')
    return {getCartTotal, getCartItems, addCartItem}
})();

export { cart };