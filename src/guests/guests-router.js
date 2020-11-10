const express = require('express')
const path = require('path')
const GuestsService = require('./guests-service')
const guestRouter = express.Router()
const jsonBodyParser = express.json()
const serializeGuests = (guest)=>{
    return {firstname:guest.firstname, lastname: guest.lastname}
}
guestRouter
    .route('/')
    .post(jsonBodyParser,(req,res,next)=>{
        const {firstname, lastname} = req.body;
        //need to check capitalization of name from database and input 
        GuestsService.isOnGuestList(req.app.get('db'), firstname, lastname)
            .then(name=>{
                console.log(name)
                res.json(name.map(serializeGuests))
            })
            .then(data=>{
                res.status(201).json(data)
            })
            .catch(next)
    })
    


module.exports = guestRouter;