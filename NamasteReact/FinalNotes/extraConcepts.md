# What are various ways to add images to our App? Explain with code examples?
1. Importing images using ES6 Modules :  place our image in the project directory (e.g., in the src folder or a subfolder).
import myImage from './my_image.jpg';

2. Using public folder : This method is useful for handling large image assets or for dynamic image URLs. Place your image in the public directory. <img src={process.env.PUBLIC_URL + '/my_image.jpg'} alt="My Image" />

3. Loading images from a remote source :load images from a remote source,

4. Using image assets within CSS : we can reference the image in your CSS file.


