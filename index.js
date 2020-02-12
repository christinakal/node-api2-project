const express = require("express");


const apiRouter = require('./api/api-router.js');

const server = express();

server.use(express.json()); // needed to parse JSON fron the body

server.use('/api', apiRouter);//for URLs beginning with /api


server.get('/', (req, res) => {
    res.send(`Hello, this is the Server!`);
});

const port = 5000;
server.listen(port, ()=> {
    console.log(`\n *** Server is running on http://localohost:${port} ***\n`)
})