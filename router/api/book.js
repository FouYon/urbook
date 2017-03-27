// const path = require('path');

// const db = require(path.resolve('./lib/db'));

module.exports.get = (req, res) => {
  const data = [
    {
      user: '123',
      title: '计算机组成原理',
      thumb: 'images/default.png',
      extra: '50元',
      imgs: ['images/book1.jpg', 'images/book2.jpg', 'images/book3.jpg'],
      content: '这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列',
      location: '重庆科技学院',
      comment: '10'
    },
    {
      user: '234',
      title: '数据结构',
      thumb: 'images/default.png',
      extra: '20元',
      imgs: ['images/book.jpg'],
      content: '这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列',
      location: '重庆科技学院',
      comment: '20'
    },
    {
      user: 'a123',
      title: '计算机组成原理',
      thumb: 'images/default.png',
      extra: '50元',
      imgs: ['images/book1.jpg', 'images/book2.jpg', 'images/book3.jpg'],
      content: '这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列',
      location: '重庆科技学院',
      comment: '10'
    },
    {
      user: 'a234',
      title: '数据结构',
      thumb: 'images/default.png',
      extra: '20元',
      imgs: ['images/book.jpg'],
      content: '这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列',
      location: '重庆科技学院',
      comment: '20'
    }
  ];
  return res.json({ message: '获取成功', data });
};
