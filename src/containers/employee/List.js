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
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '2',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		}];

		const columns = [{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: '地址',
		  dataIndex: 'address',
		  key: 'address',
		},
		{
		  title: '操作',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <Link to={{ pathname: '/employee/detail/'+record.key}} className="nav-text" style={{ display: 'inline-block' }}>编辑</Link>
		    </span>
		  )
		}];
		return(
			<Table dataSource={dataSource} columns={columns} />
		)
	}
}

// 验证组件中的参数类型
// List.propTypes = {
// 	lists: PropTypes.arrayOf(PropTypes.shape({
// 		text: PropTypes.string.isRequired
// 	}).isRequired).isRequired
// }

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
