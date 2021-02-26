const index = (req, res) => {
  res.status(200).json({message: 'Welcome to our API'});
}

module.exports = {
  index
}
