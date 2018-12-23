import Router from 'koa-router';
import queries from '../db/queries/posts';

const BASE_PATH = '/api/posts';
const router = new Router();

router
    .get(BASE_PATH, async (ctx) => {
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
    })
    .get(`${BASE_PATH}/:id`, async (ctx) => {
        try {
            const post = await queries.getSinglePost(ctx.params.id);
            ctx.body = {
                status: 'success',
                data: post
            };
        }
        catch (err) {
            console.log(err);
        }
    });

export default router;
