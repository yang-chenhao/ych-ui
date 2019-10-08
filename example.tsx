import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import Icon from './lib/icon/icon';
import './example.scss';
import IntroPage from './site_page/introduction/introduction';
import StartPage from './site_page/start/start';
import IconPage from './site_page/iconPage/iconPage';


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
                        Icon 
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="site-submenutitle">布局</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/layout">Layout
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="site-submenutitle">信息反馈</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/dialog">Dialog
                      <div className="site-menuitemend"></div>
                      </NavLink> 
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="site-submenutitle">数据录入</div>
                  <ul>
                    <li>
                      <NavLink className="site-menuitem site-subitem" to="/form">Form
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
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; yangchenhao 
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));