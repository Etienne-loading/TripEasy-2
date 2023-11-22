const Blog = require('../models/blog');

exports.findAllBlog = (req, res, next) => {
  console.log('hey');
  Blog.find()
    .then(blogs => res.status(200).json({ blogs }))
    .catch(error => res.status(400).json({ error }))
};

exports.findOneBlog = (req, res, next) => {
  Blog.findOne({ _id: req.params.id })
    .then(blog => res.status(200).json({ blog }))
    .catch(error => res.status(400).json({ error }))
};

exports.createBlog = (req, res, next) => {
  console.log('POST');
  const { name, description, price } = req.body; // Assurez-vous que les données attendues sont extraites du corps de la requête

  const blog = new Blog({
    name,
    description,
    price
  });

  blog.save()
    .then(createdBlog => {
      console.log("Blog créé :", createdBlog);
      res.status(201).json({ blog: createdBlog }); // Répond avec le blog créé après l'insertion réussie
    })
    .catch(error => {
      console.error("Erreur lors de la création du blog :", error);
      res.status(400).json({ error: error.message }); // Répond avec l'erreur rencontrée lors de la création du blog
    });
};

exports.updateBlog = (req, res, next) => {
  Blog.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteBlog = (req, res, next) => {
  Blog.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted!'}))
    .catch(error => res.status(400).json({ error }));
};
