'use strict'

const Db = require('.')
const config = require('./config')

const db = new Db(config)

db.connect()
    .then(conn => {
        console.log('Database setup')
        process.exit(0)
    })