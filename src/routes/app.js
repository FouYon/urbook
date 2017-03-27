import React from 'react';
import { connect } from 'dva';
import { TabBar, Icon } from 'antd-mobile';
import Login from '../components/login';
import Signup from '../components/signup';
import User from '../components/tab/user';
import Home from '../components/tab/home';
import Book from '../components/tab/book';
import Find from '../components/tab/find';

/**
 * 第一个Object { app, children, dispatch, history, location, params }
 * dispatch({ type: 'app/reducer', payload: { state: 'foo' } });
 * app表示组件Model
 * dispatch用于触发action
 * location表示当前路径
 */

const App = ({ app, dispatch }) => {
  const { showLogin, showSignup, selected, user } = app;
  const loginProp = { dispatch };
  const signupProp = { dispatch };
  const userProp = { dispatch };
  if (showLogin) {
    return <Login {...loginProp} />;
  } else if (showSignup) {
    return <Signup {...signupProp} />;
  } else {
    return (
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
            dispatch({ type: 'app/getbook', payload: { user } });
          }}
        >
          <Book />
        </TabBar.Item>
        <TabBar.Item
          title='周边'
          key='周边'
          icon={<Icon type={require('../assets/view.svg')} />}
          selectedIcon={<Icon type={require('../assets/view.svg')} />}
          selected={selected === 3}
          onPress={() => {
            dispatch({ type: 'app/switchTabBar', payload: { selected: 3 } });
          }}
        >
          <Find />
        </TabBar.Item>
        <TabBar.Item
          title='我的'
          key='我的'
          icon={<Icon type={require('../assets/user.svg')} />}
          selectedIcon={<Icon type={require('../assets/user.svg')} />}
          selected={selected === 4}
          onPress={() => {
            dispatch({ type: 'app/switchTabBar', payload: { selected: 4 } });
            dispatch({ type: 'user/getuser' });
          }}
        >
          <User {...userProp} />
        </TabBar.Item>
      </TabBar>
    );
  }
};

export default connect(({ app, loading }) => ({ app, loading: loading.global }))(App);
