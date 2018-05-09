exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', 
    table => {
      table.increments('id')
      table.string('title')
      table.string('content')
    }
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
