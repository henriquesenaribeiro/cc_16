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

// Task 4: Display Products
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear any existing content
  
    // Limit to first 5 products
    const firstFive = products.slice(0, 5);
  
    firstFive.forEach(product => {
      const { name, price, image } = product.fields;
  
      // Create product card
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      // Add image
      const img = document.createElement('img');
      img.src = image[0].url;
      img.alt = name;
  
      // Add name
      const title = document.createElement('h2');
      title.textContent = name;
  
      // Add price
      const cost = document.createElement('p');
      cost.textContent = `$${(price / 100).toFixed(2)}`; // convert cents to dollars
  
      // Append to card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(cost);
  
      // Append card to container
      container.appendChild(card);
    });
  }
