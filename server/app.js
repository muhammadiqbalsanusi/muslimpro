require('dotenv').config()

const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const port = process.env.PORT || 3000
const app = express()
const { User, Surah } = require('./models')
const { authentication } = require('./middleware/authentication')

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Server Up"
    })
})

app.post('/users/register', (req, res, next) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password
    }
    User.create(newUser)
        .then((user) => {
            res.status(201).json({
                success: true,
                id: user.id,
                email: user.email
            })
        })
        .catch((error) => {
            console.log(error)
            if (error.errors[0].message === "User.email cannot be null" || error.errors[0].message === "User.password cannot be null") {
                res.status(400).json({
                    "message": "User or Password Cannot be Null"
                })
            } else if (error.errors[0].message === "Invalid email format") {
                res.status(400).json({
                    "message": "Invalid email format"
                })
            } else if (error.errors[0].message === "Invalid email format") {
                res.status(400).json({
                    "message": "Invalid email format"
                })
            } else if (error.errors[0].message === "email must be unique") {
                res.status(400).json({
                    "message": "Email Already Exist"
                })
            } else if (error.errors[0].message === "Password must be more than 6 characters") {
                res.status(400).json({
                    "message": "Password must be more than 6 characters"
                })
            } else {
                res.status(500).json(error)
            }
        })
})

app.post('/users/login', (req, res, next) => {
    console.log("===========PROSES LOGIN=============")
    const { email, password } = req.body
    const opt = {
        where: { email }
    }
    console.log(email, '<<<<<<')
    console.log(password, '<<<<<<')
    User.findOne(opt)
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log("===========berhasil membuat access_token=============")
                const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
                res.status(200).json({
                    success: true,
                    access_token
                })
            } else {
                console.log("===========gagal membuat access token=============")
                res.status(401).json({
                    'message': "Invalid Email or Password"
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json(error)
        })
})

app.use(authentication)

app.get('/getdata', (req, res, next) => {
    // console.log("=============sedang mengambil data dari server==============");
    console.log(req.userId, "<<<<<<<<<< cek user id nya bro")

    const opt = {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        offset: 1,
        limit: 3
    }
    // Surah.findAndCountAll(opt)
    Surah.findAll(opt)
        .then((data) => {
            res.status(200).json({
                success: true,
                data
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json(error)
        })
})

app.get('/https://api-alquranid.herokuapp.com/surah', (req, res, next) => {
    console.log("<<<<<<<<<< getl all surah and ayat ")
    console.log(req.userId, "<<<<<<<<<< cek user id nya bro")
    Surah.findAll()
        .then((data) => {
            res.status(200).json({
                success: true,
                data
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json(error)
        })
})

app.get('/https://api-alquranid.herokuapp.com/surah/1', (req, res, next) => {
    console.log(req.userId, "<<<<<<<<<< cek user id nya bro")
    const id = req.params.id
    console.log(">>>>>", id)
    Surah.findByPk(id)
        .then((data) => {
            res.status(200).json({
                success: true,
                data
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json(error)
        })
})

app.listen(port, () => {
    console.log(`listening at htpp://localhost:${port}`)
})