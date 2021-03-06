import React from 'react'
import { connect } from 'dva'
import { NoticeBar, Grid, WhiteSpace, WingBlank } from 'antd-mobile'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Home = ({ app, dispatch }) => {
  dispatch({ type: 'gethome' })
  const { homeData } = app
  const images = [
    {
      original: 'images/book1.jpg'
    },
    {
      original: 'images/book2.jpg'
    },
    {
      original: 'images/book3.jpg'
    }
  ]
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
        <NoticeBar>热门书籍</NoticeBar>
        <Grid
          data={homeData}
          columnNum={3}
          hasLine={false}
          renderItem={(dataItem) => (
            <div style={{ margin: '0.16rem', background: '#f7f7f7', textAlign: 'center' }}>
              <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem' }}>
                <span>{dataItem.text}</span>
              </div>
              <img alt='img' src={dataItem.img} style={{ width: '80%', margin: '0.12rem' }} />
            </div>
          )}
        />
      </WingBlank>
    </div>
  )
}

export default connect(({ app, loading }) => ({ app, loading: loading.global }))(Home)
