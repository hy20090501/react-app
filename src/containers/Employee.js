import React, { Component } from 'react' // 引入React

export default class Employee extends Component {

	render() {
		return(
			<div>{ this.props.children }</div>
		)
	}
}