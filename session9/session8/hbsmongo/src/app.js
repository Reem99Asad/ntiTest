const express = require('express')
const path = require('path')
const hbs = require('hbs')
const chalk=require('chalk')

const app = express()

const customerRoutes = require('../Routes/customer.routes')

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, "../frontend/views"))
hbs.registerPartials(path.join(__dirname, "../frontend/layouts"))


app.use(express.urlencoded()) // use form data


app.use(customerRoutes)

module.exports = app
