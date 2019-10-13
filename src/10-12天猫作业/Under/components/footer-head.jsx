//顶部组件
import React from 'react';
//引入react

export default () => {
    return <React.Fragment>
        <p className='topp'>
            <span>您是不是想找</span>
            <a href="">华为</a>
            <a href="">小米</a>
            <a href="">魅族</a>
            <a href="">荣耀</a>
            <a href="">华为手机</a>
            <a href="">vivo</a>
            <a href="">oppo</a>
            <a href="">三星</a>
        </p>
        <div className='search'>
            <div>
                <div className="main">
                    <input type="text" placeholder='手机'/>
                    <button>搜索</button>
                </div>
            </div>
        </div>
        <p className='btmm'>
            喵~在此反馈您的意见和建议吧，
            <a href="#">立即反馈</a>
        </p>
    </React.Fragment>
};