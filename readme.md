# Overview

The Recipe Collection App is a Node.js web application I developed to deepen my understanding of full-stack web development and improve my skills in creating dynamic, interactive web applications. This project aimed to reinforce my knowledge of Express.js and MongoDB, as well as improve my ability to implement CRUD (Create, Read, Update, Delete) operations and connect a frontend to a backend service.

This web app allows users to manage a collection of recipes. It includes a homepage to view all recipes, a form to add new recipes, an edit page to modify existing recipes, and an option to delete recipes. To start a test server on your computer, run the command `node app.js` in the terminal. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the first page, where you can interact with the recipe collection. 

**Note** You will need a mongo connection string in a `.env` file with the `MONGO_URI` prefix. 

This project served as an exercise in building an interactive and functional app from scratch, focusing on implementing a user-friendly experience through a clear, responsive interface.

[Software Demo Video](https://youtu.be/Zb1c6PIzL1I)

# Web Pages

1. **Home Page (View All Recipes)**: Displays a list of all saved recipes, each showing a title, ingredients, and instructions. Users can navigate from here to add a new recipe, edit an existing one, or delete a recipe. Each recipe’s ingredients and instructions are dynamically rendered, displaying each item on a new line.

2. **Add Recipe Page**: This page provides a form for users to add a new recipe. It includes input fields for the recipe title, ingredients, and instructions. When submitted, the new recipe is saved and displayed on the homepage.

3. **Edit Recipe Page**: Allows users to update details of an existing recipe. It pre-fills the form with the recipe’s current data, which can then be modified and saved. Once updated, the user is redirected back to the homepage to see the changes.

These pages transition smoothly with each action, with all page content generated dynamically based on user interactions.

# Development Environment

- **Development Tools**: I used Visual Studio Code as the code editor, with Node.js for running the server and MongoDB for the database.
- **Programming Language**: JavaScript (Node.js and Express.js)
- **Libraries**: Express.js for the server, EJS for templating, Bootstrap for responsive styling, and MongoDB for the database.

# Useful Websites

* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Express.js Guide](https://expressjs.com/)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [Bootstrap Documentation](https://getbootstrap.com/)

# Future Work

* **User Authentication**: Add login/logout functionality to secure access to recipe management.
* **Recipe Categorization**: Enable users to categorize recipes (e.g., by cuisine, type, or difficulty).
* **Enhanced Search**: Implement a search function for users to filter recipes by title, ingredient, or tag.
