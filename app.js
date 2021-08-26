function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //    update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
};
// SubTotal Part
function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone')*1219;
    const caseTotal = getInputValue('case')*59;
    const subTotal = phoneTotal+caseTotal;
    document.getElementById('sub-total').innerText=subTotal;
    // Tax calculation
    const tax = parseFloat((subTotal * (10/100)).toFixed('3'));
    document.getElementById('tax-amount').innerText=tax;
    const grandTotal = subTotal + parseFloat(tax);
    document.getElementById('total-price').innerText=grandTotal;
};
// Handle phone increse decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});
// Handle case increse decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});