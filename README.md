
![MD Visual](https://raw.githubusercontent.com/zMarcosDantas/hackerTyper.js/main/assets/md.gif)

# HackerTyper.js

HackerTyper.js is a javascript script that creates a cool hacking effect on texts.

## Installation

CDN (jsdelivr): 

```js
<script src="https://cdn.jsdelivr.net/gh/zMarcosDantas/hackerTyper.js@latest/dist/hTyper.min.js"></script>
```
    
## Example

Basic Usage:

```html
<body>
    <!-- Element that will have the effect -->
    <h1 id="zMD">MARCOS DANTAS</h1>

    <!-- CDN Script -->
    <script src="https://cdn.jsdelivr.net/gh/zMarcosDantas/hackerTyper.js@latest/dist/hTyper.min.js"></script>
    <script>
        // Init hTyper with default values
        let typer = new hTyper(document.querySelector('#zMD'), {}); 
    </script>
</body>
```

Example that elements with ```.hTyping``` class will receive the effect:
```js
document.querySelectorAll(".hTyping").forEach(element => {
    new hTyper(element); // init with default values
});     
```

You can pass the element parameter to constructor as HTMLElement or query string.  

## Customization

The constructor can receive a second parameter that should be a config json

```js
new hTyper(element, {
    chars: "abcdefghijklmnopqrstuvwxyz", // chars that you want
    repetitions: 10, // the number of repetitions that will happen on each char
    delay: 30, // repetition delay on each char
    startDelay: 0, // waiting time before starting effect
    looping: false, // repeat endlessly effect
    forceUppercase: false, // force all chars to be uppercase,
    hover: true, // effect on hover
}); 
```

## Credits

- [KPRVerse](https://kprverse.com/) - Original website where the idea came from.
- [Hyperplexed](https://www.youtube.com/@Hyperplexed) - Effect Tutorial
- [Typed.js](https://github.com/mattboldt/typed.js/) - Readme Inspiration
