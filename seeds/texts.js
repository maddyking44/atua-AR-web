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
	    {
	      tereo:"Noho ai a Tāwhirimātea i roto i te tauawhitanga o ana pakeke a Ranginui rāua ko Papatūānuku, ā, kua roa kē te whānau e noho pērā ana. He rawe ki a ia te noho piri ki ana pakeke. Ka taea tana kōrero ki tana whaea, me te tohutohu i tana matua i ngā wā e pīrangihia ana. Kāre he aha ki a Tāwhirimātea, ngā uauatanga o te noho pō i ngā wā katoa me te kōpātanga hoki, kua mate kē a ia me ōna tuākana ki te ngōki haere. Kua eke kē ngā wera o ana tuākana.",
	      english:"Tāwhirimātea lived between the embrace of Ranginui and Papatūānuku as did the other children of his whānau. He liked living close to his parents. He could talk to his mother, and get advice from his father when he needed to. Tāwhirimātea didn't mind the difficulties of living in continual darkness, or that space was so confined that he and the rest of his siblings had to crawl to get around. But the other children had had enough."
	    },
	    {
	      tereo:"Ka karangahia he hui, ka whakataungia e te nuinga o ngā tamariki, kia wehea ō rātau pakeke.",
	      english:"A meeting was called and the majority of the children decided that their parents had to be separated."
	    },
	    {
	      tereo:"Ka kī a Tūmatauenga, 'Ki te rongo rāua i te rau o taku patu, kātahi rā ka maunu mai rāua, kua pai tō tātau hikoi i raro i te maru o Tamanuiterā.'",
	      english:" Tūmātauenga addressed them, 'Once they feel the blows of my patu they will soon loosen their grip and we'll finally be free to walk upright and greet Tamanuiterā, the sun.'"
	    },
	    {
	      tereo:"Ka whakahē tonu a Tāwhirimātea, me tana tīwaha atu i tōna āpitihanga, kia rongohia e te katoa, 'Ko wai koutou! Ko wai koutou ki te whakamamae i ō tātau pakeke? Nā rāua tātau i whāngai, i poipoi, i whakatipu hoki, ka huri atu koutou ka pēnei atu ki a rāua?' Whakatakariri ana a ia.",
	      english:"Tāwhirimātea disagreed.'How dare you! How dare you think of hurting our parents in such a way. They fed you, nurtured and raised you, and now you reward them with this?'"
	    },
	    {
	      tereo:"Kātahi ka tuohu ngā māhunga o ngā tamariki i runga i te whakamā, heoi anō, ka totohe tonu a Tūmatauenga.",
	      english:"The children bowed their heads in shame, but Tūmatauenga stood his ground."
	    },
	    {
	      tereo:"'Kua whiua kēhia te pātai ki a rāua kia wehe, kua patipati atu tātau ki a rāua, kia pai ai te kite i te ao mārama, me te kore anō e aro mai? E kāo! Kotahi noa iho te huarahi hei whail!'",
	      english:"'We have asked them to separate, we have pleaded with them to let us see the light, but do they listen? No, this is the only way!'"
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
	},
	{
	  name: "about this page",
	  url: "about-page",
	  short_title: JSON.stringify(
	    {tereo: "TEREO NEEDED for About-this-page",
	     english: "About This Page."
	    }
	  ),
	    title: JSON.stringify(
	      { tereo: "TE REO NEEDED",
		english: "About this Page."
	      }
	    ),
	    paragraphs: JSON.stringify([
	      {tereo: "Te Reo Needed",
	       english: ",This visualisation is inspired by the legend of Tawhirimatea. Its form changes depending on the wind speed and direction in Te Whanganui-a-Tara Wellington."
	      }
	    ]),
	    author: "Laura",
	    translator: "Alex"
	}
      ]);
    });
};
