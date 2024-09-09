document.addEventListener('DOMContentLoaded', () => {
    const itemSelect = document.getElementById('item');
    const totalPriceSpan = document.getElementById('total-price');
    const addItemButton = document.getElementById('add-item-button');
    const nameInput = document.getElementById('name');
    const orderForm = document.getElementById('order-form');

    let totalPrice = 0;

    // Function to update the total price display
    const updateTotalPrice = () => {
        totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
    };

    // Function to handle adding the selected item to the order
    const addItemToOrder = () => {
        const selectedOption = itemSelect.options[itemSelect.selectedIndex];
        const price = parseFloat(selectedOption.getAttribute('data-price'));
        totalPrice += price;
        updateTotalPrice();
    };

    // Event listener for the "Add Item to Order" button
    addItemButton.addEventListener('click', addItemToOrder);

    // Event listener to update the total price when the item selection changes
    itemSelect.addEventListener('change', () => {
        // Optionally, you could update the total price when the selection changes
        // but this example keeps it as an "Add Item to Order" action only
    });

    // Initialize total price
    updateTotalPrice();

    // Handle form submission
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name === '') {
            alert('Please enter your name.');
            return;
        }
        // Add your form submission logic here
        alert(`Order submitted for ${name}! Total price: $${totalPrice.toFixed(2)}`);
        // Reset the total price and form fields after submission
        totalPrice = 0;
        updateTotalPrice();
        itemSelect.selectedIndex = 0; // Reset item selection
        nameInput.value = ''; // Clear name input
    });
});

