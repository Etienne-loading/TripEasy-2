const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog');

router.get('/', blogCtrl.findAllBlog);
router.post('/', blogCtrl.createBlog);
router.get('/:id', blogCtrl.findOneBlog);
router.delete('/:id', blogCtrl.deleteBlog);
router.put('/:id', blogCtrl.updateBlog);

module.exports = router;
