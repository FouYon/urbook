const path = require('path');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, './src/assets'),  // 业务代码本地私有 svg 存放目录
];

export default {
  "svgSpriteLoaderDirs": svgSpriteDirs,
  "entry": "src/index.js",
  "disableCSSModules": false,
  "publicPath": "/",
  "autoprefixer": {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  "proxy": {
    "/": {
      "target": "http://localhost:5000",
      "changeOrigin": true,
      "pathRewrite": { "^/" : "" }
    }
  },
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", [{ "libraryName": "antd-mobile", "style": "css" }, { "libraryName": "antd", "style": true }]]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  }
}
