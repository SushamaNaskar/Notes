#  What is Spring Framework?
Spring = a framework that helps you write clean, loosely coupled Java applications

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

# Spring vs Spring Boot

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