function gladiatorExpences(lostFightsCount, helmetPrice,
    swordPrice, shieldPrice, armorPrice) {

    let price = 0;

    for (let currentFight = 1; currentFight <= lostFightsCount; currentFight++) {
        if (currentFight % 2 === 0) {
            price += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            price += swordPrice;
        }
        if (currentFight % 6 === 0) {
            price += shieldPrice;
        }
        if (currentFight % 12 === 0) {
            price += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
gladiatorExpences(7, 2, 3, 4, 5)
gladiatorExpences(23, 12.50, 21.50, 40, 200)