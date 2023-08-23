const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const Routes = require('./routes/Routes');

const app = express();
app.use( cors() );
app.use(bodyParser.json());

app.use('/api/entity', Routes);


const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Lanzada en: http://localhost:${PORT} ⭐️`);
        })
    } catch (error) {
        throw error;
    }
}

startServer();