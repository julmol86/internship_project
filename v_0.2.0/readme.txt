Download nodejs from here -> https://nodejs.org/en/download/

npx create-react-app ict4n --template typescript
cd ict4n
rd /s /q .git
npm install react-hook-form @hookform/resolvers yup axios
npm install react-bootstrap bootstrap@5.1.3
npm install @types/react-router-dom@5 react-router-dom@5
npm i react-bootstrap-icons
npm i react-i18next @types/react-i18next i18next --save
npm install i18next-http-backend i18next-browser-languagedetector --save
npm install --save react-toastify
npm start run

---------------

MySQL:

https://dev.mysql.com/downloads/installer/ (community)

download bigger file (about 500 Mb)
click Execute button on the missing requirements view!
root password: MySqlIsShit!1
user: ict4n
role: DbAdmin
password: ict4n

--------------

Node.js Koa:

cd <...\backend>
npm init -y
npm install koa
npm install @types/koa
npm install -g nodemon
npm install @koa/router
npm install @koa/cors
npm install koa-body
npm install promise-mysql
nodemon index.ts

---------------

Backend start:

npm install
nodemon index.ts

---------------

Frontend start:

npm install
npm start run

---------------

Links:

react-toastify -> https://fkhadra.github.io/react-toastify/introduction/

---------------

Version 0.1

+ bootstrap (note! Import should be before all other css -files inside project)
+ react router
+ axios
+ schema fields correct

Version 0.2

+ backend
+ DB MySQL

Version 0.3

+ new folder structure for frontend
+ new pages and bootstrap added
+ backend lib changed to promise-mysql

Version 0.4

+ simple reg list http://localhost:3000/admin/registrationlist
+ league -> table and API added
+ league added to react form

Version 0.5

+ thank -you page after registration
+ localization with language switch button

Version 0.6

+ login link visible to admin only
+ login prototype, hard-coded user and password (admin/admin)

Version 0.7

+ display error messages to user
+ show password as *** in the login screen
+ show admin side only for logged in users / remember session info into context
