const express = require("express");
const personRouter = express.Router();
const personCtrl = require('../Controller/personCtrl')


//Routes
//Get people Router
personRouter.get('/',personCtrl.getPersons)

//Create routers
personRouter.get('/create',personCtrl.getCreateFrom)
personRouter.post('/create',personCtrl.createPerson)

//Edit Routers...
personRouter.get('/edit/:id',personCtrl.getEditForm)
personRouter.post('/edit/:id',personCtrl.updatePerson)


//Deletr Routers..
personRouter.get('/delete/:id',personCtrl.getDeleteForm)
personRouter.post('/delete/:id',personCtrl.deletePerson)
module.exports = personRouter