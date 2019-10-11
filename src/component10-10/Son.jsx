import React from 'react'

export default props => {
	let Type = props.type || 'div';
	return <Type className={props.cla || ''} style={props.sty}>
		{props.children || props.text || ''}
	</Type>
}