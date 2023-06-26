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
  Category.create([
    {
      category_name: 'Underwear'
    },
    {
      category_name: 'Graphic T-Shirts'
    },
  ]) .then(()=>{
    res.send('Seeding Success');
  })
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
