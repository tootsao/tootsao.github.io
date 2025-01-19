// Object to store orders for each table
const tableOrders = {};
let activeTable = null;

// Initialize the table buttons
document.querySelectorAll('.circle-table').forEach(button => {
  button.addEventListener('click', () => {
    // Deselect the previous table
    document.querySelectorAll('.circle-table').forEach(btn => btn.classList.remove('active'));

    // Select the clicked table
    button.classList.add('active');
    activeTable = button.dataset.table;

    // Load the orders for the selected table
    loadTableOrder();
  });
});

// Calculate the total and save the order for the active table
document.getElementById('calculate').addEventListener('click', () => {
  if (!activeTable) {
    alert('Please select a table first!');
    return;
  }

  const items = Array.from(document.querySelectorAll('#menu input:checked'));
  const itemNames = items.map(item => item.dataset.name);
  const itemPrices = items.map(item => parseFloat(item.dataset.price));

  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  // Save the order for the table
  tableOrders[activeTable] = { items: itemNames, totalPrice };

  // Update the summary
  updateSummary();
});

// Clear the order for the active table
document.getElementById('clear').addEventListener('click', () => {
  if (!activeTable) {
    alert('Please select a table first!');
    return;
  }

  // Clear the data
  tableOrders[activeTable] = { items: [], totalPrice: 0 };

  // Uncheck all items
  document.querySelectorAll('#menu input').forEach(input => (input.checked = false));

  // Update the summary
  updateSummary();
});

// Load the saved order for the active table
function loadTableOrder() {
  if (!activeTable) return;

  const { items = [], totalPrice = 0 } = tableOrders[activeTable] || {};

  // Check items in the menu
  document.querySelectorAll('#menu input').forEach(input => {
    input.checked = items.includes(input.dataset.name);
  });

  // Update the summary
  updateSummary();
}

// Update the order summary
function updateSummary() {
  if (!activeTable) return;

  const { items = [], totalPrice = 0 } = tableOrders[activeTable] || {};
  document.getElementById('selected-table').textContent = activeTable;
  document.getElementById('selected-items').textContent = items.join(', ') || 'None';
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
