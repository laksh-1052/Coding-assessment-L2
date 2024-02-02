function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`${tabId}Content`).classList.add('active');
    document.getElementById(`${tabId}Tab`).classList.add('active');
}
const currentPrices = [1199, 2199, 1399, 599, 1199, 199, 1399, 1599, 1199, 2199, 1399, 599];
const comparePrices = [1299, 4299, 1499, 799, 1299, 299, 1499, 1799, 1399, 4299, 1499, 799];

function calculateDiscount(currentPrice, comparePrice) {
    const discount = ((comparePrice - currentPrice) / comparePrice) * 100;
    return discount.toFixed(0);
}

for (let j = 0; j < 12; j++) {
    for (let k = 0; k < 12; k++) {
        const discountResult = calculateDiscount(currentPrices[j], comparePrices[j]); 
        const discountResultElement = document.getElementById('discountResult' + (j + 1)); 
        if (discountResultElement && discountResultElement.id === 'discountResult' + (j + 1)) {
            discountResultElement.textContent = `${discountResult}% off`;
        }
    }
}


