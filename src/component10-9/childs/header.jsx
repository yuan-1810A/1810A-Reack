// 头部内容
import React from 'react'

export default () => {
	// 抛出头部内容
	let el = React.createElement;
	// 把顶级api赋给一个变量,性能的小优化
	return el('header', { key: '头部', className: 'head' }, [
		// 头部里面的三个button按钮
		el('button', { key: '首页', className: 'btn' }, '首页'),
		el('button', { key: '新闻', className: 'btn' }, '新闻'),
		el('button', { key: '关于', className: 'btn' }, '关于')
	])
}