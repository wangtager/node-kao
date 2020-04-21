const router = require('koa-router')()
const query = require('../utils/query')
router.get('/pv', async (ctx, next) => {
  let {request} =ctx
  console.log(request)
  let type  = request.query.id
  let pv= await query.queryPV(type)
  ctx.body = {
    pv
  }
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
