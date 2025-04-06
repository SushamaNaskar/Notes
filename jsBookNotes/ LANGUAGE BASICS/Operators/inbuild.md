# data.valueOf()
- The valueOf() method in JavaScript returns the primitive value of an object. It is commonly used with built-in objects like String, Number, Boolean, and Date.

let num = new Number(42);
console.log(num.valueOf()); // 42

let bool = new Boolean(true);
console.log(bool.valueOf()); // true


# data.toLocaleString()
- The toLocaleString() method converts a Number, Date, or other objects into a locale-sensitive string representation, allowing formatting based on a user's language or region.

- It formats Number, date or other objects based on user's langauge and regian.

✅ Makes numbers/dates more readable for users in different regions.
✅ Supports currency formatting without manual string manipulation.
✅ Handles time zones and language differences automatically.

object.toLocaleString([locales], [options])

let num = 1234567.89;

console.log(num.toLocaleString("en-US")); // "1,234,567.89"
console.log(num.toLocaleString("de-DE")); // "1.234.567,89" (German format)
console.log(num.toLocaleString("en-IN")); //12,34,567.89(India format)

// Currency formatting
console.log(num.toLocaleString("en-US", { style: "currency", currency: "USD" })); // "$1,234,567.89"
console.log(num.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })); // "￥1,234,568"

let date = new Date();

console.log(date.toLocaleString("en-US")); // Example: "3/5/2025, 10:15:30 AM"
console.log(date.toLocaleString("fr-FR")); // Example: "05/03/2025, 10:15:30"
console.log(date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));

// Custom options
console.log(date.toLocaleString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
// Example: "Wednesday, 5 March 2025"