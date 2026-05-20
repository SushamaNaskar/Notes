# Dependencies (The Shopping List)
The <dependencies> section is where you list the external libraries your project needs.

## spring-boot-starter-web: 
Includes everything needed to build web applications, including a built-in server (Tomcat) and REST API support.

## spring-boot-starter-data-jpa: 
The tool used to talk to databases using Java objects (instead of writing raw SQL).

## spring-boot-starter-validation:
 Used to validate user input (e.g., ensuring an email address is formatted correctly).

## h2: 
A lightweight, "in-memory" database. It’s great for practice because it doesn't require a separate installation like MySQL.

## lombok:
 A library that reduces "boilerplate" code. It automatically generates things like getters, setters, and constructors for you.

## modelmapper: 
A tool to help copy data from one Java object to another (common in Spring Boot apps). Note that since this isn't managed by the "Parent," you have to specify the version (3.0.0) manually.

## spring-boot-starter-test: 
Tools for testing your code (like JUnit and Mockito). The <scope>test</scope> means these tools won't be included when you finally ship the app.