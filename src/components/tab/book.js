import React from 'react';
import { Button, WhiteSpace, WingBlank, Card, Icon } from 'antd-mobile';
import styles from './book.less';

const Book = () => {
  return (
    <div style={{ marginBottom: '120px' }}>
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

export default Book;
