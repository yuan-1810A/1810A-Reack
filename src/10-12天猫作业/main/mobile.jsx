import React from 'react';

export default (props) => {
	return (
		<div className='product'>
			<div className='product-iWrap'>
				<div className='productImg'>
					<a>
						<img src={props.src || require('./img/default.jpg')}
							width={props.width || '210'}
							height={props.height || '210'} />
					</a>
				</div>
				<div className='productThumb'>
					<div className='proThumb-wrap'>
						<b className='proThumb-img'>
							<img src={props.src || require('./img/default.jpg')}
								width={props.width || '30'}
								height={props.height || '30'} />
						</b>
						<b className='proThumb-img'>
							<img src={props.src || require('./img/default.jpg')}
								width={props.width || '30'}
								height={props.height || '30'} />
						</b>
						<b className='proThumb-img'>
							<img src={props.src || require('./img/default.jpg')}
								width={props.width || '30'}
								height={props.height || '30'} />
						</b>
					</div>
				</div>
				<p className='productPrice'>
					<em>
						<b>￥</b>
						{props.money}
					</em>
				</p>
				<div className='productTitle'>
					<a href="//detail.tmall.com/item.htm?id=558509313522&skuId=4387881294813&user_id=1917047079&cat_id=2&is_b=1&rn=13a6ea38a37b7ab94a28acdb87d10085" className='ahove'>
						{props.name}
					</a>
				</div>
				<div className='productShop'>
					<a href="" className='ahove'>{props.shop}</a>
				</div>
				<p className='productStatus'>
					<span>
						该款月成交
							<em>{props.sales}</em>
					</span>
				</p>
			</div>
		</div>
	)
}