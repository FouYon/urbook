import React from 'react';
import { connect } from 'dva';
import { List, NavBar, Popup, WhiteSpace, WingBlank, Card, Icon } from 'antd-mobile';

const Book = () => {
  const showDetail = () => {
    Popup.show(
      <div style={{ height: '100vh', overflow: 'scroll', width: '100%' }}>
        <NavBar
          style={{ position: 'fixed', height: '7vh', width: '100%', zIndex: '100' }}
          leftContent='返回'
          rightContent={<Icon type={require('../../assets/like-1.svg')} onClick={() => console.log('clickme')} />}
          mode='light'
          onLeftClick={() => Popup.hide()}
        />
        <WhiteSpace style={{ height: '8vh' }} />
        <WingBlank>
          <Card>
            <Card.Header
              title='用户名'
              thumb={require('../../assets/images/default.png')}
              extra={<span>50元</span>}
            />
            <Card.Body>
              <img alt='用户名' src={require('../../assets/images/porter.jpg')} style={{ width: '20%' }} />
              <p>这本书用乐好久列</p>
            </Card.Body>
            <Card.Footer content='重庆科技学院' extra={<div>评论10</div>} />
          </Card>
          <WhiteSpace />
          <p>评论</p>
          <Card>
            <Card.Header
              title='用户名'
              thumb={require('../../assets/images/default.png')}
            />
            <Card.Body>
              <p>我我家设很长的的文件我家设很长的的文件我家设很长的的文件我家设很长的的文件我家设很长的的文件我家设很长的的文件我家设很长的的文件我家设很长的的文件家设很长的的文件</p>
            </Card.Body>
          </Card>
        </WingBlank>
      </div>,
    { animationType: 'slide-up', maskClosable: false });
  };
  return (
    <div style={{ marginBottom: '120px' }}>
      <WhiteSpace />
      <WingBlank>
        <Card onClick={showDetail} >
          <Card.Header
            title='用户名'
            thumb={require('../../assets/images/default.png')}
            extra={<span>50元</span>}
          />
          <Card.Body>
            <img alt='用户名' src={require('../../assets/images/porter.jpg')} style={{ width: '20%' }} />
            <List.Item>
            这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列
            </List.Item>
          </Card.Body>
          <Card.Footer content='重庆科技学院' extra={<div>评论10</div>} />
        </Card>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Card onClick={showDetail}>
          <Card.Header
            title='用户名'
            thumb={require('../../assets/images/default.png')}
            extra={<span>50元</span>}
          />
          <Card.Body>
            <img alt='用户名' src={require('../../assets/images/porter.jpg')} style={{ width: '20%' }} />
            <p>这本书用乐好久列</p>
          </Card.Body>
          <Card.Footer content='重庆科技学院' extra={<div>评论10</div>} />
        </Card>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Card>
          <Card.Header
            title='用户名'
            thumb={require('../../assets/images/default.png')}
            extra={<span>50元</span>}
          />
          <Card.Body>
            <img alt='用户名' src={require('../../assets/images/porter.jpg')} style={{ width: '20%' }} />
            <p>这本书用乐好久列</p>
          </Card.Body>
          <Card.Footer content='重庆科技学院' extra={<div>评论10</div>} />
        </Card>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Card>
          <Card.Header
            title='用户名'
            thumb={require('../../assets/images/default.png')}
            extra={<span>50元</span>}
          />
          <Card.Body>
            <img alt='用户名' src={require('../../assets/images/porter.jpg')} style={{ width: '20%' }} />
            <p>这本书用乐好久列</p>
          </Card.Body>
          <Card.Footer content='重庆科技学院' extra={<div>评论10</div>} />
        </Card>
      </WingBlank>
    </div>
  );
};

export default connect(({ app }) => ({ app }))(Book);
