import React from 'react';
import { Button, WhiteSpace, WingBlank, Card, Icon } from 'antd-mobile';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './home.less';

const Home = () => {
  const images = [
    {
      original: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ];
  return (
    <div style={{ marginBottom: '120px' }}>
      <ImageGallery
        items={images}
        slideInterval={2000}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets
        showThumbnails={false}
      />
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

export default Home;
