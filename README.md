# 📚 book-insider
## Overview
📌 This is a **frond-end React web application** for book blog system, created for the purposes of React.js Softuni Course, Oct-Dec 2025.

## Prerequisites
 - Node.js
 - A clone of the repo on your local machine

## Run
The application is deployed to Firebase and is available on https://book-insider-465b8.firebaseapp.com/

## ⚙️ Local mode setup
To start the application locally, run the following commands in the terminal:
 - In main folder run:
 ```
 npm install
 ```
 - Go to **functions** folder:
 ```
 cd functions
 ```
 and run:
 ```
 npm install
 ```
 This will install the necessary dependencies.
  
  - To run the application:
 ```
 npm run client
 ```
 This will build and start the latest version on `http://localhost:4173/`

## Public part
The public part is for all authenticated and non authenticated users. It gives you access to the following functionalities:
 - **Home Page** with the latest three reviews.
 - **Catalog Page** with all available reviews. Option for searching books by title, author and genre.
 - On **Register Page** you can create your account with an email and password.
 - **Login Page** where registered users can log in using theyr credential.
 - **Detail Page** which contains comments and more information about each review.

## Privet Part
The authenticated users have access to the privet part and following functionalities:
 - **Create** and **Edit** a Review. As well as **Delete their own** reviews.
 - On the **Detail** page they can post comments for the reviews that are **not** their own.
 - **Rating system** - Any authenticated user can rate book reviews created from other users. Each book can only be rated once giving it a star rating from zero to five.
 - A **profile** page gives a persinal area to every authenticated in the web application user. It contains a brief profile information and three main section:
   - **My reviews** with direct links to the books created from the user.
   - **My comments** containing comments and links to the related reviews.
   - **Rated books** shows every book rated from the user and direct links to each one.

There are three users initialized on the server, which can be used for testing:
 - peter@abv.bg with password: 123456
 - george@abv.bg with password: 123456
 - admin@abv.bg with password: admin

### The project is build with:
 - [React.js](https://react.dev/)
 - [React Router](https://reactrouter.com/)
 - [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)
 - [Tailwind CSS](https://tailwindcss.com/)
 - Free recources from https://tailwindflex.com and https://uiverse.io