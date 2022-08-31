# material-ripple
A faithful recreation of Google's material ripple effect

## Additional CSS
```css
ripple {position: absolute;background-color: white;border-radius: 50%;opacity: .3}
ripple.ripple-closing{opacity:0}
```
## Usage
```html
<button onmousedown="ripple({
	'node': this,
	'speed': 1,
	'size': .6,
	'maxSize': 1.1
})"> Some text </button>
```
