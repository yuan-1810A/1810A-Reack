// 内容部分
import React from 'react'

export default () => {
	// 抛出
	let el = React.createElement;
	// 顶级api赋值给一个变量
	return el('main', { key: '内容', className: 'main' }, [
		// 三个部分
		el('div', { key: '左', className: 'conDiv' }, '左侧部分'),
		el('div', { key: '中', className: 'conDiv', style: { width: '400px' } }, '中间部分'),
		// 给中间的加了内联样式
		el('div', { key: '右', className: 'conDiv' }, '右侧部分')
	])
}