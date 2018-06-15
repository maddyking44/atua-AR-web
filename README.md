# ATUA-AR website

This is a fork of Laura and Zach's React and Redux website that they built for our Atua AR project: https://github.com/l-suzuki/atua-web. The intention of the project was to demonstrate the conecepts behind an Augmented Reality app we built.

To push the site out for real world use to people who are intested in the AR app, I've made afew changes. I've restructured the website to make it mobile responsive and added in some descriptions about the AR mechanics in the About Us / Tõ matou kaupapa page. 

The original site has an awesome effect that switches te reo Māori to English on mouse hover. I've had to work with this to make it useable on a mobile (where there's no hover). 

The original site included a p5 animation that moved in response to the wind. However it didn't replicate the Tāwhirimātea model that we used in the AR app. As people showed interest in seeing this model I took down the p5 and replaced it with a static 2D image of Tāwhirimātea which changes based on the time of day.

The aim is to convert this to a 3D model using three.js, which I'm playing with here: https://github.com/maddyking44/js-threejs-atua-website
