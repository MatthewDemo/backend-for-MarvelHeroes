import express from "express";
import router from './api.js';
import bodyParser from "body-parser";
import cors from "cors";
import Db from './db.js';
import fileUpload from 'express-fileupload';


const PORT = process.env.PORT || 8001
const app = express()
const server = async () => {
    await Db();
    app.use(fileUpload({}));


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/', router)

    app.listen(PORT, () => {
        console.log(`server has bee started on port ${PORT}...`)
    })
}

server();