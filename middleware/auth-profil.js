// module.exports = (req, res, next) => {
//    try {
//     // Récupération du Payload de la personne connecté
//     const token = ;

//     const payload = req.auth.userId;

//     if (token != payload)
//         res.status(401).json(
//             {
//                 message: "Paire login/mot de passe incorrecte."
//             }
//         )
// 	    next();
//    } catch(error) {
//        res.status(401).json({ error: "JWT Error" });
//    }
// };