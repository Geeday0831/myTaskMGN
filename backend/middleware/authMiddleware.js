const jwt = require('jsonwebtoken');

// Verify  The JWT middleware
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = verifyToken;
