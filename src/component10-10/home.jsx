import React, { Component } from 'react'
import Head from './childs/head'
import Neck from './childs/neck'
import Chest from './childs/chest'
import Leg from './childs/leg'
import Top from './childs/top'
// 导出一个继承了顶级api的类
export default class Index extends Component {
	// 渲染函数
	render() {
		// 用一个占位元素，不会在浏览器上生成标签,防止报错
		return <div className='const'>
			{/*头部*/}
			<Head></Head>
			{/*上边分界部分*/}
			<Neck>HULK API</Neck>
			{/*主要展示部分*/}
			<Chest></Chest>
			{/*下边分界部分*/}
			<Neck>Kuberentes API</Neck>
			{/*底部*/}
			<Leg></Leg>
			{/*最底部*/}
			<Top></Top>
		</div>
	}
}