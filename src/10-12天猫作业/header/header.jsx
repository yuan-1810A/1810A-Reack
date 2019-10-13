import React from 'react'
// 引入头部的css
import './css/head.css'

export default () => {
	return <div className="header">
		<div className="top-con-top flex">
			<ul className="header-top-left flex">
				<li>
					<i className="header-top-fang"></i>
					<a href="https://www.tmall.com/">天猫首页</a>
				</li>
				<li>
					喵，欢迎来到天猫
				</li>
				<li>
					<a href="https://login.tmall.com/?redirectURL=https%3A%2F%2Flist.tmall.com%2Fsearch_product.htm%3Fq%3D%25CA%25D6%25BB%25FA%26type%3Dp%26vmarket%3D%26spm%3D875.7931836%252FB.a2227oh.d100%26from%3Dmallfp..pc_1_searchbutton">请登录</a>
				</li>
				<li>
					<a href="https://register.tmall.com/">免费注册</a>
				</li>
			</ul>
			<ul className="header-top-right flex">
				<li>
					<a href="https://login.taobao.com/member/login.jhtml?from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fi.taobao.com%2Fmy_taobao.htm">我的淘宝</a>
				</li>
				<li>
					<i></i>
					<a href="">购物车<span>0</span>件</a>
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
}