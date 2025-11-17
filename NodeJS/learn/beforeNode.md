# How Developers Ran JavaScript Before Node.js

1. They used a plain HTML file

Developers simply wrote an HTML file like:

<!DOCTYPE html>
<html>
  <body>
    <script>
      document.body.style.background = "lightblue";
    </script>
  </body>
</html>


Then they saved it on their computer, for example:
index.html

2. They opened it directly in the browser

No server, no Node.js, no build tools.

They just:

Double-click the HTML file

Browser opens it

JS inside <script> tags runs automatically using browser's JavaScript engine

This means JavaScript executed instantly when the browser loaded the page.

3. How they developed & tested

They repeated this simple process:

Edit HTML file → Refresh browser

Modify the <script> code

Save the file

Press F5 / Refresh

See the updated output

This is how ALL JavaScript development worked before Node.js.


4. Browser Developer Tools

Even in older browsers, developers had tools like:

Internet Explorer Developer Toolbar

Firefox Firebug (famous around 2006–2008)

These tools allowed developers to:

Run JavaScript in the console

Inspect the DOM

Debug errors

Test code snippets

Example in console:

``` document.body.style.background = "red";
```

5. External JS files were still used

Developers could also create:

app.js

``` document.body.style.background = "lightblue";
```

Then include it:

``` <script src="app.js"></script>

```

And again → refresh browser to test.

🚫 No terminal, no bundlers, no Node.js

Before Node.js there was:

❌ No npm

❌ No Webpack

❌ No Vite

❌ No Babel

❌ No React

❌ No CLI tools

JavaScript existed purely inside the browser environment.

🧠 Summary
Before Node.js and modern tooling:

| What developers used | Purpose                                     |
| -------------------- | ------------------------------------------- |
| HTML file            | To write the JS code inside `<script>` tags |
| Browser              | To execute JavaScript using its JS engine   |
| Refresh              | To re-run code                              |
| Early dev tools      | Debugging & console tests                   |
