import React from 'react'
// 引入头部身体和底部组件
import Footer from './childs/footer'
import Main from './childs/main'
import Header from './childs/header'

export default () => {
	// 用一个div包裹把组件渲染到页面上
	return React.createElement('div', { key: 'conter', className: 'border' }, [
		<Header key="头部" />,
		<Main key="身体" />,
		<Footer key="底部" />
	])
}