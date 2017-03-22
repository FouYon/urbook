import React from 'react';
import { List, Button, WhiteSpace, Card } from 'antd-mobile';
import { Icon } from 'antd';
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
      <Card full>
        <Card.Header
          style={{ fontSize: 'large' }}
          title='用户姓名'
          thumb='https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png'
        />
      </Card>
      <List>
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
      <WhiteSpace />
      <List>
        <Item
          className={styles.item}
          thumb={<Icon type='user' />}
          arrow='horizontal'
          onClick={() => {}}
        ><p style={{ fontSize: 'large' }}>关于我们</p></Item>
      </List>
      <Button size='small' type='warning' {...logoutProp}><p style={{ fontSize: 'large' }}>退出登录</p></Button>
    </div>
  );
};

export default User;
