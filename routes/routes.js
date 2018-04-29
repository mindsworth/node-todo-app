const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', (req, res) => {
  res.render('index', {});
});

router.post('/todos', (req, res) => {
  let newTodo = new Todo({description: req.body.description});

  newTodo.save().then((result) => {
      console.log(result);
      res.redirect('/');
    });
});

module.exports = router;
