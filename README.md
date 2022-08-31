# material-ripple
A faithful recreation of Google's material ripple effect

## Additional CSS
```css
ripple {position: absolute;background-color: white;border-radius: 50%;opacity: .3;pointer-events: none;}
ripple.ripple-closing{opacity:0}
```
## Usage
### Manually
```html
<button onmousedown="ripple({
	'node': this,
	'speed': 1,
	'size': .6,
	'maxSize': 1.1
})"> Some text </button>
```

### Programatically
```javascript
document.querySelectorAll('button').forEach(element => {
	element.addEventListener('mousedown', ()=> {
		ripple({'node':element,
				'speed': 1.1,
				'size': .6,
				'maxSize': 1.1
		})
	})
})
```
