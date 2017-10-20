'use strict'
const api = require('express').Router();
const studentRouter = require('./api/students');
const campusRouter = require('./api/campuses');

api.use('/students/', studentRouter);
api.use('/campuses/', campusRouter);

module.exports = api;
