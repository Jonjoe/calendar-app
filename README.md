# Fullstack Code Demonstration

### Summary
This project is a calendar application that consists of Rails API and a Postres persistant relational store as a backend. On the frontend we have React&Redux consuming Rails API endpoints. This is intended to demonstrate compentancy in:
- Advanced React & Redux
- Advanced Ruby & Rails
- Basic API creation and consumption
- Advanced Full Stack Engineering
- Basic design

### Requirments
In order to run this project you will need the following:
- Ruby 2.4.0
- Node 7.10.0
- Postgres
- Rails 5.1

### Setup
1. clone the repo
2. `$ bundle install`
3. `$ npm install`
4. Configure a PG_USERNAME environment variable. This should contain your postgres username.
5. Configure a PG_PASSWORD environment variable. This should contain your postgres password.
6. Its worth noting the Postgres port is the default one.
7. You will need to create and seed a database. Run the below commands:
```
$ bin/rails db:create
$ bin/rails db:migrate
$ bin/rails db:seed
```
This should have provided you with a database containing calendar entries. You can confirm this by running `$ bin/rails c` & then `Event.fist`. If you output a database record you have succeeded. 

8. `$ webpack`
9. Navigate to http://localhost:3000 & click around the calendar. 

### Points of interest

**Database Seeding**

Here I have implimented a faker library to generate fake enrties with some interesting date logic.
`https://github.com/Jonjoe/calendar-app/blob/master/db/seeds.rb`

**Utility Classes**

The app does alot with dates. I becided to roll my own little lib for handling dates and dealing with the little neiche bits and bobs. Worth a look! 
`https://github.com/Jonjoe/calendar-app/blob/master/app/frontend/utilities/dateTime.class.js`

**Frontend**

The Frontend of the application starts here. 
`https://github.com/Jonjoe/calendar-app/tree/master/app/frontend`

**API**

A good little internal API was created to support the Frontend in recieving data. 
```
           Prefix Verb   URI Pattern                                    Controller#Action
             root GET    /                                              home#index
           events GET    /events(.:format)                              events#index
                  POST   /events(.:format)                              events#create
        new_event GET    /events/new(.:format)                          events#new
       edit_event GET    /events/:id/edit(.:format)                     events#edit
            event GET    /events/:id(.:format)                          events#show
                  PATCH  /events/:id(.:format)                          events#update
                  PUT    /events/:id(.:format)                          events#update
                  DELETE /events/:id(.:format)                          events#destroy
    api_v1_events GET    /api/v1/events(.:format)                       api/v1/events#index
                  POST   /api/v1/events(.:format)                       api/v1/events#create
 new_api_v1_event GET    /api/v1/events/new(.:format)                   api/v1/events#new
edit_api_v1_event GET    /api/v1/events/:id/edit(.:format)              api/v1/events#edit
     api_v1_event GET    /api/v1/events/:id(.:format)                   api/v1/events#show
                  PATCH  /api/v1/events/:id(.:format)                   api/v1/events#update
                  PUT    /api/v1/events/:id(.:format)                   api/v1/events#update
                  DELETE /api/v1/events/:id(.:format)                   api/v1/events#destroy
api_v1_events_day GET    /api/v1/events/day/:day/:month/:year(.:format) api/v1/events#day
```
Some good points of interest are:
- `http://localhost:3000/api/v1/events/day/:DAY/:MONTH/:YEAR` This returns JSON containing the days events
- 'http://localhost:3000/api/v1/events' This returns all events

### Notes 
- I spent around 8 hours on the project spread out accross the day. 

- I could really easily get carried away with this project and I nearly did. I would have liked to have added some interactivity into the app and I would have loved to have spend a bit more time on the design. 

- Calendar day types (past day, current day, has items) was in the worksbut I couldnt fit them in. 
