// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB")).catch(err => console.error(err));

// Routes
const recipeRoutes = require('./routes/recipes');
app.use('/recipes', recipeRoutes);

// Root route
app.get('/', (req, res) => {
    res.redirect('/recipes');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
