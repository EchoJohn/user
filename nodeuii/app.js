const koa = require('koa');
const path = require('path');
//配置swig
const render =  require('koa-swig');
var co = require('co');
import config from './config/config.js';
const server = require('koa-static');
const app = new koa();
const router = require('koa-simple-router');
import controllers from './controllers/controllers.js';
import errorHandler from './middleware/errorHandler.js'
app.context.render = co.wrap(render({
  root: path.join(__dirname, '/views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
controllers.init(app, router);
errorHandler.error(app);
config.connection;
app.listen(8081,function(){
	console.log("Server is running");
});
//配置静态文件
// const server = require('koa-static');
app.use(server(__dirname));
