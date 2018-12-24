import Router from 'koa-router';
const router = new Router();

router.get('/', async (ctx) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
        message: 'Hello, world!',
        status: 'success'
    };
});

export default router;
