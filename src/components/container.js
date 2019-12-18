import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {
    Switch,
    Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { RouteWithSubRoutes } from "../routes";
import { getMenuList } from '../actions/common'
const { Header, Content, Footer, Sider } = Layout;

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentWillMount(){
        this.props.getMenuList();
    }
    render(){
        const { routes, permission, menuList } = this.props;
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" >
                        {`${process.env.REACT_APP_PROJECT_NAME}`}
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                    </Menu>
                </Header>
                <Content>
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                                {
                                    menuList.map((e, index) =>
                                        <Menu.Item key={index}>
                                            <Icon type="user" />
                                            <span><Link to={'/app/'+e.url} >{e.name}</Link></span>
                                        </Menu.Item>
                                    )
                                }
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header>
                            <Content
                                style={{
                                    margin: '24px 16px',
                                    padding: 0,
                                    background: '#fff',
                                    minHeight: 580,
                                }}
                            >
                                <Switch>
                                    {routes.map((route, i) => (
                                        <RouteWithSubRoutes key={i} {...route} permission={permission}/>
                                    ))}
                                </Switch>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Content>
            </Layout>

        )
    }
}


const data = state => {
    return {
        permission: state.global.permission,
        menuList: state.global.menuList
    }
}
export default connect(data, {
    getMenuList
})(Container);




