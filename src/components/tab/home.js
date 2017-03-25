import React from 'react';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Home = () => {
  const images = [
    {
      original: 'images/morning.jpg'
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
        autoPlay
      />
      <WhiteSpace />
      <WingBlank>
        <div>hello</div>
      </WingBlank>
    </div>
  );
};

export default Home;
