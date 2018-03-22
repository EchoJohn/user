'use strict';

var _config = require('./config/config.js');

var _config2 = _interopRequireDefault(_config);

var _controllers = require('./controllers/controllers.js');

var _controllers2 = _interopRequireDefault(_controllers);

var _errorHandler = require('./middleware/errorHandler.js');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const koa = require('koa');
const path = require('path');
//配置swig
const render = require('koa-swig');
var co = require('co');

const server = require('koa-static');
const app = new koa();
const router = require('koa-simple-router');

app.context.render = co.wrap(render({
  root: path.join(__dirname, '/views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
_controllers2.default.init(app, router);
_errorHandler2.default.error(app);
_config2.default.connection;
app.listen(8081, function () {
  console.log("Server is running");
});
//配置静态文件
// const server = require('koa-static');
app.use(server(__dirname + '/public'));