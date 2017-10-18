'use strict'
const api = require('express').Router();
const studentRouter = require('./api/students');
const campusRouter = require('./api/campuses');

api.use('/students/', studentRouter);
api.use('/campuses/', campusRouter);

api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api;
