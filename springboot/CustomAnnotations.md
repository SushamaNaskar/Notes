# create custom annotations


## Step 1 → Create Annotation

```
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)

@Constraint(validatedBy = EmailValidator.class)

public @interface ValidEmail {

    String message() default "Invalid Email";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```

## Step 2 → Create Validator Class
```
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class EmailValidator
       implements ConstraintValidator<ValidEmail, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        return value != null &&
               value.endsWith("@gmail.com");
    }
}
```

# What Happens Internally
When Spring sees:

```
@ValidEmail
private String email;
```

It checks:
```
@Constraint(validatedBy = EmailValidator.class)
```

Then Spring runs:
```
EmailValidator.isValid()
```




# 1. @Target
Defines where annotation can be used.

| Target                  | Meaning    |
| ----------------------- | ---------- |
| `ElementType.TYPE`      | Class      |
| `ElementType.METHOD`    | Method     |
| `ElementType.FIELD`     | Variable   |
| `ElementType.PARAMETER` | Parameters |

# 2. @Retention
Defines how long annotation exists.

| Retention | Meaning                   |
| --------- | ------------------------- |
| `SOURCE`  | Removed after compilation |
| `CLASS`   | Stored in class file      |
| `RUNTIME` | Available during runtime  |

Most Spring Boot annotations use:
```
@Retention(RetentionPolicy.RUNTIME)
```
because Spring reads annotations during runtime.

# @Constraint
@Constraint is used to tell Spring:

“This annotation is a validation annotation.”

Spring/Jakarta Validation uses it to know which validation logic should execute when the annotation is encountered.

| Concept               | Meaning                                   |
| --------------------- | ----------------------------------------- |
| `@Constraint`         | Marks annotation as validation annotation |
| `validatedBy`         | Validator class                           |
| `ConstraintValidator` | Contains validation logic                 |
| `isValid()`           | Validation method                         |


# ConstraintValidator
This interface contains validation logic.

```
ConstraintValidator<AnnotationType, DataType>
```

Example:
```
ConstraintValidator<ValidEmail, String>
```

| Part         | Meaning          |
| ------------ | ---------------- |
| `ValidEmail` | Which annotation |
| `String`     | Which field type |
