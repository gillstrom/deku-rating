/** @jsx dom */
import dom from 'magic-virtual-element';

const defaultProps = {
	value: 0
};

const propTypes = {
	class: {
		type: 'string'
	},
	icon: {
		type: 'object'
	},
	max: {
		type: 'number'
	},
	onRate: {
		type: 'function'
	},
	value: {
		type: 'number'
	}
};

function render({props}) {
	const {icon, max, onRate, value} = props;

	function onClick(val, i) {
		return () => {
			onRate(val, i);
		};
	}

	function getEls() {
		const els = [];

		for (let i = 0; i < max; i++) {
			if (i < parseInt(value, 10)) {
				els.push(<div class='Rating-element Rating-element--active' onClick={onClick(value, i + 1)}>{icon}</div>);
				continue;
			}

			els.push(<div class='Rating-element' onClick={onClick(value, i + 1)}>{icon}</div>);
		}

		return els;
	}

	return (
		<div class={['Rating', props.class]}>
			{getEls()}
		</div>
	);
}

export default {defaultProps, propTypes, render};
