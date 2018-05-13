exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('texts').del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([ 
	{name: "about", 
	 url: "about",
	 short_title:JSON.stringify(
	   {tereo:"e pā ana ki",
	    english:"about"}),
	 title:JSON.stringify(
	   {tereo:"e pā ana ki",
	    english:"about"
	   }
	 ),
	  paragraphs:JSON.stringify([
	    {tereo:"lorum ipsum",
	     english:"english lorum ipsum"
	    }
	  ]),
	  author: 'Laura',
	  translator: 'Alex'
	},
	{name: "legend", 
	 url: "legend",
	 short_title:JSON.stringify(
	   {tereo:"need Te Reo",
	    english:"the Legend"}),
	 title:JSON.stringify(
	   {tereo:"te Reo needed for Tāwhirimātea",
	     english:"The Legend of Tāwhirimātea"
	   }),
	  paragraphs:JSON.stringify([
	    {tereo:"lorum ipsum",
	     english:"english lorum ipsum"
	    }
	  ]),
	  author: 'Laura',
	  translator: 'Alex'
	},
	{name: "contributing", 
	 url: "contributing",
	 short_title:JSON.stringify(
	   {tereo:"need Te Reo",
	    english:"Contributing"}),
	 title:JSON.stringify(
	   {tereo:"te Reo needed for Contributing",
	     english:"How to contribute to this project"
	    }),
	  paragraphs:JSON.stringify([
	    {tereo:"lorum ipsum",
	     english:"english lorum ipsum"
	    }
	  ]),
	  author: 'Laura',
	  translator: 'Alex'
	}
      ]);
    });
};
