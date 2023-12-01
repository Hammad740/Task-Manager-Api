const notFound = (req, res) =>
  res
    .status(404)
    .send('Route does not exist,trying to access unkonwn resource');

module.exports = notFound;
