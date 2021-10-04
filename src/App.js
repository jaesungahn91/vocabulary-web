import {Layout} from "antd";
import 'antd/dist/antd.css';

import Header from "./components/header/Header";
import Vocabulary from "./components/content/vocabulary/Vocabulary";
import Login from "./components/content/login/Login";
import Register from "./components/content/regist/Register";

import {HashRouter, Route, Switch} from "react-router-dom";
import React from "react";

function App() {
    return (
    <>
        <Layout className="layout">
            <Header/>
            <Switch>
                <Layout style={{ padding: '24px 24px 24px 24px' }}>
                    <Route exact="/" path="/login" component={Login} />
                    <Route path="/vocabulary" component={Vocabulary} />
                    <Route path="/register" component={Register} />
                </Layout>
            </Switch>
        </Layout>
    </>
  );
}

export default App;