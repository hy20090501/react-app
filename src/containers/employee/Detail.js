import React, { Component, PropTypes } from 'react' // 引入React
import { Link } from 'react-router' // 引入Link处理导航跳转
import { connect } from 'react-redux' // 引入connect 
import { Table } from 'antd';
// import { fetchPostsIfNeeded } from '../../actions/agentdetail'

class Detail extends Component {
	constructor(props){
		super(props);  
        // this.state = {searchStr: ''};  
        // this.handleChange = this.handleChange.bind(this);
        // console.log('*************************************************************************************')
        // console.log(this.props.params.member_id);
	}
	componentDidMount() {
		// const { fetchPostsIfNeeded } = this.props
		// fetchPostsIfNeeded()
	}
	render() {

		return(
			<div>
				<span>id：{this.props.params.id}</span>&nbsp;&nbsp;<span>手机号码：1565713100</span>
			</div>
		)
	}
}


// 获取state中的lists值
const getDetail = state => {
	return {
		detail: state.update.detail,
	}
}

// 利用connect将组件与Redux绑定起来
export default connect(
	getDetail
)(Detail)
