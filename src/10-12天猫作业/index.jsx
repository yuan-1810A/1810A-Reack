import React, { Component } from 'react'
//梁永琪的头部组件
import Header from './header/header'
//陈旭的导航组件
import Fixed from './fixed/index'
//葛思豪的商品展示栏组件
import Main from './main/main';
//王子豪的底部组件

export default class Index extends Component {
	// 渲染函数
	render() {
		return <React.Fragment>
			{/*这是头部*/}
			<Header></Header>
			{/*这是粘性定位*/}
			<Fixed></Fixed>
			{/*至尊商品展示*/}
			<Main></Main>
		</React.Fragment>
	}
}