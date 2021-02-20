// Node.js API → built-in module
const path = require('path')

// resolve.alias 사용을 위한 유틸리티 함수
const getAbsPath = (dir) => path.resolve(__dirname, dir)

// dist 디렉토리 참조 변수 (절대 경로)
const distDir = getAbsPath('dist')

// Webpack 구성 파일(export webpack configure module)
// Webpack에 나 이렇게 작업할 거라고 알려주는 것!
module.exports = {
  entry: './src/index.js',
  output: {
    path: distDir,
    filename: 'assets/js/main.js',
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // style-loader, css-loader 구성
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        // exclude: /\.module\.css$/i,
      },
      // CSS Module ([filename].module.css)
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/i,
      },
    ],
  },

  // https://webpack.js.org/configuration/resolve/#resolvealias
  resolve: {
    alias: {
      '@modules': getAbsPath('src/modules/'),
      '@components': getAbsPath('src/components/'),
    },
  },
}
