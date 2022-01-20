require('dotenv').config()

const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const port = process.env.PORT || 3000
const app = express()
const { User, Surah, Bookmark } = require('./models')
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
    User.findOne(opt)
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                // console.log("===========berhasil membuat access_token=============")
                const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
                res.status(200).json({
                    success: true,
                    access_token
                })
            } else {
                // console.log("===========gagal membuat access token=============")
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

app.post('/bookmark', (req, res, next) => {
    console.log("<<<<prosess add Bookmark>>>>");
    const input = {
        UserId: +req.userId,
        SurahId: req.body.SurahId,
        nama: req.body.nama,
        arti: req.body.arti,
        type: req.body.type,
        ayat: req.body.ayat
    }
    console.log(input, "<<<<<<<<<<>>>>>>");
    // console.log(input.UserId, '<<<<<<<<<<id req.user')
    // console.log(input.SurahId, '<<<<<<<<<<<<<<<< id req.body.surah')

    Bookmark.create(input)
        .then((data) => {
            console.log('Berhasil add bookmarked')
            if (data) {
                res.status(201).json({
                    success: true,
                    message: "Berhasil menambahkan bookmark",
                    data
                })
                // })
            } else {
                res.status(400).json({
                    message: "Gagal Bookmarked data error",
                })
            }
        })
        .catch((err) => {
            // console.log('***************Gagal bookmarked')
            console.log(err)
            res.status(500).json(err)
        })
})

app.get('/bookmark', (req, res, next) => {
    console.log(req.userId, '<<<<<<<<<<di dalam bookmark cont')
    console.log(req.userId, '<<<<<<<<<<is req.user')
    const opt = {
        where: { UserId: req.userId }
    }

    Bookmark.findAll(opt)
        .then((data) => {
            console.log('<<<<<<<<berhasil mendapatkan bookmarked')
            if (data) {
                res.status(201).json({
                    Bookmark: data,
                    success: "Berhasil mendapatkan data bookmarked"
                })
            } else {
                res.status(400).json({
                    message: "data not found",
                })
            }
        })
        .catch((err) => {
            console.log('??????????????????????gagal mendapatkan bookmarked (server get bookmarke)')
            console.log(err)
            res.status(500).json(err)
        })
})

app.delete('/bookmark', (req, res, next) => {
    console.log('############ proses delete data ')
    const surah = req.body.SurahId
    const user = req.userId
    console.log(surah, '<<<< Nomor Surah')
    console.log(user, '<<<< id user')
    Bookmark.destroy({ where: { 
        SurahId : surah,
        UserId : user 
    } })
    .then((_)=> {
        res.status(200).json({
            message: 'Bookmark succesfull delete'
        })
    })
    .catch((err) => {
        console.log('???????????????? gagal delete line 167:delete bookmarked')
        console.log(err)
        res.status(500).json(err)
    })
})
// ! ***********BATAS AWAL SETTING************
app.get('/getdata', (req, res, next) => {
    console.log(req.userId, "<<<<<<<<<< cek user id nya bro")

    const opt = {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        offset: 1,
        limit: 3
    }
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
    const id = req.params.id
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
// ! ***********BATAS TERAKHIR SETTING************

app.listen(port, () => {
    console.log(`listening at htpp://localhost:${port}`)
})