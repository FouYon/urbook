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
    <div>
      <ImageGallery
        items={images}
        slideInterval={2000}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets
        showThumbnails={false}
      />
      <Card>
        <Card.Header
          title='这是 title'
          thumb='https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png'
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>这是卡片内容</div>
        </Card.Body>
        <Card.Footer content='这是卡尾' extra={<div>这是尾部介绍</div>} />
      </Card>
    </div>
  );
};

export default Home;
