# IoC Container
<!-- - IoC Container is a component of Spring that creates, manages, and injects dependencies of objects, instead of the developer doing it manually. -->

IoC Container is a component of Spring that:
- Creates objects (called Beans)
- Manages their lifecycle
- Injects dependencies automatically (Dependency Injection)

# 4. What does IoC Container actually do?

# 1. Creates Beans
```
@Component
class Engine {}
```
Spring automatically creates this object.

# ✅ 2. Injects Dependencies
``` 
@Component
class Car {
    @Autowired
    Engine engine;
}
```
👉 No new Engine() needed — container injects it.

# 3. Manages Lifecycle
- Object creation
- Initialization
- Destruction