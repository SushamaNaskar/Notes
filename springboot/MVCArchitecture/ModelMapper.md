# ModelMapper
- ModelMapper is a Java library used to convert one object into another automatically.
- It reduces boilerplate code by automatically copying matching fields.
- and is usually used in the service layer of Spring Boot applications.

Mostly used for:
- Entity → DTO
- DTO → Entity

Instead of manually setting fields one by one.

# Internal Working
When map() is called:
- ModelMapper inspects source object
- Reads getters
- Matches destination setters
- Copies values
- Creates destination object automatically

Uses:
- Reflection
- Convention-based mapping

# Why We Use ModelMapper
- Reduces boilerplate code
- Cleaner code
- Easier maintenance
- Automatic mapping


Suppose you have: EmployeeDTO and EmployeeEntity

## Without ModelMapper:
manually setting fields one by one.

```
EmployeeDTO dto = new EmployeeDTO();

dto.setId(employee.getId());
dto.setName(employee.getName());
dto.setEmail(employee.getEmail());
```
This becomes repetitive in large projects.

## with ModelMapper
ModelMapper does this automatically.

# Real Project Example

# Configuration Bean
Create configuration class:

```
@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
```
Now Spring can inject it anywhere.

## DTO
```
public class EmployeeDTO {

    private Long id;
    private String name;
    private String email;

    // getters setters
}
```

## Entity
```
@Entity
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // getters setters
}
```

## Using ModelMapper in Service Layer
```
@Service
public class EmployeeService {

    private final EmployeeRepository repository;
    private final ModelMapper modelMapper;

    public EmployeeService(EmployeeRepository repository,
                           ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public EmployeeDTO createEmployee(EmployeeDTO dto) {

        EmployeeEntity entity =
                modelMapper.map(dto, EmployeeEntity.class);

        EmployeeEntity savedEmployee =
                repository.save(entity);

        return modelMapper.map(savedEmployee, EmployeeDTO.class);
    }
}
```

# Dependency
For Maven:
```
<dependency>
    <groupId>org.modelmapper</groupId>
    <artifactId>modelmapper</artifactId>
    <version>3.2.0</version>
</dependency>
```

# How Mapping Works
ModelMapper matches fields by:
- Same field names
- Same data types

## DTO → Entity Mapping
```
EmployeeEntity entity = modelMapper.map(dto, EmployeeEntity.class);
```

## Entity → DTO Mapping
```
EmployeeDTO dto = modelMapper.map(entity, EmployeeDTO.class);
```

## List Mapping
```
List<EmployeeDTO> dtos = employees.stream()
        .map(employee ->
             modelMapper.map(employee, EmployeeDTO.class))
        .collect(Collectors.toList());
```

# What happens if field names differ?
- Automatic mapping fails.

Example
```
dto.fullName
entity.name
```

## Custom Mapping Example
```
TypeMap<EmployeeEntity, EmployeeDTO> typeMap =
        modelMapper.createTypeMap(
                EmployeeEntity.class,
                EmployeeDTO.class);

typeMap.addMapping(
        EmployeeEntity::getName,
        EmployeeDTO::setFullName
);
```

## Skipping Fields
```
typeMap.addMappings(mapper ->
        mapper.skip(EmployeeDTO::setPassword));
```

## Nested Object Mapping
ModelMapper can map nested objects automatically if structure matches.


# Why Service Layer Uses ModelMapper
Because:
- Controller should only handle requests/responses
- Service handles business logic
- Object conversion is part of business processing

This keeps code clean.