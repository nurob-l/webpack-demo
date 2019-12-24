const Koa = require('koa');
const webpack = require('webpack');
const devMiddleware = require('koa-webpack-middleware').devMiddleware;
const hotMiddleware = require('koa-webpack-middleware').hotMiddleware;
const devConfig = require('./webpack.config.js');

const app = new Koa();
const compiler = webpack(devConfig);
 
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: devConfig.output.publicPath
}));

app.use(hotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});