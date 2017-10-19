const studentRouter = require('express').Router();
const { Student, Campus }  = require('../../db/models');

studentRouter.get('/', function(req, res, next){
	Student.findAll({include: [Campus]})
	.then(students => res.json(students))
	.catch(next)
});

// studentRouter.get('/:id', function(req, res, next){
// 	Student.findOne({
// 		include: [Campus],
// 		where:
// 			{id: req.params.id}
// 		}
// 	)
// 	.then(student => res.json(student))
// 	.catch(next);
// });

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
	}, returning: true
})
  .then(student => {res.send(student)})
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
