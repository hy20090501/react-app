import React, { Component, PropTypes } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转
import { connect } from 'react-redux' // 引入connect 
import { Table } from 'antd';
import { fetchPostsIfNeeded } from '../../actions/count'

class List extends Component {
	componentDidMount() {
		// const { fetchPostsIfNeeded } = this.props
		// fetchPostsIfNeeded()
	}
	render() {
		// const { lists } = this.props;
		const dataSource = [{
		  key: '1',
		  name: '苹果',
		  price: 32
		}, {
		  key: '2',
		  name: '胡彦祖',
		  price: 42
		}];

		const columns = [{
		  title: '名称',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '价格',
		  dataIndex: 'price',
		  key: 'price',
		}, 
		{
		  title: '操作',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <Link to={{ pathname: '/goods/detail/'+record.key}} className="nav-text" style={{ display: 'inline-block' }}>编辑</Link>
		    </span>
		  )
		}];
		return(
			<Table dataSource={dataSource} columns={columns} />
		)
	}
}

// 获取state中的lists值
const getList = state => {
	return {
		lists: state.update.lists,
	}
}

// 利用connect将组件与Redux绑定起来
export default connect(
	getList,
	{ fetchPostsIfNeeded }
)(List)
