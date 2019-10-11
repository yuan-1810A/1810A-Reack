import React from 'react'

export default () => {
	return <div className="leg">
		{/*leg里面的第一部分*/}
		<div className="legOne">
			<div className="legOneCon">监控</div>
		</div>
		{/*leg里面的第二部分*/}
		<div className="legTwo">
			<div className="legTwoTop">kube-controlier-manager</div>
			<div className="legTwoLeft">kube-apiserver</div>
			<div className="legTwoLeft">kube-apiserver</div>
		</div>
		{/*leg里面的第三部分*/}
		<div className="legTwo styleS">
			<div className="etcd" style={{ marginBottom: '22px' }}>
				<div className="etcdText">
					etcd
				</div>
			</div>
			<div className="etcd">
				<div className="etcdText" style={{ padding: '6px 20px', height: '68%' }}>
					镜像仓库
				</div>
			</div>
		</div>
		{/*leg里面的第四部分*/}
		<div className="legTwo" style={{ width: '270px', marginRight: '0' }}>
			<div className="legTwochang">docker</div>
			<div className="legTwochang">hulk-agent</div>
			<div className="legTwochang legTwoduan">CNI</div>
			<div className="legTwochang legTwoduan">CLI</div>
			<div className="legTwochang">kubelet</div>
		</div>
	</div>
}