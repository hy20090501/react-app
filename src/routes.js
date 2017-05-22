import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由
import { App, Employee, Goods, EmployeeList, GoodsList, EmployeeDetail, GoodsDetail } from './containers' // 引入各容器组件

export default (
	<Route path="/" component={App}>
		<IndexRoute component={EmployeeList}/>
		<Route path="/employee" component={Employee}>
			<IndexRoute component={EmployeeList}/>
			<Route path="/employee/list" component={EmployeeList}/>
			<Route path="/employee/detail/:id" component={EmployeeDetail}/>
		</Route>
		<Route path="/goods" component={Goods}>
			<IndexRoute component={GoodsList}/>
			<Route path="/goods/list" component={GoodsList}/>
			<Route path="/goods/detail/:id" component={GoodsDetail}/>
		</Route>
	</Route>
)