export const authMiddleware = (role) => {
    return (req, res, next) => {
        try {
            const { role: userRole } = req.user
            if (userRole !== role) {
                return res.status(403).json({ message: "Unauthorized" })
            }
            next()
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}