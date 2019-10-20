import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import FormExample from './lib/form/form.example';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import Icon from './lib/icon/icon';
import './example.scss';
import IntroPage from './site_page/introduction/introduction';
import StartPage from './site_page/start/start';
import IconPage from './site_page/iconPage/iconPage';
import LayoutPage from './site_page/layoutPage/layoutPage';
import DialogPage from './site_page/dialogPage/dialogPage';


const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="26" height="26" alt=""/>
          <span> Yui-react </span>
        </div>
        <div className="github">
        <a target='_blank' href='https://github.com/yang-chenhao/ych-ui'>
          <Icon name='github' />
        </a>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <ul className="site-menu">
            <li>
              <NavLink className="site-menuitem" to="/index">Yui-react
              <div className="site-menuitemend"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className="site-menuitem" to="/start">开始使用
              <div className="site-menuitemend"></div>
              </NavLink>
            </li>
            <li>
              <div className="site-submenutotaltitle">
                Components
              </div>
              <ul>
                <li>
                  <div className="site-submenutitle">通用</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/icon">
                        Icon 图标
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="site-submenutitle">布局</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/layout">Layout 布局
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="site-submenutitle">信息反馈</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/dialog">Dialog 对话框
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="site-submenutitle">数据录入</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/form">Form 表单
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/index" component={IntroPage}/>
          <Route path="/start" component={StartPage}/>
          <Route path="/icon" component={IconPage}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogPage}/>
          <Route path="/layout" component={LayoutPage}/>
          <Route path="/form" component={FormExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; yangchenhao 
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));