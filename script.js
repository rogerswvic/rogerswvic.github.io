document.addEventListener('DOMContentLoaded', () => {
    const itemSelect = document.getElementById('item');
    const totalPriceSpan = document.getElementById('total-price');
    
    // Function to update total price
    const updateTotalPrice = () => {
        const selectedOption = itemSelect.options[itemSelect.selectedIndex];
        const price = parseFloat(selectedOption.getAttribute('data-price'));
        totalPriceSpan.textContent = `$${price.toFixed(2)}`;
    };

    // Add event listener for item selection
    itemSelect.addEventListener('change', updateTotalPrice);

    // Initialize total price
    updateTotalPrice();

    // Handle form submission
    document.getElementById('order-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }
        // Add your form submission logic here
        alert(`Order submitted for ${name}!`);
    });
});

