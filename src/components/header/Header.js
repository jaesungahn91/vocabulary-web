import React from "react";
import ReactDOM from "react-dom";
import './Header.css';

import { Layout, Menu } from "antd";
import 'antd/dist/antd.css';
import {HashRouter, Link, Router} from "react-router-dom";

const Header = () => {

    let click = () => {
        ReactDOM.render(document.getElementById());
    };

    return (
        <Layout.Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/vocabulary">단어</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/login">로그인</Link></Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Header;