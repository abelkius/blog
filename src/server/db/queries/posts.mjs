import knex from '../connection';

export const getAllPosts = () => knex('posts').select('*');

export default {
    getAllPosts
};
