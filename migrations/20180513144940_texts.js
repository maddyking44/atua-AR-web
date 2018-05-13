
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('texts',
    table => {
      table.increments('id')
      table.string('name')
      table.string('url')
      table.string('short_title')
      table.string('title')
      table.string('paragraphs')
      table.string('author')
      table.string('translator')
    }
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('texts')
};
