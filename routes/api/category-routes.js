const router = require('express').Router();
const res = require('express/lib/response');
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
 
  Category.findAll({
    include: [
      {
        model:Product
      }
    ]
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  })
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
