import React, { Component } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'

import { Layout, Menu, Breadcrumb, Icon} from 'antd';
const { Header, Footer, Content, Sider  } = Layout;

export default class App extends Component {

	render() {
		return(
			<Layout>
				<Header className="header">
					<div className="logo"></div>
					<TopMenu></TopMenu>
				</Header>
				<Layout>
				  <Sider width={200} style={{ background: '#fff' }}>
					<LeftMenu></LeftMenu>
				  </Sider>
				  <Layout style={{ padding: '0 24px 0 24px',minHeight: '800px' }}>
					<Breadcrumb style={{ margin: '12px 0',display:'none' }}>
					  <Breadcrumb.Item>Home</Breadcrumb.Item>
					  <Breadcrumb.Item>List</Breadcrumb.Item>
					  <Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					  { this.props.children }
					</Content>
				  </Layout>
				</Layout>
				<Footer  style={{ textAlign: 'center' }}>
					Ant Design ©2016 Created by Ant UED
				</Footer>
			</Layout>
		)
	}
}