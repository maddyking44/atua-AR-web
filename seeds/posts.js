exports.seed = function(knex, Promise) {
  //Deletes all existing entries.
  return knex('posts').del()
    .then(function () {
      //insert seed entries
      return knex('posts').insert([
      {title: 'History', content: 'this is the history of Tangi Te Keo'},
      {title: 'Process', content: 'This is how we made this site and why'},
      {title: 'About', content: 'This is how we made this site and why'}
      ])
    })
}

