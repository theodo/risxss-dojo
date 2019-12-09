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
Why doesn't it work?

Try inserting JS with event handlers:
```html
<p onmouseover="alert('toto')">Hey there!</p>
```
```html
<img src="toto" onerror="alert('It\'s a trap!')">
```
How could you sanitize the user input in order to avoid Javascript injection?

We won't do it by ourselves. We'll use the most famous Javascript sanitization library instead.

## Sanitize the input

Install [DOMPurify](https://github.com/cure53/DOMPurify).

What is the best moment to sanitize it?
Before sending it to the server?
Before displaying it in the browser?

Sanitize the input using the library at the right moment.

## Make sure never to have XSS again!

Use [RisXSS](https://github.com/theodo/RisXSS).

Add the eslint necessary configuration, and launch it to check no XSS is detected.

Try removing the sanitization with DOMPurify and check the XSS is detected!

## BONUS: XSS in links

Try in the second input the following "link": javascript:alert("It's a trap")

## BONUS 2: What is the worst thing you could do with an XSS in your current project?
