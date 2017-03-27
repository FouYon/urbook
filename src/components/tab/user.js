import React from 'react';
import { ActivityIndicator, ImagePicker, InputItem, NavBar, List, Button, WingBlank, WhiteSpace, Card, Icon } from 'antd-mobile';
import { connect } from 'dva';
import styles from './user.less';
import Mask from '../../components/mask';

const Item = List.Item;

var name = '';
var brief = '';
const User = ({ dispatch, app, user, loading }) => {
  const { showMask } = app;
  const { files } = user;
  const logoutProp = {
    onClick() {
      dispatch({ type: 'app/logout' });
    }
  };
  const changeImage = (files) => {
    dispatch({ type: 'user/updateUser', payload: { files } });
  };
  const update = () => {
    dispatch({ type: 'user/updateuser', payload: { files, name, brief } });
  };
  return (
    <div>
      <ActivityIndicator
        toast
        animating={loading}
      />
      <Mask visible={showMask}>
        <div style={{ height: '100vh', overflow: 'scroll', width: '100%' }}>
          <NavBar
            style={{ position: 'fixed', height: '100px', width: '100%', zIndex: '100' }}
            leftContent='返回'
            mode='light'
            onLeftClick={() => dispatch({ type: 'app/hideMask' })}
          />
          <WhiteSpace style={{ height: '120px' }} />
          <List>
            <InputItem
              clear
              autoFocus
              onChange={(val) => (name = val)}
            >用户名</InputItem>
            <InputItem
              clear
              onChange={(val) => (brief = val)}
            >简介</InputItem>
            <Item>头像</Item>
            <ImagePicker
              files={files}
              selectable={files.length < 1}
              onChange={changeImage}
            />
          </List>
          <WingBlank>
            <Button type='primary' onClick={update} disabled={!(name && brief && files.length)}>更新</Button>
          </WingBlank>
        </div>
      </Mask>
      <Card full>
        <Card.Header
          title={<div style={{ marginLeft: '30px' }}>用户名</div>}
          thumb={require('../../assets/images/porter.jpg')}
          thumbStyle={{ width: '200px' }}
        />
        <Card.Body>
          <div>用用户简介用户简介用户用户简介用户简介用户简介用户简介户简介</div>
        </Card.Body>
      </Card>
      <WhiteSpace />
      <List>
        <Item
          className={styles.item}
          thumb={<Icon type={require('../../assets/settings-4.svg')} />}
          arrow='horizontal'
          onClick={() => dispatch({ type: 'app/showMask' })}
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

export default connect(({ app, user, loading }) => ({ app, user, loading: loading.global }))(User);
