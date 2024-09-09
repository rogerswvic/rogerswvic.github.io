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
