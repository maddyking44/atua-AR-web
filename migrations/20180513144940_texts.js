
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('texts',
    table => {
      table.increments('id')
      table.string('name')
      table.string('url')
      table.string('title')
      table.string('author')
      table.string('translator')
      table.string('paragraphs')
    }
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('texts')
};
