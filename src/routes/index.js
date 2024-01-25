const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/test', (req, res) => {
    res.render('testForm')
})

module.exports = router