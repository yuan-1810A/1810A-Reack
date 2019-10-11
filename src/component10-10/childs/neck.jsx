import React from 'react'

export default props => {
	return <div className="headTop" style={{ height: '50px' }}>
		<div className="buttonHead">{props.children}</div>
	</div>
}