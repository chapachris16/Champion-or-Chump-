const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.post('/', postsCtrl.create)
router.get('/', postsCtrl.find)
router.get('/:postId', postsCtrl.findOne)
router.delete('/:postId', postsCtrl.remove)
router.post('/:postId/comments', postsCtrl.createComment)
router.get('/:postId/comments/:commentId', postsCtrl.findComment)
router.delete('/:postId/comments/:commentId', postsCtrl.deleteComment)
// router.put('/:postId/comments/:commentId', postsCtrl.editComment)
router.put('/:postId/edit', postsCtrl.edit)
router.put('/:postId/edit/like', postsCtrl.likePost)


module.exports = router;