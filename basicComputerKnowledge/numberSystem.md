# How computers stores number in memory and fetch it?

# What is a Bit?
- A bit is the smallest unit of data in a computer.
- It can only store:
        * 0 (OFF)
        * 1 (ON)

- Think of it like a tiny light switch.

# 2️⃣ What is a Byte?
- 1 byte = 8 bits
- It looks like this: 10101010
    

# How int var = 26; Is Stored in Memory

## Step 1: Understand Size of int

int = 4 bytes

1 byte = 8 bits

So total = 32 bits

## Step 2: Convert 26 to Binary
- 26 in binary is: 11010
- Since int needs 32 bits, we add zeros in front: 00000000 00000000 00000000 00011010

## Step 3: Store in Memory (RAM)
- Memory is like a long row of boxes.
- Each box = 1 byte
- Each box has an address.
- Example
| Address | Data (1 Byte) |
| ------- | ------------- |
| 2000    | 00000000      |
| 2001    | 00000000      |
| 2002    | 00000000      |
| 2003    | 00011010      |

* Important:

- The variable’s address = starting address
- Here, var starts at address 2000
- The computer automatically knows:

 * 2000 → first byte
 * 2001 → second byte
 * 2002 → third byte
 * 2003 → fourth byte

- Because memory is continuous.

## 4️⃣ How Computer Fetches the Value
- When we use var, the CPU:

- Step 1:
 * Looks at stored address (2000)

- Step 2:
 * Reads 4 bytes (because int = 4 bytes)  : 00000000 00000000 00000000 00011010

- Step 3:
 * Combines them 

- Step 4:
 * Converts binary back to decimal → 26 
 * Now CPU can use it for calculations.


# Simple Summary

- Bit = 0 or 1
- Byte = 8 bits : 10101010
- int = 4 bytes = 32 bits : 00000000 00000000 00000000 00011010
- Numbers are stored in binary
- Memory stores data in continuous addresses
- CPU fetches using starting address + data size


# Data type size and range tabel
| Data Type | Size          | Range             |
| --------- | ------------- | ----------------- |
| byte      | 8 bits        | -128 to 127       |
| short     | 16 bits       | -32,768 to 32,767 |
| char      | 16 bits       | 0 to 65,535       |
| int       | 32 bits       | -2³¹ to 2³¹ − 1   |
| float     | 32 bits       | ±3.4 × 10³⁸       |
| long      | 64 bits       | -2⁶³ to 2⁶³ − 1   |
| double    | 64 bits       | ±1.7 × 10³⁰⁸      |
| boolean   | JVM dependent | true / false      |

# memory diagram for each value

## byte (8 bits = 1 byte)
 - Binary of 5: 00000101
 - Memory:
Address 1000
+--------+
|00000101|
+--------+

## short :  (16 bits = 2 bytes)
 - Binary of 5: 00000000 00000101
 - Memory:
Address 2000   Address 2001
+--------+     +--------+
|00000000|     |00000101|
+--------+     +--------+

## char : (16 bits = 2 bytes)
 - Unicode of 'A' = 65
 - Binary : 00000000 01000001
 - Memory:

5000   5001
+--------+--------+
|00000000|01000001|
+--------+--------+

## int : (32 bits = 4 bytes)
 - Binary of 5: 00000000 00000000 00000000 00000101
 - Memory:
 3000  3001  3002  3003
+----+----+----+----+
|0000|0000|0000|0101|
+----+----+----+----+

## long : (64 bits = 8 bytes)
 - Binary of 5:
 00000000 00000000 00000000 00000000
 00000000 00000000 00000000 00000101

 - Memory:

 4000 4001 4002 4003 4004 4005 4006 4007
+----+----+----+----+----+----+----+----+
|00  |00  |00  |00  |00  |00  |00  |05  |
+----+----+----+----+----+----+----+----+

## float (32 bits = 4 bytes)
- Memory layout (IEEE 754):
 Sign | Exponent (8) | Mantissa (23)
  0   | 00000000     | 00000000000000000000000

- Stored across 4 bytes in memory.

## double (64 bits = 8 bytes)
- Memory layout:
 | Sign (1) | Exponent (11) | Mantissa (52) |
 |   0      | 00000000000   | 0000000000000000000000000000000000000000000000000000

- Stored across 8 bytes. 

# Binary Addition
- Binary addition has only 4 small rules.
- Binary is just:

* 0 + 0 = 0
* 0 + 1 = 1
* 1 + 0 = 1
* 1 + 1 = write 0, carry 1

| A | B | Result | Carry |
| - | - | ------ | ----- |
| 0 | 0 | 0      | 0     |
| 0 | 1 | 1      | 0     |
| 1 | 0 | 1      | 0     |
| 1 | 1 | 0      | 1     |

## example
```
   101110
+  001111
-----------
```
step 1: 0 + 1 = 1
step 2: 1 + 1 = 0  (carry 1)
step 3: 1 + 1 = 0  (carry 1) + prev carry 1 = 1
step 4: 1 + 1 = 0  (carry 1) + prev carry 1 = 1
step 5: 0 + 0 = 0 + prev carry 1 = 1
step 6: 1 + 0 = 1          

| Binary Addition             | Write | Carry |
| ---------------             | ----- | ----- |
| 0 + 1                       | 1     | 0     |
| 1 + 1                       | 0     | 1     |
| 1 + 1 + 1 (prev carry)      | 1     | 1     |
| 1 + 1 + 1 (prev carry)      | 1     | 1     |

# negative binary numbers
- Computers Only Know 0 and 1
- But we humans use: +5 ,  -5 , +10 , -10
- If binary starts with:
  0 → positive
  1 → negative
- 2’s Complement (the real method computers use) to show a minus sign

## Step 1: Positive Numbers (Easy Part)
| Decimal | Binary |
| ------- | ------ |
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |
| 7       | 0111   |

## Step 2: Negative Numbers (Using 2’s Complement)

To make a number negative:

1️⃣ Flip all bits (1’s complement)
2️⃣ Add 1

## Example: Make -5 (4-bit system)
1. Start with +5: 0101
2. Flip bits: 1010
3. Add 1: 
```
1010
+   1
------
1011
```
4. 

| Decimal | 16-bit Binary Representation |
| ------- | ---------------------------- |
| +1      | 0000 0000 0000 0001          |
| -1      | 1111 1111 1111 1111          |
| +2      | 0000 0000 0000 0010          |
| -2      | 1111 1111 1111 1110          |
| +3      | 0000 0000 0000 0011          |
| -3      | 1111 1111 1111 1101          |
| +4      | 0000 0000 0000 0100          |
| -4      | 1111 1111 1111 1100          |
| +5      | 0000 0000 0000 0101          |
| -5      | 1111 1111 1111 1011          |
| +6      | 0000 0000 0000 0110          |
| -6      | 1111 1111 1111 1010          |
| +7      | 0000 0000 0000 0111          |
| -7      | 1111 1111 1111 1001          |
| +8      | 0000 0000 0000 1000          |
| -8      | 1111 1111 1111 1000          |
| +9      | 0000 0000 0000 1001          |
| -9      | 1111 1111 1111 0111          |
| +10     | 0000 0000 0000 1010          |
| -10     | 1111 1111 1111 0110          |


# Binary substraction
👉 Computers do not actually subtract
👉 They only know addition
So instead of doing: 7 - 3
Computer converts it into: 7 + (−3)
And to make −3, we use 2’s complement.
A − B = A + (2’s complement of B)