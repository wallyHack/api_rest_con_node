
const express = require('express');
const morgan = require('morgan');
const app = express()

// settings
app.set('port', process.env.PORT || 5000);
app.set("json spaces", 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json()); //el server puede usar formatos json
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), ()=> {    
    console.log(`Server on port ${app.get('port')}`);
});