let checkProductPrice = prompt('Type product name'); // Milk 

switch (checkProductPrice) {
    case 'milk':
        console.log(`product ${checkProductPrice} cost 1$`);
        break;
    case 'orange':
        console.log(`product ${checkProductPrice} cost 2$`);
        break;
    case 'strawberry':
        console.log(`product ${checkProductPrice} cost 1.5$`);
        break;
    default:
        console.log(`Sorry no information available about ${checkProductPrice}`);
}

checkProductPrice = prompt('New price');

switch (checkProductPrice) {
    case 'milk':
    case 'Milk':
    case 'banana':
        console.log(`product ${checkProductPrice} cost 1$`);
        break;
    case 'dog':
        console.log(`product ${checkProductPrice} cost 100$`);
        break;
    default:
        console.log(`No information available about ${checkProductPrice}`);
}

