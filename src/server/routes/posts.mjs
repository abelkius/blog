import Router from 'koa-router';
import queries from '../db/queries/posts';

const basePath = '/api/posts';
const router = new Router();

router.get(basePath, async (ctx) => {
    try {
        const posts = await queries.getAllPosts();
        ctx.body = {
            status: 'success',
            data: posts
        };
    }
    catch (err) {
        console.log(err);
    }
});

export default router;
