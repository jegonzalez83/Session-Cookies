module.exports = (req, res, next) => {
    if(req.cookies.cookieComision13){
        console.log("Acaaa")
        req.session.color = req.cookies.cookieComision13;
    }
    next()
}