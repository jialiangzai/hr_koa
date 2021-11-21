const Koa = require('koa')
const serve = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const app = new Koa()
const proxy = require('koa2-proxy-middleware')
// 生产模式的代理
app.use(proxy({
  targets: {
    // (.*) means anything
    '/prod-api/(.*)': {
      target: 'http://8.142.65.7:3000', //后端服务器地址
      changeOrigin: true,
      // 重写路由
      pathRewrite: {
        '/prod-api': "/api"
      }
    }
  }
}))
// 处理刷新
// 这句话 的意思是除接口之外所有的请求都发送给了 index.html
app.use(historyApiFallback({
  whiteList: ['/prod-api'] // 这里的whiteList是 白名单的意思
}))
//将public作为对外静态资源访问目录
app.use(serve(__dirname + '/public'))
app.listen(8889, () => {
  console.log(`人资项目启动成功：http://localhost:8889`)
})