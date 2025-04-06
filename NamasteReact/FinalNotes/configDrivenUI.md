# Config Driven Ui
is a a technique that allow you to create dynamic and customizable UIs without hardcoding them. It uses a configuration file or database to define the layout and content of Ui components.

# What is the importance of config.js /confic / configuration file
-  It serves as a centralized place to store configuration settings for your application.
- This includes settings such as API endpoints, database connections, environment-specific variables (like development vs production settings), feature toggles, Testing Configuration and more.
<!-- - Testing Configuration: including mock data sources, testing database configurations, and test automation settings. -->
- it's written with JSON, XML, YAML, or a combination

<!-- -  allows you to easily configure your application for different deployment scenarios. It simplifies the process of deploying your application to different servers or cloud environments without needing to modify the core application code. -->

package.json
{
  "scripts": {
    "start": "dotenv node server.js"
  }
}

.env
NODE_ENV=development

config.js
let config = {};

if (process.env.NODE_ENV === 'development') {
  config = {
    apiUrl: 'http://localhost:5000/api',
    logLevel: 'debug',
    database: {
      host: 'localhost',
      port: 27017,
      name: 'dev_database'
    }
  };
}  else {
  console.error('Unknown environment. Please set NODE_ENV to development, staging, or production.');
  process.exit(1);
}

module.exports = config;