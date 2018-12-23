import knex from '../connection';

export const getAllPosts = () => knex('posts').select('*');
export const getSinglePost = (id) => knex('posts').select('*').where({ id: parseInt(id) });

export default {
    getAllPosts,
    getSinglePost
};
