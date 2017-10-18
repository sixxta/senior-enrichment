const campusRouter = require('express').Router();
const { Campus }  = require('../../db/models');

campusRouter.get('/', function(req, res, next){
	Campus.findAll({})
	.then(campuses => res.json(campuses))
	.catch(next);
});

campusRouter.get('/:id', function(req, res, next){
	Campus.findById(req.params.id)
	.then(campus => res.json(campus))
	.catch(next);
})

campusRouter.post('/', function(req, res, next){
	Campus.create(req.body)
	.then(user => res.json(user))
	.catch(next);
});

campusRouter.put('/:id', function(req, res, next){
	Campus.update(req.body, { where: {
		id: req.params.id
	}})
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
})

campusRouter.delete('/:id', function(req, res, next){
	Campus.destroy({ where: {
		id: req.params.id
	}})
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = campusRouter;
