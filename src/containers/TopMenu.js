// 动态数据
import React, { Component } from 'react'
import { Link } from 'react-router' // 引入Link处理导航跳转
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, updateSubMenuWhenClick } from '../actions/count'
import { Menu } from 'antd';
class TopMenu extends Component {
	constructor(props){
		super(props);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	handleMenuClick(e){
		// console.log(e.item.props['data-menukey']);
		const { updateSubMenuWhenClick } = this.props
		updateSubMenuWhenClick(true, e.item.props['data-menukey'])
	}
	componentWillMount() {
	}
	componentDidMount() {
		const { fetchPostsIfNeeded } = this.props
		fetchPostsIfNeeded()
	}
	render() {
		const { menuList, fetchPostsIfNeeded } = this.props
		if(menuList.length != 0) {
			fetchPostsIfNeeded(true, menuList[0].key)
		}

		return (
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['0']}
				style={{ lineHeight: '64px' }}
				onClick={this.handleMenuClick}
			>
			{
				menuList.map((e, index) => 
					<Menu.Item key={index} data-menukey={e.key}  >
						<Link to={{ pathname: e.url }} >{e.name}</Link>
					</Menu.Item>
				)
			}
			</Menu>
		)
	}
}

const getList = state => {
	return {
		menuList: state.update.menuList
	}
}

export default connect(
	getList, 
	{ fetchPostsIfNeeded, updateSubMenuWhenClick }
)(TopMenu)
