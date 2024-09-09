document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const items = document.getElementById('items').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const notes = document.getElementById('notes').value;

    // Display the order summary
    document.getElementById('summaryName').textContent = `Name: ${name}`;
    document.getElementById('summaryItems').textContent = `Order Items: ${items}`;
    document.getElementById('summaryPaymentMethod').textContent = `Payment Method: ${paymentMethod}`;
    document.getElementById('summaryNotes').textContent = `Special Requests: ${notes || 'None'}`;

    document.getElementById('orderSummary').classList.remove('hidden');

    // Clear the form
    document.getElementById('orderForm').reset();
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    // Validate the form data (basic validation already handled by HTML)
    if (name && email && item && quantity) {
        // Hide the form and show the confirmation message
        document.getElementById('orderForm').reset();
        document.getElementById('confirmationMessage').classList.remove('hidden');
    }
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const itemSelect = document.getElementById('item');
    const item = itemSelect.value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    
    // Calculate total price
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const pricePerUnit = parseFloat(selectedOption.getAttribute('data-price'));
    const totalPrice = pricePerUnit * quantity;

    // Display the total price
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);

    // Basic validation
    if (name && email && item && quantity) {
        // Hide the form and show the confirmation message
        document.getElementById('orderForm').reset();
        document.getElementById('confirmationMessage').classList.remove('hidden');
    }
});

// Update total price on input change
document.getElementById('item').addEventListener('change', updateTotalPrice);
document.getElementById('quantity').addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const itemSelect = document.getElementById('item');
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const pricePerUnit = parseFloat(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    if (!isNaN(pricePerUnit) && !isNaN(quantity)) {
        const totalPrice = pricePerUnit * quantity;
        document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    } else {
        document.getElementById('totalPrice').textContent = '0.00';
    }
}
