
const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) =>{
    // res.send("Hello World");
    // res.json({"Title": "Los 4 Fantásticos"});
    const data = {
        "name": "Manuel Herrera Lara",
        "website": "manuelsd.com"
    }
    res.json(data);
});

module.exports = router;