import React from 'react';
import { List, Button, WingBlank, WhiteSpace, Card, Icon } from 'antd-mobile';
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
          title='这是 title'
          thumb={require('../../assets/images/porter.png')}
          thumbStyle={{ width: '200px' }}
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>这是卡片内容</div>
        </Card.Body>
        <Card.Footer content='这是卡尾' extra={<div>这是尾部介绍</div>} />
      </Card>
      <WhiteSpace />
      <List>
        <Item
          className={styles.item}
          thumb={<Icon type={require('../../assets/settings-4.svg')} />}
          arrow='horizontal'
          onClick={() => {}}
        >设置</Item>
        <Item
          className={styles.item}
          thumb={<Icon type={require('../../assets/like-2.svg')} />}
          arrow='horizontal'
          onClick={() => {}}
        >收藏</Item>
      </List>
      <WhiteSpace />
      <List>
        <Item
          className={styles.item}
          thumb={<Icon type={require('../../assets/paper-plane-1.svg')} />}
          arrow='horizontal'
          onClick={() => {}}
        >关于我们</Item>
      </List>
      <WhiteSpace />
      <WingBlank>
        <Button type='warning' {...logoutProp}>退出登录</Button>
      </WingBlank>
    </div>
  );
};

export default User;
