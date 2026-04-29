# Bean
- Object created and managed by Spring

Example:
```
@Component
class UserService {}
```
👉 Now Spring will create this object → it becomes a bean

# Annotations
Annotations = Instructions for Spring

| Annotation    | Meaning               |
| ------------- | --------------------- |
| `@Component`  | General bean          |
| `@Service`    | Business logic        |
| `@Repository` | Database layer        |
| `@Controller` | Handles HTTP requests |

👉 All tell Spring: “Create this as a bean”


# Bean Lifecycle
1. Bean Created
2. Dependencies Injected
3. Initialized
4. Used
5. Destroyed

# Bean Lifecycle Hooks

## @PostConstruct
<!-- The @PostConstruct annotation is used to mark a method that should be invoked immediately after a bean has been constructed and all of its dependencies have been injected. -->
@PostConstruct is used to mark a method that runs right after an object (bean) is created and all its required dependencies  have been injected.

## @PreDestroy
The @PreDestroy annotation is used to mark a method that should be invoked just before a bean is destroyed by the container. This method can perform any necessary cleanup or resource releasing tasks.

# Scope of Beans
👉 How many objects are created?

| Scope     | Meaning               |
| --------- | --------------------- |
| singleton | ONE object (default)  |
| prototype | new object every time |
| request   | per HTTP request      |
