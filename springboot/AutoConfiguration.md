# Auto Configuration
“You add dependency → Spring configures everything”

Example:

If you add:
```
spring-boot-starter-web
```

## 👉 Spring Boot automatically:

- sets up Tomcat
- configures server
- enables REST APIs

## How it works:
1. Checks dependencies
2. Applies config automatically
3. Uses conditions like:
   - @ConditionalOnClass
   - @ConditionalOnBean