# expense-tracker

**Expense Tracker**

A Full Stack web application built with MERN Stack.

With this application you can keep track of your finances by adding expenses and income. You can visualize the data using pie charts in the front end.

Deployed At Heroku - https://expense-tracker-n.herokuapp.com

This application uses ExpressJS framework for the backend apis and ReactJS for front-end views. The Data is stored with NoSQL database using MongoDB/mongoose.

**Required Environment Variables:**

GOOGLE_CLIENT_ID : Google Client Id for interacting with google oauth api

GOOGLE_SECRET : Google secret for interacting with google oauth api

**Other Environment Variables:**

MONGO_URI : Url to connect with MongoDB (default value: mongodb://localhost:27017/expense-track)

SECRET : Secret key to sign authentication tokens. ( default value: 'secret')

PORT : port to run the server (default value: 5000 )

**Installing dependencies:**

    npm install && npm install --prefix client

**Running both server and client concurrently:**

    npm run dev

**Running the server:**

    npm run server

**Running the client:**

    npm run client
