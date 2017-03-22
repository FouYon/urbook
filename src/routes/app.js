import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import Login from '../components/login';
import Signup from '../components/signup';

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
          style={{ display: 'none' }}
        >
          <TabBar.Item
            title='首页'
            key='首页'
            icon={<Icon type='home' />}
            selectedIcon={<Icon type='home' />}
            onPress={() => {
              dispatch({ type: 'app/switchTagBar', payload: { selected: 1 } });
            }}
            selected={selected === 1}
          >
            <div>这里有内容</div>
          </TabBar.Item>
          <TabBar.Item
            title='二手书'
            key='二手书'
            icon={<Icon type='book' />}
            selectedIcon={<Icon type='book' />}
            onPress={() => {
              dispatch({ type: 'app/switchTagBar', payload: { selected: 2 } });
            }}
            selected={selected === 2}
          >
            <p>Tab2</p>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type='environment' />}
            selectedIcon={<Icon type='environment' />}
            title='附近'
            key='附近'
            onPress={() => {
              dispatch({ type: 'app/switchTagBar', payload: { selected: 3 } });
            }}
            selected={selected === 3}
          >
            <div>这是TabBar3的内容</div>
          </TabBar.Item>
          <TabBar.Item
            title='我的'
            key='我的'
            icon={<Icon type='user' />}
            selectedIcon={<Icon type='user' />}
            onPress={() => {
              dispatch({ type: 'app/switchTagBar', payload: { selected: 4 } });
            }}
            selected={selected === 4}
          >
            <div>Tab4</div>
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  );
};

export default connect(({ app }) => ({ app }))(App);
