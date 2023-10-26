app.get("/setCookie", (req,res) =>{
    //res.cookie("nombre de la cookie","valor")
    res.cookie("idioma","ingles").json({msg: "ok"})
})

app.get("/getCookie", (req,res) =>{
    console.log(req.cookies)
    const {idioma} = req.cookies
    idioma === "ingles" ? res.send("hello") :res.send("hola")
})

app.get("/deleteCookie", (req,res) =>{
    //res.clearCookie("nombre de la cookie").send("mensaje a enviar")
    res.clearCookie("idioma").send("Cookie deleted")
    //ojo q toma el primer send
    res.clearCookie("name").send("Cookie deleted")
})

app.get("/setSignedCookie", (req,res) =>{
    res.cookie("name","Santino",{signed:true}).json({msg: "ok"})
})

app.get("/", (req,res) =>{
    res.json({
        cookies: req.cookies,
        signedcookies: req.signedCookies
    })
})