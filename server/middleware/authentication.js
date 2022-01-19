const jwt = require('jsonwebtoken')
const { User } = require('../models')

module.exports = {
    authentication(req, res, next) {
        // console.log("<<<<<<<Proses auth")
        try {
            if (!req.headers.access_token) return res.status(401).json({
                message: "missing access_token"
            })


            const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)

            User.findByPk(decoded.id)
                .then((data) => {
                    if (data) {
                        // console.log("<<<<<<<auht berhasil")
                        req.userId = data.id
                        next()
                    } else {
                        res.status(400).json({
                            message: "please login"
                        })
                    }
                })
                .catch((error) => {
                    res.status(500).json(error)
                })
        } catch (error) {
            res.status(400).json(error)
        }
    }
}