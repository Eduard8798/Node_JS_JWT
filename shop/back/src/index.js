require('dotenv').config()

const express = require('express')

const sequelize = require('../Bdate/db')

const models = require('../models/models')

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (error){
        console.log(error)
    }
}

const PORT = process.env.PORT || 5015

start();

