# Food Explorer

![pages-foodexplorer](https://github.com/bedeschiotavia/food-explorer/assets/74593495/6413d3c5-0f93-4f44-ac43-afdb4cddd1b7)

## Access online project <a href="https://food-explorer-eight.vercel.app/" target="_blank">here</a> | ⚠️ The backend uses free hosting with Render, so loading times might be slow...

<a align="left" href="#about-the-project">About</a> |
<a align="left" href="#technologies">Technologies</a> |
<a align="left" href="#frontend-pages">Frontend Pages</a> |
<a align="left" href="#backend-tables">Backend Tables</a> |
<a align="left" href="#frontend-functionalities">Frontend Functionalities</a> |
<a align="left" href="#installation">Installation</a> |
<a align="left" href="#contact">Contact</a>

## About the project

The Food Explorer project is an interactive menu for a fictional restaurant, developed as a comprehensive application with both front-end and back-end components. This project was built using the technologies learned in the Explorer program and follows the layout provided in Figma, which includes a complete application design from dish viewing to payment, as well as a mobile version of the project.

Food Explorer has two personas: the admin and the user.

- The **admin** is responsible for the restaurant and can create, view, edit, and delete a dish at any time. Each dish includes an image, name, category, brief description, ingredients, and price. When a dish is added, the admin receives a success message and is redirected to the main page.
- The **user** can view all the registered dishes and, when clicking on a dish, is redirected to a new page with more detailed information about the dish.

## Technologies

### Backend

- JavaScript
- Bcrypt.js
- CORS
- Dotenv
- JSON Web Token
- Knex.js
- Node.js
- Multer
- PM2
- SQLite3
- Cookie-parser
- Express.js
  - Express-async-errors

### Frontend

- JavaScript
- Axios
- Styled Components
- Splider
- Vite
- CSS
- HTML
- Git & GitHub
- Phosphoricons
- React
  - React-router-dom
  - React-dom

## Frontend Pages

- **Login** (SignIn)
- **Sign Up** (SignUp)
- **Home** (Home)
- **Add New Dish** (NewDish)
- **Dish Details** (Dish)
- **Edit Dish** (EditDish)

## Backend Tables

- Users
- Dishes
- Tags - Dish Ingredients

## Frontend Functionalities

- Login
- Sign Up
- Display Dishes
- Search Dishes
- Show Dish Details
- Add New Dish (admin)
- Edit Dish (admin)
- Delete Dish (admin)
- Logout
  
## Installation

The project has been deployed using Render for the backend and Vercel for the frontend. You can access them here:
- Backend: [Food Explorer - API](https://food-explorer-28lo.onrender.com)
- Frontend: [Food Explorer](https://food-explorer-eight.vercel.app/)

To run the project locally, follow these steps:

### Backend

1. **Clone the project:**
```bash
$ git clone https://github.com/bedeschiotavia/food-explorer.git
```
2. **Navigate to the project directory**
```bash
cd food-explorer
```
```bash
cd api
```
3. **Install dependencies**
```bash
$ npm install
```
4. **Run Knex migrations**
```bash
$ npm run migrate
```
5. **Start the server**
```bash
$ npm run dev
```
⚠️ IMPORTANT: Follow the instructions in .env.example to create a .env file with the appropriate configurations.

### Frontend
1. **Clone the project:**
```bash
$ git clone https://github.com/bedeschiotavia/food-explorer.git
```
2. **Navigate to the project directory**
```bash
cd food-explorer
```
```bash
cd web
```
3. **Install dependencies**
```bash
$ npm install
```
4. **Start the dev server**
```bash
$ npm run dev
```
⚠️ IMPORTANT: Make sure you have NodeJS and NPM installed on your machine to run this project locally.
The backend uses free hosting with Render, so loading times might be slow and some database items may not save or render correctly. However, locally, it will render and save as expected.
