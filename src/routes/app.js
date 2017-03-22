import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import TabBar from 'antd-mobile/lib/tab-bar';
import Login from '../components/login';
import Signup from '../components/signup';
import User from '../components/tab/user';

/**
 * 第一个Object { app, children, dispatch, history, location, params }
 * dispatch({ type: 'app/reducer', payload: { state: 'foo' } });
 * app表示组件Model
 * dispatch用于触发action
 * location表示当前路径
 */

const App = ({ app, dispatch, loading }) => {
  const { showLogin, showSignup, selected } = app;
  const loginProp = {
    onOk(data) {
      dispatch({ type: 'app/login', payload: data });
    },
    loginButtonLoading: loading,
    dispatch
  };
  const signupProp = {
    onOk(data) {
      dispatch({ type: 'app/signup', payload: data });
    },
    loginButtonLoading: loading,
    dispatch
  };
  const userProp = {
    dispatch
  };
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
            icon={<Icon type='home' style={{ fontSize: 'x-large' }} />}
            selectedIcon={<Icon type='home' style={{ fontSize: 'x-large' }} />}
            selected={selected === 1}
            onPress={() => {
              dispatch({ type: 'app/switchTabBar', payload: { selected: 1 } });
            }}
          >
            Tab1
          </TabBar.Item>
          <TabBar.Item
            title='二手书'
            key='二手书'
            icon={<Icon type='book' style={{ fontSize: 'x-large' }} />}
            selectedIcon={<Icon type='book' style={{ fontSize: 'x-large' }} />}
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
            icon={<Icon type='eye' style={{ fontSize: 'x-large' }} />}
            selectedIcon={<Icon type='eye' style={{ fontSize: 'x-large' }} />}
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
            icon={<Icon type='smile' style={{ fontSize: 'x-large' }} />}
            selectedIcon={<Icon type='smile' style={{ fontSize: 'x-large' }} />}
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
