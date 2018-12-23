
export const up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
      table.increments();
      table.string('title').notNullable().unique();
      table.string('content').notNullable();
      table.integer('date').notNullable();
  })
};

export const down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};
