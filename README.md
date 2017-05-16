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

8. Navigate to http://localhost:3000 & click around the calendar. 

### Points of interest

**Database Seeding**
Here I have implimented a faker library to generate fake enrties with some interesting date logic.
`https://github.com/Jonjoe/calendar-app/blob/master/db/seeds.rb`

**Frontend**
The Froontend of the application starts here. 
`https://github.com/Jonjoe/calendar-app/tree/master/app/frontend`

**API**
A good little internal API was created to support the Frontend in recieving data. 
```
```
Some good points of interest are:
- `http://localhost:3000/api/v1/events/day/:DAY/:MONTH/:YEAR` This returns JSON containing the days events
- 'http://localhost:3000/api/v1/events' This returns all events

### Notes 
- I spent around 8 hours on the project spread out accross the day. 

- I could really easily get carried away with this project and I nearly did. I would have liked to have added some interactivity into the app and I would have loved to have spend a bit more time on the design. 

- Calendar day types (past day, current day, has items) was in the worksbut I couldnt fit them in. 
