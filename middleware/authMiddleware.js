const jwt = require("jsonwebtoken");
//only checks for a valid token. Does not check if token is valid to make certain api calls i.e. editing boards not created by user
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("Token not found");
  }

  try {
    const verifiedData = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.userAuth = verifiedData;

    return next();
  } catch (err) {
    return res.status(401).json("Auth token is invalid");
  }
};

module.exports = authMiddleware;