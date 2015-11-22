/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Rating from '../';

const App = {
	initialState() {
		return {
			value: 3
		};
	},
	render({state}, setState) {
		const {value} = state;
		const icon = <div>&#9733;</div>;

		function onRate(prevValue, nextValue) {
			setState({value: nextValue});
		}

		return (
			<div>
				<Rating icon={icon} max='10' value={value} onRate={onRate}/>
				{`You rated ${value}`}
			</div>
		);
	}
};

const app = tree(<App/>);
render(app, document.body);
