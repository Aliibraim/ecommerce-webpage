document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Smartphone X200',
            price: 299.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPghOOd2L-tgW8XsLejVjYKsG4MkF7TgScJA&s',
            description: 'A high-quality smartphone with a sleek design and powerful features.'
        },
        {
            id: 2,
            name: 'Wireless Headphones',
            price: 99.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRa1pIFiEEs0Zs2T2MTx1w8AYEkNV5fHVE8w&s',
            description: 'Noise-cancelling wireless headphones with superior sound quality.'
        },
        {
            id: 3,
            name: '4K Television',
            price: 499.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeQ3UMjUnUNHq0E6UyrPa9r-zjdde2yf3Sw&s',
            description: 'Experience crystal clear picture with this 55-inch 4K TV.'
        },
        {
            id: 4,
            name: 'Laptop Pro 15',
            price: 899.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0WhkkmtcyQUzaCzhiGVLXPa5asKM6L7x0g&s',
            description: 'A powerful laptop with a 15-inch display, perfect for work and play.'
        },
        {
            id: 5,
            name: 'Bluetooth Speaker',
            price: 49.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5J59Wb99dsVMyyeNuB6yLKPI-bs5-Q_ZQg&s',
            description: 'Portable Bluetooth speaker with rich sound and deep bass.'
        },
        {
            id: 6,
            name: 'Smartwatch Series 5',
            price: 199.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYso33M1gveZFihwk5c0Btm8RuzaCxDYrsA&s',
            description: 'Stay connected and track your fitness with the latest smartwatch.'
        }
    ];
    
    const productsContainer = document.getElementById('products-container');
    const cartCount = document.getElementById('cart-count');

    let cart = 0;

    function renderProducts() {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;

            productsContainer.appendChild(productElement);
        });

       
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                cart++;
                cartCount.textContent = cart;
            });
        });
    }

 
    renderProducts();
});
