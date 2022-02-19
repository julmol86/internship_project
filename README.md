# Internship project
# Table of content
- [The goal of this project](#the-goal-of-this-project)
- [Purpose of this project](#purpose-of-this-project)
- [Prerequisites](#prerequisites)
- [Configurations](#configurations)
- [Running this App](#running-this-app)
- [Source tree](#source-tree)
- [Technologies](#technologies)
- [Main features](#main-features)
- [Work log](#work-log)
# The goal of this project
This application is built as internship project and to gain new knowledge in web development, to practice in creating a full stack application with UI using React and Node, making Bootstrap styles and working with MySQL database and of course to enjoy coding while doing interesting task.

# Purpose of this project
Application provides information about sporting events with registration form. There is user signin page for registered users, option for creating new organizations and option to add new events. 

# Prerequisites
Application is developed and tested on Windows 10 operating system / Google Chrome browser.

Node.js and MySQL should be installed. 

## How to install Node.js:
https://nodejs.org/en/ 

download

## How to install MySQL:
https://dev.mysql.com/downloads/installer/ (community)

download bigger file (about 500 Mb)

click Execute button on the missing requirements view!

Note:  MySQL  should be installed on default port 3306. (if port number is different, make sure to change it manually in the db.ts file on the backed side).

# Configurations
Create DB user manually, e.g. via MySQL Workbench:
 - user: ict4n
 - role: DbAdmin
 - password: ict4n
 - Create manually database named itc4n. 
 - Copy-paste queries manually from createTables.sql file to query editor and run those queries. There should be 5 empty tables created.
# Running this App
Download ZIP, Unpack ZIP folder to a new folder.

Make sure mysql service is running.

Final version is in folder v_0.4.0

Directory for frontend: ./frontend

Directory for backend: ./backend


Note! Node_modules are NOT submitted. Download node_modules for both backend and frontend: npm install

For backend, run commands via terminal in directory ./backend
```
npm install
```
```
nodemon index.ts
```

For frontend, run commands via terminal in directory ./frontend

```
npm install
```
```
npm start
```

Open http://localhost:3000 to view  in the browser

# Source tree
```
.
└── src
    └── locales
        ├── en.json         # English translations
        ├── fi.json         # Finnish translations
    └── navbar
        ├── NavigationMenu.tsx        # Navigation bar
        ├── NavigationTop.tsx         # Header
    └── pages
        └── admin
            ├── CreateEvent.tsx           # Adding new events
            ├── CreateOrganization.tsx    # Creatinf new users
            ├── EventList.tsx             # All events
            ├── HomePageAdmin.tsx         # Front page
            ├── RegEventList.tsx          # Organizations and events
            ├── RegistrationList.tsx      # Start list
            ├── SaveButton.tsx            # Button component
            ├── UsersList.tsx             # All users
        └── organization
            ├── HomePageOrg.tsx        # Front page
        └── user
            ├── Events.tsx                         # Template for new features
            ├── Home.tsx                           # Front page with all events
            ├── Registration.tsx                   # Navigation bar
            ├── RegistrationListPublic.tsx         # Start list
            ├── RegistrationSuccess.tsx            # Page after registration
            ├── Table.tsx                          # Template for new features
        └── PageNotFound.tsx  
        └── Signin.tsx 
    └── schema                      # Validation of form fields
        ├── eventSchema.ts        
        ├── organizationSchema.ts          
        ├── registerSchema.ts        
        ├── signinSchema.ts    
    └── App.tsx               # Main file for logic and navigation
    └── i18n.ts               # Translation library
    └── index.css             # Styles
    └── index.tsx             # Main function
    └── LanguageContext.tsx   # Logic for language change
    └── rest.ts               # Endpoints
    └── UserContext.tsx       # Logic for signin
    └── utils.ts              # Functions for format date and capital letters
```
# Technologies
### Front-end
React.js | TypeScript | Bootstrap
### Back-end
Node.js | Koa.js
### Database
MySQL


# Main features
**Language switch.** All information is provided in English and Finnish. Selected language is remembered by application also after page refresh.

**Registration form.** Cpmpetitors are able to register for the sporting event by providing own information and choosing event category.

**Sign in and sign out.** Already registered users can sign in and sign out. Signed in status is also  remembered by application after page refresh.

**Pop-up notifications.** User can see notification message in case: sign in is successful, sign in is failed, sign out is successful.

**Adding new organizators.** Admin is able to add new organizators.

**Adding new events.** Admin is able to add new events.

**User input form validation.** Fields marked with an asterisk are mandatory. User sees a warning message when submit button is pressed and some mandatory fields are empty.


# Work log

Slides in Finnish could be found in Working_dairy folder

## Version 0.1.0 / 1.1.2021 - 6.12.2021

+ bootstrap (note! Import should be before all other css -files inside project)
+ react router
+ axios
+ backend
+ DB MySQL
+ new folder structure for frontend
+ new pages and bootstrap added 
+ simple registration list 

## Version 0.2.0 / 7.12.2021 - 14.12.2021

+ league -> table and API added
+ i18next library import
+ localization with language switch button
+ thank -you page after registration

## Version 0.3.0 / 14.12.2021 - 20.12.2021

+ login link visible to admin only
+ login prototype, hard-coded user and password
+ react router fixed + upgraded to version 6
+ remember language when switch links and after submit button 

## Version 0.4.0 - final version / 20.12.2021 - 18.02.2022
+ hash passwords before saving into DB / reading from DB
+ confirmation e-mail sending
+ axios requests to rest.ts
+ admin's homepage added
+ organization creation (frontend)
+ organization creation (backend)
+ organizator's home page template
+ different rights to admin and organizator
+ admin creates events / categories and gives modify -rights to organization (started)
+ dropdown for organizations in event form
+ Registration process
+ Remember context on refresh
+ Log out button
+ backend api function that retrieves all events with categories
+ frontend for event list
+ link to event list on UserList page
+ number of categories appearing according to user's input
+ categories shown only for this event in reg-form
+ more data to registration form
+ date in right format
+ start list
+ Maksettu-option onClick
+ capital letters in name and lastname
+ event list + reg list on user side
+ event list for organization (show only own events)
