const User = require('../models/Users');

 module.exports = (req, res, next) => {
//    try {
//     const userId = req.userId;
//     const user = User.findById(userId);
//         if (user.admin) {
//             next();
//         }
//     else {
//         res.status(401).json({ message: 'Admin : accès refusé' });
//       }
// 	next();
//    } catch(error) {
//        res.status(500).json({ error });
//    }

    const admin = req.auth.admin;

    if (!admin)
    {
        res.status(401).json(
            {
                message: "Vous n'avez pas les droits d'accés."
            }
        )
    }

    next()
}; 