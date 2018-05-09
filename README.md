# Web App for ATUA_AR

Haere Mai! Welcome to the Github home for ATUA_AR's Web App division.

This is part of an EDA final project by Ben, Zach, Anthony, Maddy and Laura.

### Our Kaupapa / Vision

# MVP User Stories

### Home/Landing Page

* I want to see a landing page with a visualisation that changes depending on data received from a local weather API.
* I want the visualisation to live update
* I want a title at the top of the landing page that reads the name of the project
* I want to have a hidden nav bar that appears on mouse over.
* I want to use the nav bar to explore more about the project: I can click on nav items and have those items render on the page.
* I want to see all the text in Te Reo Maori and English (hereafter referred to as bilingual)

### About/Kaupapa
* I want an About page that explains what the ATUA_AR project is
* I want this page to be bilingual

### The Story of Tawhirimatea
* I want a page which tells the story of Tawhirimatea
* I want this page to be bilingual


### Contributions
* I want a page where I can see how I can contribute to this project
* I want to see ways to contact the people involved
* I want a link to the source code/github repo
* I want this page to be bilingual  

### Process
* I want a page that documents the story of the project itself
* I want to see images as well as text
* I want this page to be bilingual



```sh
npm install
knex migrate:latest
knex seed:run

```

  `npm run dev` or `yarn dev` for bundling, watch and nodemon

  `npm start` or `yarn start` only runs server (setup for heroku)


# Heroku!!!

#### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


#### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

`yarn h:deploy` will push your local master branch to your heroku app

`yarn h:migrate` will run your knex migrations on your deployed heroku app

`yarn h:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `npm run h:rollback`


## Ta-Da!
Your app should be deployed!
