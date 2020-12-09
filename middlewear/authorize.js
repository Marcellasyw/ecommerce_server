module.exports = (req, res, next) => {
    try {
        let user = req.user
        if(user.role == "admin"){
           next() 
        } else {
            throw {
                status : 401,
                message : 'Unauthorized'
            }
        }
    } catch (err) {
        next(err)
    }
}