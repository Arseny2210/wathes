// Получили товары(все) с LS

// Получили корзину


const renderCart = (cart, products) => {
    doProductsAction(cart, products, 'renderCart')
}

renderCart(cart, productsData);