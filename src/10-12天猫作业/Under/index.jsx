import React from 'react';
import './components/index.css'
import FooterHead from './components/footer-head'
import FooterBody from './components/footer-body'
// import FooterFoot from './components/footer-foot'

export default class Index extends React.Component {
    // React.Fragment 占位组件，他不会在页面中生成任何的元素
    render() {
        return <div className='wrap'>
            <FooterHead/>
            <FooterBody/>
            {/*<FooterFoot/>*/}
        </div>
    }
}
