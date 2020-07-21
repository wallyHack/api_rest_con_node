
const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch'); // importamos el modulo

router.get('/', async (req, res) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json(); // convertimos el resultado obtenido a json
    res.json(users);
    // console.log(users);
    // res.send('Users');
});

module.exports = router;