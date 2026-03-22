# float

- In Java, any decimal number (like 10.5) is treated as a double automatically.

```
double a = 10.5;   // ✅ Works (default is double)
float b = 10.5;    // ❌ Error (10.5 is double, not float)
```

🔹 Why error?
Because 10.5 is considered a double literal, and Java does not automatically convert double → float (it may lose precision).

- To use float, you must add f or F
```
float b = 10.5f;   // ✅ Correct
float c = 10.5F;   // ✅ Also correct
```

3️⃣ Why Java prefers double?

Java chooses double by default because:

✅ double has more precision (64-bit)

✅ It is more accurate for decimal calculations

✅ Most mathematical operations use double internally

| Type   | Size   | Precision          |
|--------|--------|-------------------|
| float  | 32-bit | ~6–7 digits        |
| double | 64-bit | ~15–16 digits      |


# char
char stores only one character → 'A'

String stores multiple characters → "Hello"

char uses single quotes ('')

String uses double quotes ("")



# Data type implicit(direct/widning) conversion/Widening Type Casting (Small → Big)

![Alt Text](<dataType.png>)

- Convert small size data type to bigger size data type
- Like storing a small mango in a small bucket, then moving it to a bigger bucket
- No data loss happens
- Done automatically by Java

### Example

```java
int val = 4;      // 4 stored in small container (int)
long big = val;   // moved to bigger container (long)
```

# Data type Explicit conversion/Narrowing Type Casting (Big → Small)

- Convert bigger size data type to smaller size data type
- Like moving a big mango from a big bucket into a small bucket
- Data loss **may happen**
- Must be done manually (explicit casting)

### Example

```java
long big = 100;
int small = (int) big;   // manually casting long to int
```