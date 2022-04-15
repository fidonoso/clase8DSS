const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main=require('../controllers/MainController.js')

//Rutas

router.get('/index', main.getIndex);
router.post('/login', main.setLogin);
router.post('/post', main.getPost);


// router.get('/index',(request , response)=>{
//     response.render('index');
// })
// router.post('/login',(request , response)=>{
//     const toSend = utils.limpiarRequest({
//         usuario: request.body.usuario,
//         password: request.body.password
//     })
//     response.render('login',{locals: toSend});
// })

module.exports = router;