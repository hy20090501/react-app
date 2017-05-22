import React, { Component } from 'react' // 引入React

export default class Goods extends Component {

	render() {
		return(
			<div>{ this.props.children }</div>
		)
	}
}