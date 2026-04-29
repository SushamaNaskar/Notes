
# Maven
- Maven is a build automation and dependency management tool used in Java projects.
- In a Spring Boot project, dependencies are specified in the pom.xml file. 
- Maven then resolves these dependencies and includes them in the classpath.

👉 Maven = Project manager + build tool

# What it does:
- Automatically downloads and manages project dependencies
- Resolves and handles dependency version conflicts
- Enforces a standard project structure
- Provides a well-defined build lifecycle (compile, test, package, etc.)

👉 Think of Maven like a project manager + package manager combined

# Common Commands:
| Command               | Meaning          |
| --------------------- | ---------------- |
| `mvn clean`           | remove old files |
| `mvn compile`         | compile code     |
| `mvn test`            | run tests        |
| `mvn package`         | create JAR       |
| `mvn spring-boot:run` | run app          |

# What is pom.xml?
- pom.xml is an XML configuration file used by Maven that defines the project’s structure, dependencies, plugins, build lifecycle, and metadata.

👉 Configuration file for Maven project

# What does pom.xml contain?

## 1. Project Metadata
```
<groupId>com.example</groupId>
<artifactId>my-app</artifactId>
<version>1.0.0</version>
```

👉 Meaning:
- groupId → Organization / company name
- artifactId → Project name
- version → Project version

📌 Example:

```
com.company:employee-service:1.0.0
```

## 2. Dependencies (MOST IMPORTANT 🔥)
```
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

👉 This tells Maven:
➡️ "Download this library and add it to my project"


# 🔥 Key Point for Interviews

Maven automatically downloads dependencies from a central repository (Maven Central) and adds them to the classpath.