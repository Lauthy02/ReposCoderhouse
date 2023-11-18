import jwt from "jsonwebtoken" //para generar tokens
const JWT_SECRET = "SecretKey"

export const jwtValidation = (req, res, next) => {
    try {
        const authHeader = req.get("Authorization")
        //console.log(authHeader)
        const token = authHeader.split(" ")[1]
        const decodedToken = jwt.verify(token, JWT_SECRET)
        //console.log(decodedToken)
        req.user = decodedToken
        next()
    } catch (error) {
        res.status(500).json({error})
    }
}