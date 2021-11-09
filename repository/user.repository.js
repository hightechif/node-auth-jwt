const { User } = require('../db/models');

const addUser = (req, res, next) => {
    User.register(req.body)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => next(error.message))
}

const signIn = (req, res, next) => {
    User.authenticate(req.body)
        .then(user => {
            let dataUser = {
                id: user.id,
                username: user.username,
                token: user.generateToken()
            }
            res.status(200).json(dataUser)
        })
        .catch(error => {
            return next(error.message)
        })
}

const getUser = (req, res, next) => {
    /* req.user adalah instance dari User Model, hasil autentikasi dari passport. */
    res.status(200).json(req.user);
    /* res.render('profile', req.user.dataValues) */
}

const signOut = (req, res, next) => {
    // req.logout();
    res.status(200).json({
        "status": "Logout Success"
    });
}

module.exports = {
    addUser,
    signIn,
    getUser,
    signOut
}
