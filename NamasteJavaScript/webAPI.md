# web apis
- Web APIs are commonly used to integrate and extend web applications, allowing developers to access and manipulate web services and resources.

# DOM (Document Object Model) API:
Manipulates HTML and XML documents.
Common methods: getElementById(), querySelector(), createElement(), appendChild().

const element = document.getElementById('myElement');
element.textContent = 'Hello, World!';

# Fetch API: 
Provides a modern way to make HTTP requests. Replaces older XMLHttpRequest.

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


# Web Storage API: LocalStorage and SessionStorage
Stores key-value pairs within the user's browser.
Includes LocalStorage and SessionStorage.
LocalStorage persists data until explicitly deleted, whereas SessionStorage only lasts for the session.

localStorage.setItem('username', 'JohnDoe');
const username = localStorage.getItem('username');
console.log(username); // JohnDoe

# Geolocation API:
Retrieves geographical location information.

navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
});

# Canvas API:
Draws graphics and animations.
Used in gaming, data visualization, etc.

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
