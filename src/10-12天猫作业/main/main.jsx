import React from 'react';
import Mobile from './mobile';//手机
import './main.css'
let imgs = [
	{
		src: require("./img/iPhone8.jpg"),
		hue: require("./img/iPhone8.jpg"),
		money: '4999.00',
		name: 'Apple/苹果 iPhone 8 Plus',
		shop: '小张足浴店',
		sales: '1笔'
	},
	{
		src: require("./img/roHUAWEI Mate30Pro.png"),
		hue: require("./img/roHUAWEI Mate30Pro.png"),
		money: '6000.00',
		name: 'HUAWEI HUAWEI Mate 30 Pro',
		shop: '华为官方旗舰店',
		sales: '4.2万笔'
	},
	{
		src: require("./img/Samsung Note10.jpg"),
		hue: require("./img/Samsung Note10.jpg"),
		money: '999.00',
		name: 'Samsung/三星 Galaxy Note10+ SM-N9760 5G',
		shop: '三星官方旗舰店',
		sales: '5473笔'
	},
	{
		src: require("./img/vivo NEX 3.jpg"),
		hue: require("./img/vivo NEX 3.jpg"),
		money: '2499.00',
		name: 'vivo NEX 3 5G 即将上市 加购抽NEX 3手机',
		shop: 'vivo官方旗舰店',
		sales: '10956笔'
	},
	{
		src: require("./img/Redmi Note8 Pro.jpg"),
		hue: require("./img/Redmi Note8 Pro.jpg"),
		money: '1399.00',
		name: 'Xiaomi/小米 Redmi Note8 Pro',
		shop: '小米官方旗舰店',
		sales: '5.5万笔'
	},
	{
		src: require("./img/vivo NEX 3.jpg"),
		hue: require("./img/vivo NEX 3.jpg"),
		money: '2499.00',
		name: 'vivo NEX 3 5G 即将上市 加购抽NEX 3手机',
		shop: 'vivo官方旗舰店',
		sales: '10956笔'
	},
	{
		src: require("./img/Samsung Note10.jpg"),
		hue: require("./img/Samsung Note10.jpg"),
		money: '999.00',
		name: 'Samsung/三星 Galaxy Note10+ SM-N9760 5G',
		shop: '三星官方旗舰店',
		sales: '5473笔'
	},
	{
		src: require("./img/roHUAWEI Mate30Pro.png"),
		hue: require("./img/roHUAWEI Mate30Pro.png"),
		money: '6000.00',
		name: 'HUAWEI HUAWEI Mate 30 Pro',
		shop: '华为官方旗舰店',
		sales: '4.2万笔'
	},
	{
		src: require("./img/vivo NEX 3.jpg"),
		hue: require("./img/vivo NEX 3.jpg"),
		money: '2499.00',
		name: 'vivo NEX 3 5G 即将上市 加购抽NEX 3手机',
		shop: 'vivo官方旗舰店',
		sales: '10956笔'
	},
	{
		src: require("./img/Samsung Note10.jpg"),
		hue: require("./img/Samsung Note10.jpg"),
		money: '999.00',
		name: 'Samsung/三星 Galaxy Note10+ SM-N9760 5G',
		shop: '三星官方旗舰店',
		sales: '5473笔'
	}, {
		src: require("./img/iPhone8.jpg"),
		hue: require("./img/iPhone8.jpg"),
		money: '4999.00',
		name: 'Apple/苹果 iPhone 8 Plus',
		shop: '小张足浴店',
		sales: '1笔'
	},
	{
		src: require("./img/roHUAWEI Mate30Pro.png"),
		hue: require("./img/roHUAWEI Mate30Pro.png"),
		money: '6000.00',
		name: 'HUAWEI HUAWEI Mate 30 Pro',
		shop: '华为官方旗舰店',
		sales: '4.2万笔'
	},
	{
		src: require("./img/Samsung Note10.jpg"),
		hue: require("./img/Samsung Note10.jpg"),
		money: '999.00',
		name: 'Samsung/三星 Galaxy Note10+ SM-N9760 5G',
		shop: '三星官方旗舰店',
		sales: '5473笔'
	},
	{
		src: require("./img/vivo NEX 3.jpg"),
		hue: require("./img/vivo NEX 3.jpg"),
		money: '2499.00',
		name: 'vivo NEX 3 5G 即将上市 加购抽NEX 3手机',
		shop: 'vivo官方旗舰店',
		sales: '10956笔'
	},
	{
		src: require("./img/Redmi Note8 Pro.jpg"),
		hue: require("./img/Redmi Note8 Pro.jpg"),
		money: '1399.00',
		name: 'Xiaomi/小米 Redmi Note8 Pro',
		shop: '小米官方旗舰店',
		sales: '5.5万笔'
	}
]
export default class Index extends React.Component {
	render() {
		return (
			<div className='boxes flex'>
				{
					imgs.map((item, index) => {
						return <Mobile
							src={item.src}
							hue={item.hue}
							money={item.money}
							name={item.name}
							shop={item.shop}
							sales={item.sales}
							key={index}
						/>
					})
				}
			</div>
		)
	}
}