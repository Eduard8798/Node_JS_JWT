import { createServer } from "http";

const SERVER_NAME = process.env.SERVER_HOST || "http module";
const SERVER_HOST = process.env.SERVER_HOST || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3000;


import express from 'express';

const httpServer = createServer((req, res) => {
res.end("Hello from" + SERVER_NAME);
})

httpServer.listen(SERVER_PORT, SERVER_HOST,() => {
    console.log(` server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});