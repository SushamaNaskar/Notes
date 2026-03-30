
[access-modifier] [type] returnType functionName(parameters)


| Feature             | Access Modifier            | Type                          |
| ------------------- | -------------------------- | ----------------------------- |
| Controls            | Visibility                 | Behavior                      |
| Question answered   | Who can access?            | How it works?                 |
| Examples            | public, private, protected | static, final, abstract       |
| Affects inheritance | Yes (visibility rules)     | Yes (overriding/hiding rules) |


| Feature      | `static`      | `final`       | `abstract`      |
| ------------ | ------------- | ------------- | --------------- |
| Belongs to   | Class         | Object/Class  | Object          |
| Override     | ❌ No (hiding) | ❌ Not allowed | ✅ Must override |
| Body         | ✅ Has body    | ✅ Has body    | ❌ No body       |
| Polymorphism | ❌ No          | ❌ No          | ✅ Yes           |
