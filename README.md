# Very simple feedback app
I've choose MERN stack (MongoDB, Express, React.js, Node.js) for this app, cause it allows with really small setup build fast applications.


## Backend

For MongoDB I've picked up MongoDB Atlas. It's a cloud solution to store your db. I've connectd MongoDB to Express via Mongoose.

Architecture is really simple. One model for implementing Users. And banch of CRUD operations to deal with it.

#### What should be added here

 - Auto tests,
 - Deployment


## Frontend

Frontend is build on React.js. based on Create-React-App. Styling implemented via Bootstrap due to tight time constraints, but usually I prefer to use SCSS or CSS-Modules.

In App implemented pseudo Login Page where you need to select User. Depending on the role of the selected user, an "admin panel" or a page where you can see reviews and leave more will be shown.

In Admin page implemented adding and deleting users.

In Reviews page implemented adding reviews to every existing users except admin. And showing all reviews splitted based on users.

#### What should be added here

Besides custom styling,
 - PropTypes checking,
 - Snapshot testing of React components,
 - Real secure login,
 - Events and Errors handling,
 - Components optimisation


## How to run

At this moment it could be run only localy. To do that:

You need to install depencies within backend and frontend folders.

And:

Run server in backend directory

```bash
cd backend/ && node server
```

Run dev-server in frontend directory

```bash
cd frontend/ && npm start
```
