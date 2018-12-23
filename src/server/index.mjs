import Koa from 'koa';
import dotenv from 'dotenv';
import router from './routes/index';
dotenv.load();

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(router.routes());

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
