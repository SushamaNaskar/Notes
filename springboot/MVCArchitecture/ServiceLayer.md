# Service Layer
- It acts as a middle layer between Controller and Repository.
- Service layer contains:
 * Business logic
 * Validations
 * Calculations
 * Rules
 * Processing

 ```
 @Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<EmployeeEntity> getAllEmployees() {
        return repository.findAll();
    }
}
```