// const path = require('path');

// const db = require(path.resolve('./lib/db'));

module.exports.get = (req, res) => {
  const data = [
    {
      user: '123',
      thumb: 'images/default.png',
      content: '123'
    },
    {
      user: '234',
      thumb: 'images/default.png',
      content: '234'
    },
    {
      user: 'a123',
      thumb: 'images/default.png',
      content: 'a123'
    },
    {
      user: '2b34',
      thumb: 'images/default.png',
      content: '2b34'
    }
  ];
  return res.json({ message: '获取成功', data });
};
