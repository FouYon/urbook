import React from 'react';
import { connect } from 'dva';
import { ActivityIndicator, Button, TextareaItem, SearchBar, List, NavBar, WhiteSpace, WingBlank, Card, Icon } from 'antd-mobile';
import Mask from '../../components/mask';

const Book = ({ app, dispatch, loading }) => {
  const { showMask, bookData, cur, comments } = app;
  const commentStyle = {
    display: 'flex',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100vw',
    zIndex: 300,
    background: 'white'
  };
  const showDetail = ({ user, title }) => {
    dispatch({ type: 'app/getcomments', payload: { user, title } });
    dispatch({ type: 'app/showMask' });
    dispatch({ type: 'app/updateCur', payload: { user, title } });
  };
  return (
    <div>
      <ActivityIndicator animating={loading} toast size='large' />
      <Mask visible={showMask}>
        <div style={{ height: '100vh', overflow: 'scroll', width: '100%' }}>
          <NavBar
            style={{ position: 'fixed', height: '100px', width: '100%', zIndex: '100' }}
            leftContent='返回'
            rightContent={<Icon type={require('../../assets/like-1.svg')} onClick={() => console.log('clickme')} />}
            mode='light'
            onLeftClick={() => {
              dispatch({ type: 'app/hideMask' });
            }}
          />
          <WhiteSpace style={{ height: '120px' }} />
          <WingBlank>
            <Card>
              <Card.Header
                title={cur.title}
                thumb={cur.thumb}
                extra={<span>{cur.extra}</span>}
              />
              <Card.Body>
                {cur.imgs ? cur.imgs.map(img => (
                  <img alt='mig' key={img} src={img} style={{ width: '20%' }} />
                )) : ''}
                <List.Item wrap>
                  {cur.content}
                </List.Item>
              </Card.Body>
              <Card.Footer content={cur.location} extra={<div>评论{cur.comment}</div>} />
            </Card>
            <WhiteSpace />
            <p>评论</p>
            {comments.map(c => (
              <div>
                <WhiteSpace />
                <Card key={c.user + c.title}>
                  <Card.Header
                    title={c.user}
                    thumb={c.thumb}
                  />
                  <Card.Body>
                    <p>{c.content}</p>
                  </Card.Body>
                </Card>
                <WhiteSpace />
              </div>
            ))}
            <WhiteSpace style={{ height: '120px' }} />
            <div style={commentStyle}>
              <div style={{ flex: 10 }}>
                <TextareaItem
                  rows={1}
                  placeholder='留言'
                />
              </div>
              <div style={{ flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button type='ghost' size='small' inline>发送</Button>
              </div>
            </div>
          </WingBlank>
        </div>
      </Mask>
      <SearchBar />
      <WhiteSpace />
      {bookData.map(d => (
        <WingBlank key={d.user + d.title}>
          <Card onClick={() => showDetail({ user: d.user, title: d.title })} >
            <Card.Header
              title={d.title}
              thumb={d.thumb}
              extra={<span>{d.extra}</span>}
            />
            <Card.Body>
              {d.imgs.map(img => (
                <img alt='用户名' key={img} src={img} style={{ width: '20%' }} />
              ))}
              <List.Item>
                {d.content}
              </List.Item>
            </Card.Body>
            <Card.Footer content={d.location} extra={<div>评论{d.comment}</div>} />
          </Card>
          <WhiteSpace />
        </WingBlank>
      ))}
      <WhiteSpace style={{ height: '120px' }} />
      <div style={{ position: 'fixed', right: '30px', bottom: '120px', background: 'white' }}>
        <Button type='ghost' inline>发帖</Button>
      </div>
    </div>
  );
};

export default connect(({ app, loading }) => ({ app, loading: loading.global }))(Book);
