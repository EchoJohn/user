import connection from '../config/config.js'
const route = {
  init(app, router) {
    app.use(router(_ => {
      _.get('/index', async(ctx, next) => {
        //console.log("当前：" + __dirname);
        ctx.body = await ctx.render('index');
      })
      _.get('/receive', async(ctx, next) => {
        console.log(ctx.request);
        const post = {
          username: ctx.request.query.username
        };
        console.log(ctx.request.query.username);
        const query = connection.query('INSERT INTO userinfo SET  ?', post, function(err, result) {});
        ctx.response.type = 'application/json';
        ctx.response.body = JSON.stringify({
          errorCode: 0
        })

      })
    }))
  }
}

export default route;
