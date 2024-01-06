export const errorMiddleware = (err, req, res, next) => {
    res.send({status: "error", message: err.message, error: err.name})
}