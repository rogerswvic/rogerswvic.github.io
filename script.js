alert("JavaScript is working!");
let totalAmount = 0;

function addItem() {
    const itemSelect = document.getElementById('item');
    const itemName = itemSelect.options[itemSelect.selectedIndex].text;
    const itemValue = parseFloat(itemSelect.value.match(/\d+(\.\d{1,2})?/)[0]);
    const quantity = parseInt(document.getElementById('quantity').value);

    const orderList = document.getElementById('orderList');
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} x ${quantity}`;
    orderList.appendChild(listItem);

    totalAmount += itemValue * quantity;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function placeOrder() {
    if (totalAmount === 0) {
        alert("Your order is empty!");
    } else {
        alert(`Your order total is $${totalAmount.toFixed(2)}. Thank you for ordering!`);
        // Reset order
        document.getElementById('orderList').innerHTML = '';
        document.getElementById('totalAmount').textContent = '0.00';
        totalAmount = 0;
    }
}
