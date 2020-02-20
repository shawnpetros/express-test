const express = require('express')
const app = express()
const hello = require('./hello')

app.use('/hello', hello)

app.listen(3001, () => console.log('listening'))
