import React from 'react';
import List from 'antd-mobile/lib/list';
import Button from 'antd-mobile/lib/button';
// import Card from 'antd-mobile/lib/card';
import { Icon, Card } from 'antd';
import styles from './user.less';

const Item = List.Item;

const User = ({ dispatch }) => {
  const logoutProp = {
    onClick() {
      dispatch({ type: 'app/logout' });
    }
  };
  return (
    <div>
      <List>
        <Card title='我的信息'>
          <p>hello</p>
        </Card>
        <Item
          className={styles.item}
          thumb={<Icon type='setting' />}
          arrow='horizontal'
          onClick={() => {}}
        ><p style={{ fontSize: 'large' }}>设置</p></Item>
        <Item
          className={styles.item}
          thumb={<Icon type='star' />}
          arrow='horizontal'
          onClick={() => {}}
        ><p style={{ fontSize: 'large' }}>收藏</p></Item>
      </List>
      <br />
      <List>
        <Item
          className={styles.item}
          thumb={<Icon type='user' />}
          arrow='horizontal'
          onClick={() => {}}
        ><p style={{ fontSize: 'large' }}>关于我们</p></Item>
      </List>
      <br />
      <Button size='small' type='warning' {...logoutProp}><p style={{ fontSize: 'large' }}>退出登录</p></Button>
    </div>
  );
};

export default User;
