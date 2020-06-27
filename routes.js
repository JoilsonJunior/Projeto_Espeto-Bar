const express = require('express')
const routes = express.Router()

routes.get('/', function(req,res){
    return res.render("index")
})
routes.get('/Telacontato', function(req,res){
    return res.render("Telacontato")
})








module.exports =  routes