// 动态数据
import React, { Component } from 'react'
import { Link } from 'react-router' // 引入Link处理导航跳转
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, refreshData } from '../actions/count'
import { Menu } from 'antd';
class LeftMenu extends Component {

	 componentDidMount() {
		// const { fetchPostsIfNeeded } = this.props
		// fetchPostsIfNeeded(true)
	}
	render() {
		const { leftMenuList } = this.props
		return (
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
			{
			  leftMenuList.map((e, index) => 
				<Menu.Item key={index}>
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
		leftMenuList: state.update.leftMenuList
	}
}

export default connect(
	getList, 
	{ fetchPostsIfNeeded }
)(LeftMenu)
