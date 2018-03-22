'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = {
  init(app, router) {
    app.use(router(_ => {
      _.get('/index', async (ctx, next) => {
        console.log("当前：" + __dirname);
        ctx.body = await ctx.render('index');
      });
      _.get('/receive', async (ctx, next) => {
        console.log(ctx.request);
        const post = {
          username: ctx.request.query.username
        };
        console.log(ctx.request.query.username);
        const query = _config2.default.query('INSERT INTO userinfo SET  ?', post, function (err, result) {});
        ctx.response.type = 'application/json';
        ctx.response.body = JSON.stringify({
          errorCode: 0
        });
      });
    }));
  }
};

exports.default = route;