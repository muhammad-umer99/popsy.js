# Popsy.js 🎉
A lightweight, fun JavaScript animation library.

## How to use
Just add this one line to your HTML — no file download needed:

```html
<script src="https://cdn.jsdelivr.net/gh/muhammad-umer99/popsy.js@main/popsy.js"></script>
```

## Functions

```js
Popsy.counter('#el', 1000)              // count up animation
Popsy.fadeIn('#el')                     // fade element in
Popsy.typewriter('#el', 'Hello!')       // typing effect
Popsy.shake('#el')                      // shake element
Popsy.confetti()                        // confetti burst 🎉
Popsy.toast('Message!')                 // success toast
Popsy.toast('Oops!', { type: 'error' }) // error toast
```

## Example

```html
<script src="https://cdn.jsdelivr.net/gh/muhammad-umer99/popsy.js@main/popsy.js"></script>

<script>
  Popsy.typewriter('#title', 'Hello World!');
  Popsy.confetti();
</script>
```
