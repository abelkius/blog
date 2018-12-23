
export const seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'My first post!', content: 'Hey, this is my first ever post on this blog', date: 111111111 },
        {id: 2, title: 'Hello World', content: 'This is about my efforts to make my own blog framework', date: 111111111 },
        {id: 3, title: 'Whats new in JS 2019!', content: 'Not sure if I will be able to name it all but here is some stuff I found interesting in the first half of 2019', date: 111111111 },
      ]);
    });
};
