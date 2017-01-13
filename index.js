/** @jsx dom */
import deepEqual from 'deep-equal';
import dom from 'magic-virtual-element';

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
	statical: {
		type: 'boolean'
	},
	value: {
		type: 'number'
	}
};

const defaultProps = {
	statical: false,
	value: 0
};

const onClick = (val, i, onRate) => () => onRate(val, i);

const getItems = ({icon, max, onRate, statical, value}) => {
	const els = [];

	for (let i = 0; i < max; i++) {
		if (i < parseInt(value, 10)) {
			els.push(<div class='Rating-element Rating-element--active' onClick={!statical && onClick(value, i + 1, onRate)}>{icon}</div>);
			continue;
		}

		els.push(<div class='Rating-element' onClick={!statical && onClick(value, i + 1, onRate)}>{icon}</div>);
	}

	return els;
};

const shouldUpdate = ({props}, nextProps) => !deepEqual(props, nextProps);

const render = ({props}) => {
	return (
		<div class={['Rating', props.class]}>
			{getItems(props)}
		</div>
	);
};

export default {defaultProps, propTypes, render, shouldUpdate};
