const studentRouter = require('express').Router();
const { Student }  = require('../../db/models');

studentRouter.get('/', function(req, res, next){
	Student.findAll({})
	.then(students => res.json(students))
	.catch(next)
});

studentRouter.get('/:id', function(req, res, next){
	Student.findById(req.params.id)
	.then(student => res.json(student))
	.catch(next);
});

studentRouter.post('/', function(req, res, next){
	Student.create(req.body)
	.then(user => res.json(user))
	.catch(next);
});

studentRouter.put('/:id', function(req, res, next){
	Student.update(req.body, { where: {
		id: req.params.id
	}})
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

studentRouter.delete('/:id', function(req, res, next){
	Student.destroy({ where: {
		id: req.params.id
	}})
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = studentRouter;
