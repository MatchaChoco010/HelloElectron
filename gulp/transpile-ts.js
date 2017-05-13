const gulp = require('gulp');
const glob = require('glob');
const path = require('path');
const minimist = require('minimist');
const webpack = require('webpack');

const srcDir = path.resolve(__dirname, '../src');
const appDir = path.resolve(__dirname, '../app');

const args = minimist(
  process.argv.slice(2),
  { string: 'env', default: { env: 'production' } }
);

const baseOption = {
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ]
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
};

const developOption = {
  plugins: [
    new webpack.DefinePlugin({ _DEBUG: JSON.stringify(true) }),
  ],
  devtool: 'inline-source-map',
};

const productionOption = {
  plugins: [
    new webpack.DefinePlugin({ _DEBUG: JSON.stringify(false) }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

const mainOption = {
  target: "electron-main",
  context: srcDir,
  entry: './main',
  output: {
    filename: 'main.js',
    path: appDir,
  },
};

const rendererEntry = glob.sync('./src/**/index.tsx')
.map(p => path.relative('src', p))
.map(p => path.parse(p))
.map(parsed => `./${parsed.dir}/${parsed.name}`)
.reduce((entry, p) => {
  entry[p] = p;
  return entry;
}, {});

const rendererOption = {
  target: "electron-renderer",
  context: srcDir,
  entry: rendererEntry,
  output: {
    filename: '[name].js',
    path: appDir,
  },
};

const options = [mainOption, rendererOption]
.map(option => Object.assign({}, baseOption, option))
.map(option => Object.assign(option, args.env === 'production' ? productionOption : developOption));

gulp.task(
  'transpile-ts',
  ['clean'],
  cb => webpack(options, cb)
);
