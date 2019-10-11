// 引入react
import React from 'react';
// 引入全局css样式
import './10-10晚自习作业/index.css';
import ReactDOM from 'react-dom';
// 引入主文件渲染页面
import App from './10-10晚自习作业/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();