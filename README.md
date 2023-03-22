all the test variables are added in two different way\
you can see the test data inside ../fixtures\
and some test variables are added hardcoded inside.\
and also change the url to localhost url

mkdir cypress
cd 
npm -i init -- crates package .json
## to install cy
   npm install cypress --save -dev
## start cypress
   npx cypress open
   node_module/.bin/cypress open
   npx cypress run
   npx cypress run --browser chrome
   npx cypress run --headed
   npx cypress run --spec cypress/e2e/spec.cy.js  
   npx cypress run --spec cypress/e2e/spec.cy.js  --headed
