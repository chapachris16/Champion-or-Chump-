const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.post('/', postsCtrl.create)
router.get('/', postsCtrl.find)
router.get('/:postId', postsCtrl.findOne)
router.delete('/:postId', postsCtrl.remove)
router.put('/:postId/edit', postsCtrl.edit)

module.exports = router;