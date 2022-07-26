// routes/api/users.js

const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// POST /api/users

router.post('/', postCtrl.create)
router.get('/', postCtrl.find)
router.get('/:postId', postCtrl.findOne)
router.delete('/:postId', postsCtrl.remove)
router.put('/:postId/edit', postsCtrl.edit)
module.exports = router;