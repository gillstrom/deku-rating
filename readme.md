# deku-rating

> Rating component for [deku](https://github.com/dekujs/deku)


## Install

```
$ npm install --save deku-rating
```


## Usage

```js
import Rating from 'deku-rating';

export function render({state}, setState) {
	const {value} = state;
	const icon = <div>&#9733;</div>;

	function onRate(prevValue, nextValue) {
		setState({value: nextValue});
	}

	return <Rating icon={icon} max='10' value={value} onRate={onRate}/>;
}
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
