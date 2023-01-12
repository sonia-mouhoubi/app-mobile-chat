const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const payload = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       req.auth = {
           userId: payload.userId,
           admin: payload.admin,
       };
	next();
   } catch(error) {
       res.status(401).json({ error: "JWT Error" });
   }
};