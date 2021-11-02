const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

const isAuth = async (req,res,next) =>{
    try{
        // console.log(req.headers.authorization)
        const token = req.headers.authorization;
        if(!token){
            const error = new Error
            error.status = 401
            error.message = 'No tienes token'
            return next(error)
        }
        // console.log(token)
        const parsedToken = token.replace('Bearer', '')

        const validToken = jwt.verify(parsedToken, process.env.JWT_SECRET)
        if (!validToken){
            const error = new Error
            error.status = 401
            error.message = 'Token no valido'
            return next(error)
        }

        const userLogin = await User.findById(validToken.id)
        userLogin.password = null
        req.user = userLogin

    next()


    }catch(error){
        return next(error)
    }

}

module.exports ={
    isAuth
}