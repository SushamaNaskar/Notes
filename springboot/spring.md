#  What is Spring Framework?
Spring = a framework that helps us write clean, loosely coupled Java applications

# 🔴 Problem (Without Spring)

```
class A {
    B b = new B(); // tightly coupled
}
```
👉 A is directly dependent on B → hard to change

# 🟢 Solution (Spring)
Spring handles object creation for you.

```
class A {
    B b; // Spring will inject this
}
```
👉 This is called Dependency Injection (DI)

# 🧠 3. Core Idea: IoC (Inversion of Control)
👉 Normally:
You control object creation

👉 In Spring:
Spring controls everything

This is called:

👉 IoC Container

## 🧾 What IoC Container does:
- Creates objects 
- Connects them
- Manages lifecycle

# Spring
- Spring is a Java framework 
- that provides features like 
  * Dependency Injection
  * AOP
  * MVC
- but it requires more manual configuration. 

# Spring Boot
- Spring Boot is built on top of Spring
- it simplifies development by providing 
  * auto-configuration, 
  * embedded servers (like Tomcat), 
  * and starter dependencies,
allowing us to create production-ready applications much faster.


<!-- or 
Spring is the core framework for building Java applications. Spring Boot extends Spring by reducing configuration through auto-configuration and embedded servers, making development faster and easier. -->

# AOP (Aspect-Oriented Programming)
separates cross-cutting concerns like logging, security, and transactions from business logic, making the code cleaner and easier to maintain.

## ❌ Spring (Old Way)
- lot of configuration
- XML heavy
- slow setup

## ✅ Spring Boot
- Auto configuration
- Ready to run
- Embedded server

Spring Boot = Spring + Automation

# 🔁 11. Spring Boot Internal Flow

Step-by-step:
1. App starts (main() method)
2. Spring creates container
3. Scans classes (@ComponentScan)
4. Creates beans
5. Injects dependencies
6. Starts server (Tomcat)
7. App ready 🚀


# Annotations 
Annotations are metadata (prefixed with @) that tell Java or Spring how a class, method, or field should behave, reducing manual configuration and making the code cleaner.


# @SpringBootApplication
 - is the main annotation in Spring Boot applications. 
 - It is a combination of @Configuration, @EnableAutoConfiguration, and @ComponentScan. 
 - It helps Spring Boot automatically configure the application, scan components, and manage beans, reducing manual configuration.