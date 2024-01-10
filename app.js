require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use([
    cors(),
    express.json(),
    express.urlencoded({ extended: false })
]);

app.get('/health', (req, res) => {

    res.status(200).send('Alive!');
    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));