# React CDN
- For development
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
- For Production
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>


# What is difference between react.development.js and react.production.js files via CDN?
- react.development.js 
    This file is intended for use in development environments. It includes additional warnings and debugging information that helps developers identify and fix issues during development. It is larger in size compared to the production version.

- react.production.js
   This file is optimized for production environments. It is smaller in size because it excludes development-specific warnings and debugging tools, focusing instead on performance and efficiency.

