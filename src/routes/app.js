import React from 'react';
import { connect } from 'dva';
import { TabBar, Icon } from 'antd-mobile';
import Login from '../components/login';
import Signup from '../components/signup';
import User from '../components/tab/user';
import Home from '../components/tab/home';

/**
 * 第一个Object { app, children, dispatch, history, location, params }
 * dispatch({ type: 'app/reducer', payload: { state: 'foo' } });
 * app表示组件Model
 * dispatch用于触发action
 * location表示当前路径
 */

const App = ({ app, dispatch }) => {
  const { showLogin, showSignup, selected } = app;
  const loginProp = { dispatch };
  const signupProp = { dispatch };
  const userProp = { dispatch };
  return (
    <div>
      <div style={{ display: showLogin ? 'block' : 'none' }}>
        <Login {...loginProp} />
      </div>
      <div style={{ display: showSignup ? 'block' : 'none' }}>
        <Signup {...signupProp} />
      </div>
      <div style={{ display: !showLogin && !showSignup ? 'block' : 'none' }}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
        >
          <TabBar.Item
            title='首页'
            key='首页'
            icon={<Icon type={require('../assets/home-1.svg')} />}
            selectedIcon={<Icon type={require('../assets/home-1.svg')} />}
            selected={selected === 1}
            onPress={() => {
              dispatch({ type: 'app/switchTabBar', payload: { selected: 1 } });
            }}
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            title='二手书'
            key='二手书'
            icon={<Icon type={require('../assets/notebook-5.svg')} />}
            selectedIcon={<Icon type={require('../assets/notebook-5.svg')} />}
            selected={selected === 2}
            onPress={() => {
              dispatch({ type: 'app/switchTabBar', payload: { selected: 2 } });
            }}
          >
            Tab2
          </TabBar.Item>
          <TabBar.Item
            title='闲置'
            key='闲置'
            icon={<Icon type={require('../assets/view.svg')} />}
            selectedIcon={<Icon type={require('../assets/view.svg')} />}
            selected={selected === 3}
            onPress={() => {
              dispatch({ type: 'app/switchTabBar', payload: { selected: 3 } });
            }}
          >
            Tab3
          </TabBar.Item>
          <TabBar.Item
            title='我的'
            key='我的'
            icon={<Icon type={require('../assets/user.svg')} />}
            selectedIcon={<Icon type={require('../assets/user.svg')} />}
            selected={selected === 4}
            onPress={() => {
              dispatch({ type: 'app/switchTabBar', payload: { selected: 4 } });
            }}
          >
            <User {...userProp} />
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  );
};

export default connect(({ app, loading }) => ({ app, loading: loading.global }))(App);
