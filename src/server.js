const express = require('express');
const morgan = require('morgan');

const movieRoutes = require('./routes/movie.router');
const cinemaRoutes = require('./routes/cinema.router');
const usersRoutes = require('./routes/user.router');
const {connectWithDb} = require('./utils/db/db');

// Initializations
const app = express();

// Settings
const PORT = 3000;
connectWithDb ();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', usersRoutes);
app.use('/movies', movieRoutes);
app.use('/cinema', cinemaRoutes);

app.use('*', (req,res,next) =>{
    const error = new Error()
    error.status = 404
    error.message = 'Route not Found'
    return next(error)
});

// Error center
app.use((error, req, res, next)=>{
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
});

// Start the server
app.listen(PORT, ()=>{
    console.log('Server running on localhost:' + PORT)
});