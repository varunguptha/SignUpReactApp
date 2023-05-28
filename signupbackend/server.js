const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = "mongodb+srv://varunguptha987:varunguptha@cluster0.vakfega.mongodb.net/mytable?retryWrites=true&w=majority"
const routesUrls = require('./routes/routes')
const cors= require('cors')

mongoose.connect(db)
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000, () => console.log("Server Started"))

