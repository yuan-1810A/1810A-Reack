import React from 'react'
import Son from '../Son'
export default () => {
	return <div className="top">
		<div className="topTop">
			<Son cla="topTopBack"></Son>
			<Son cla="topTopBack"></Son>
			<Son cla="topTopBack"></Son>
			<Son cla="topTopBack"></Son>
			<Son cla="topTopBack"></Son>
			<Son cla="topTopBack"></Son>
			<div className="topTopBack"></div>
			<div className="topTopBack"></div>
			<div className="topTopBack"></div>
			<div className="topTopBack"></div>
			<div className="topTopBack" style={{ background: '#fff' }}></div>
			<div className="topTopBack"></div>
			<div className="topTopBack"></div>
			<div className="topTopBack"></div>
		</div>
		<div className="topLeft">
			<div className="topLeftCon">IDC</div>
			<div className="topLeftCon" style={{ background: 'rgb(40,140,255)' }}>内核与容器</div>
			<div className="topLeftCon" style={{ background: 'rgb(220,86,92)' }}>内存</div>
			<div className="topLeftCon">IDC</div>
			<div className="topLeftCon" style={{ background: 'rgb(40,140,255)' }}>内核与容器</div>
			<div className="topLeftCon" style={{ background: 'rgb(220,86,92)' }}>内存</div>
			{/*底部*/}
			<div className="topLeftCon backTop">机房</div>
			<div className="topLeftCon backTop">机房</div>
		</div>
	</div>
}