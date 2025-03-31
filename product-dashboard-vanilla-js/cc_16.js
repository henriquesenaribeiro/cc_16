// Task 2: Fetch using .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => response.json()) 
      // Add the JSON
      .then(products => {
        // Log each product name to the console
        products.forEach(product => {
          console.log(product.fields.name);
        });
      })
      .catch(error => {
        // Log if there's any error during the fetch
        console.error("Error with .then() fetch:", error);
      });
  }
// Call the function to fetch products using .then()

// Task 3: Fetch using async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      const products = await response.json();
  
      // Call helper to display them
      displayProducts(products);
    } catch (error) {
      // Handle error using reusable handler
      handleError(error);
    }
  }
