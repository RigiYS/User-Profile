const validKey = 'tyrannosaurus';

const userAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({ message: 'Unauthorized: API Key missing' });
    }

    if (apiKey !== validKey) {
        return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }

    next();
    };

  module.exports = userAuth;