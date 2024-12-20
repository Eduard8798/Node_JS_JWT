import {SERVER_HOST, SERVER_NAME, SERVER_PORT} from "./config/index.js";

import express from 'express';

import {handleRoute1} from "./controllers/route1.js";
import {handleRoute2} from "./controllers/route2.js";



const app = express();

app.get('/route/1', handleRoute1);

app.get('/route/2', handleRoute2);

app.listen(SERVER_PORT, SERVER_HOST,() => {
    console.log(` HTTP server ${SERVER_NAME} is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});