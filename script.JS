// script.js
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput')
  const searchButton = document.getElementById('searchButton')
  const resultsList = document.getElementById('resultsList')

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim()
    resultsList.innerHTML = '' // Clear previous results

    // Simulated data (replace with actual API data)
    const products = [
      'Vegan Food Product 1',
      'Vegan Apparel Product 1',
      'Vegan Cosmetics Product 1',
      'Vegan Furniture Product 1',
      // Add more products...
    ]

    // Display the results
    products.forEach((product) => {
      const listItem = document.createElement('li')
      listItem.textContent = product
      resultsList.appendChild(listItem)
    })
  })
})
