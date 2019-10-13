import React from 'react'
// 引入头部的css
import './css/head.css'

export default () => {
	return <div className="header">
		{/*最顶部导航*/}
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
					<i className="header-top-fang hedaer-xia"></i>
				</li>
				<li>
					<i className="header-top-fang header-gouwu"></i>
					<a href="https://login.taobao.com/member/login.jhtml?redirectURL=http%3A%2F%2Fcart.tmall.com%2Fcart%2FmyCart.htm%3Ffrom%3Dbtop">购物车<span className="textSize">0</span>件</a>
				</li>
				<li>
					<a href="https://login.taobao.com/member/login.jhtml?from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fshoucang.taobao.com%2Fshop_collect_list_n.htm%3Fscjjc%3Dc1">收藏夹</a>
					<i className="header-top-fang hedaer-xia"></i>
				</li>
				<li className="header-top-border">
					|
				</li>
				<li>
					<i className="header-top-fang header-logo-shouji"></i>
					<a href="https://pages.tmall.com/wow/portal/act/app-download?scm=1027.1.1.1">手机版</a>
				</li>
				<li>
					<a href="https://www.taobao.com/">淘宝网</a>
				</li>
				<li>
					<a href="https://login.taobao.com/member/login.jhtml?from=taobaoindex&f=top&style=&sub=true&redirect_url=https%3A%2F%2Fmyseller.taobao.com%2Fseller_admin.htm">商家支持</a>
					<i className="header-top-fang hedaer-xia"></i>
				</li>
				<li>
					<i className="header-logo-list header-top-fang"></i>
					<span>网站导航</span>
					<i className="header-top-fang hedaer-xia"></i>
				</li>
			</ul>
		</div>
		{/*logo和搜索框*/}
		<div className="header-con flex">
			<h1 className="mallogo">
				<a href="">
					<s className="header-con-logo"></s>
				</a>
			</h1>
			<div className="header-con-right">
				<div className="header-con-right-top flex">
					<input type="text" className="header-input" autoComplete="off" placeholder="手机" title="请输入搜索文字" />
					<button className="header-button">搜索</button>
				</div>
				<ul className="flex header-ul-width">
					<li>华为</li>
					<li>|</li>
					<li>小米</li>
					<li>|</li>
					<li>魅族</li>
					<li>|</li>
					<li>荣耀</li>
					<li>|</li>
					<li>华为手机</li>
					<li>|</li>
					<li>vivo</li>
					<li>|</li>
					<li>oppo</li>
					<li>|</li>
					<li>三星</li>
				</ul>
			</div>
		</div>
		{/*中间的品牌选择*/}
		<div className="header-bottom">
			<div className="header-bottom-h1 flex">
				<ul className="header-bottom-ul flex">
					<li>
						<a href="" className="header-bottom-a">电器城首页</a>
					</li>
					<li>
						<a href="" className="header-bottom-a">手机馆</a>
					</li>
					<li>
						<a href="" className="header-bottom-a">苏宁易购</a>
					</li>
				</ul>
				<div style={{ fontSize: '14px' }}>
					电器城服务台
				</div>
			</div>
			<div className="header-bottom-ss flex">
				<div className="header-bottom-ss-left">
					全部 >
					<input type="text" title="搜索关键字" autoComplete="off" placeholder="手机" className="header-bottom-input" />
					<i className="header-bottom-i"></i>
				</div>
				<div className="header-bottom-ss-right">
					共
					<span className="header-bottom-ss-right-span">2190835</span>
					件商品
				</div>
			</div>
			<div className="header-bottom-xuanxiang flex">
				<div className="header-bottom-xx-left">
					品牌
				</div>
				{/*logo展示*/}
				<ul className="header-bottom-logo-ul flex">
					<li>
						<img src="https://img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg" alt="苹果" width="80" height="37" />
					</li>
					<li>
						<img src="https://img.alicdn.com/bao/uploaded/TB1r23ZRXXXXXaxXXXXXXXXXXXX" alt="小米" width="80" height="37" />
					</li>
					<li>
						<img src="https://img.alicdn.com/bao/uploaded/TB1Z.mzyMmTBuNjy1XbXXaMrVXa" alt="华为" width="80" height="37" />
					</li>
					<li>
						<img src="https://img.alicdn.com/bao/uploaded/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg" alt="三星" width="80" height="37" />
					</li>
					<li>
						<img src="https://img.alicdn.com/bao/uploaded/TB1UWloLzTpK1RjSZKPXXa3UpXa" alt="oppo" width="80" height="37" />
					</li>
					<li>
						<img src="https://img.alicdn.com/bao/uploaded/TB1.OyOKXXXXXX.XVXXSutbFXXX.jpg" alt="酷派" width="80" height="37" />
					</li>
					<li className="right-li">
						<img src="https://img.alicdn.com/bao/uploaded/TB1gR9vsyrpK1RjSZFhXXXSdXXa" alt="荣耀" width="80" height="37" />
					</li>
				</ul>
				<div className="header-gengduo">
					<div className="header-rader">
						+多选
					</div>
					<div className="header-rader-gd">更多 Ⅴ </div>
				</div>
			</div>
			<div className="header-rader-bottom flex">
				<div className="header-bottom-xx-left" style={{ height: '23px', lineHeight: '13px' }}>
					▶ 分类
				</div>
				<span className="header-span-position">手机</span>
				<div className="header-rader-gd">更多 Ⅴ </div>
			</div>
		</div>
	</div >
}