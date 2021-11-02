const usersRoutes = require('express').Router()
const {isAuth}= require('../middlewares/secured.middleware')
const {getAllUsers, postNewUser, loginUser, logoutUser} = require('../controller/user.controller')

usersRoutes.get('/', getAllUsers) 

usersRoutes.post('/', postNewUser)

usersRoutes.post('/login', loginUser)

usersRoutes.post('logout',[isAuth], logoutUser)

module.exports = usersRoutes