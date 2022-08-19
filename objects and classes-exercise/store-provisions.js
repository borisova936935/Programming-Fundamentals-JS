function storeProvisions(availableStock, deliveredStock) {
    let storeProducts = {};

    for (let i = 0; i < availableStock.length; i += 2) {
        let currentProduct = availableStock[i];
        
        storeProducts[currentProduct] = Number(availableStock[i + 1]);
    }
    
    for (let i = 0; i < deliveredStock.length; i += 2) {
        let currentProduct = deliveredStock[i];
        
        if (!storeProducts.hasOwnProperty(currentProduct)) {
            storeProducts[currentProduct] = 0;
        }

        storeProducts[currentProduct] += Number(deliveredStock[i + 1]);
    }
    
    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }
}
storeProvisions(
    [
        'Chips', '5',
        'CocaCola', '9',
        'Bananas', '14',
        'Pasta', '4',
        'Beer', '2'
    ],
    [
        'Flour', '44',
        'Oil', '12',
        'Pasta', '7',
        'Tomatoes', '70',
        'Bananas', '30'
    ]);
storeProvisions(
    [
        'Salt', '2',
        'Fanta', '4',
        'Apple', '14',
        'Water', '4',
        'Juice', '5'
    ],
    [
        'Sugar', '44',
        'Oil', '12',
        'Apple', '7',
        'Tomatoes', '7',
        'Bananas', '30'
    ]);