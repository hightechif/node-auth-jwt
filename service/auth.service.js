const userRepository = require('../repository/user.repository');

const registration = (req, res, next) => {
    return userRepository.addUser(req, res, next);
}

const logIn = (req, res, next) => {
    return userRepository.signIn(req, res, next);
}

const whoAmI = (req, res, next) => {
    return userRepository.getUser(req, res, next);
}

const logOut = (req, res, next) => {
    return userRepository.signOut(req, res, next);
}

module.exports = {
    registration,
    logIn,
    whoAmI,
    logOut
}
