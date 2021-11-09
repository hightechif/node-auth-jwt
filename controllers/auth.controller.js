const authService = require('../service/auth.service');

const register = (req, res, next) => {
  return authService.registration(req, res, next);
};

const login = (req, res, next) => {
  return authService.logIn(req, res, next);
}

const whoami = (req, res, next) => {
  return authService.whoAmI(req, res, next);
}

const logout = (req, res, next) => {
  return authService.logOut(req, res, next);
}

module.exports = {
  register,
  login,
  whoami,
  logout
};
