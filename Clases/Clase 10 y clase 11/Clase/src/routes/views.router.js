import { Router } from "express";

const router = Router()

router.get('/', (req,resizeBy) => {
    res.render('Websokets')
})

export default router