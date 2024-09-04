// Sample order data
const orders = [
    {
        orderId: 1,
        customerName: "John Doe",
        orderDate: "2024-09-04",
        totalAmount: 15.99,
        paymentStatus: "paid",
        paymentMethod: "card",
        notes: "Extra sugar"
    },
    {
        orderId: 2,
        customerName: "Jane Smith",
        orderDate: "2024-09-03",
        totalAmount: 7.50,
        paymentStatus: "pending",
        paymentMethod: "cash",
        notes: ""
    }
];

// Function to populate the table
function populateTable() {
    const tableBody = document.querySelector("#ordersTable tbody");

    orders.forEach(order => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.orderDate}</td>
            <td>$${order.totalAmount.toFixed(2)}</td>
            <td>${order.paymentStatus}</td>
            <td>${order.paymentMethod}</td>
            <td>${order.notes}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
window.onload = populateTable;
