const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne(
    {
      // Gets the category based on id given in the request parameters
      where: {
        id: req.params.id
      },
    }
  ) .then((categoryData)=>{
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  // create a new category
  const categoryData = {
    category_name: req.body.category_name
  };

  Category.create(categoryData)
    .then((newCategory) => {
      res.status(200).json(newCategory);
    }) .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.body.id,
    },
    {
      where: {
        id:  req.params.id,
      }
    }
  )
  .then((updatedCategory)=>{
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory)=>{
    res.json(deletedCategory);
  })
  .catch((err)=> res.json(err));
});

module.exports = router;
