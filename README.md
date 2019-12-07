# XSS

Here, we will cover how to make sure your project have no Javascript vulnerable dependencies.

## Installation

Install the dependencies then start the project:

```bash
yarn
yarn start
```

The application is simple.
It is designed to be exploitable by XSS vulnerabilities.

You can play with it a bit and look at the `App.js` file to understand what is happening under the hood.

## Trigger XSS

Try typing some HTML:
```html
<p>Hello world!</p>
```
Try inserting some JS:
```html
<script>alert(1)</script>
```
```html
<p onmouseover="alert('toto')">Hey there!</p>
```
```html
<img src="toto" onerror="alert('It\'s a trap!')">
```

## Sanitize the input

Use [DOMPurify](https://github.com/cure53/DOMPurify)

## Make sure never to have XSS again!

Use [RisXSS](https://github.com/theodo/RisXSS)

## BONUS: XSS in links

Try in the second input the following "link": javascript:alert("It's a trap")
