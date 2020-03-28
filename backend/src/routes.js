const express = require('express');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();    


routes.post('/sessions', SessionController.create)


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create)


routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);
routes.get('/profile', ProfileController.index);


routes.get('/users', (request, response)=>{
    return  response.json({
        evento: 'Semana Omnistack 11.0',
        nome: 'Adilson Muito Fixes'
    })
})

module.exports = routes;