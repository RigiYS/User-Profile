const userAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'secret_key') {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
  };

  module.exports = userAuth;