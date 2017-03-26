// const path = require('path');

// const db = require(path.resolve('./lib/db'));

module.exports.get = (req, res) => {
  const data = [
    {
      user: '123',
      thumb: 'images/default.png',
      content: '这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列'
    },
    {
      user: '234',
      thumb: 'images/default.png',
      content: '这这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列这本书用乐好久列本书用乐好久列'
    }
  ];
  return res.json({ message: '获取成功', data });
};
