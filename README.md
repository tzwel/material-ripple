# material-ripple
A faithful recreation of Google's material ripple effect

## Additional CSS
```css
ripple {position: absolute;background-color: white;border-radius: 50%;opacity: .3;pointer-events: none;}
ripple.ripple-closing{opacity:0}
```

> **Note**
> To display the ripple effect correctly, elements need their `position`s to be set to `relative`

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

#### SPA friendly
```javascript
document.addEventListener('mousedown', (e)=> {
    if (e.target.tagName === 'BUTTON') {
        ripple({'node':e.target,
		'speed': 1.1,
		'size': .6,
		'maxSize': 1.1
        })
    }
})
```
> **Note**
> If you want to use the ripple effect on certain elements tagged with an attribute, go with `e.target.hasAttribute('ripple')`

## Overriding colors
```css
.class > ripple {
	background-color: rgb(18, 165, 140);
}
```
> **Note**
> Depending on your case, an `!important` may be needed
