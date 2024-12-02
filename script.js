const prices = document.querySelectorAll('.price');
let totalPrice = 0;
prices.forEach(priceElement => {
  const price = parseFloat(priceElement.textContent);
  totalPrice += price;
});
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');
totalCell.textContent = `Total Savings: ₹${totalPrice.toFixed(2)}`;
totalRow.appendChild(totalCell);
const tableBody = document.querySelector('tbody');
tableBody.appendChild(totalRow);