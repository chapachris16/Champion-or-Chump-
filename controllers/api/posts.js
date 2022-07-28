const Post = require('../../models/post')

module.exports = {
    create,
    find,
    findOne,
    remove,
    edit,
    createComment,
    findComment,
    deleteComment,
    // editComment
    likePost,
    dislikePost
}

async function create(req, res) {
    try {
        const post = await Post.create(req.body)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function find(req, res) {
    try {
        const post = await Post.find({})
        res.json(post)

    } catch (err) {
        res.status(400).json(err)
    }

}
async function findOne(req, res) {
    try {
        console.log(req.params.postId)
        const post = await Post.findById(req.params.postId)
        res.json(post)

    } catch (err) {
        res.status(400).json(err)
    }

}
async function deleteComment(req, res) {
  Post.findById(req.params.postId)
    .then((post) => {
      const comment = post.comments;
      console.log(comment);
      let index = comment.findIndex((comments) => comments.id === req.params.commentId);
     comment.splice(index,1)
     post.save()
      res.json('deleted');
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    }); 
}
// async function editComment(req, res) {
//   Post.findById(req.params.postId)
//     .then((post) => {
//       const comment = post.comments;
//       console.log(comment);
//       let index = comment.findIndex((comments) => comments.id === req.params.commentId);
//      comment.splice(index,1, req.body)
//      post.save()
//       res.json('deleted');
//     })
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// }

async function findComment(req, res) {
  Post.findById(req.params.postId)
    .then((post) => {
      const comment = post.comments;
      console.log(comment);
      let index = comment.findIndex((comments) => comments.id === req.params.commentId);
      console.log(index);
      console.log(post.comments[index]);
      res.json({post, index});
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
}


async function edit(req, res) {
    console.log('body',req.body)
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId, 
            req.body,
            {new: true}
        )
        res.json(game)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function likePost(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            {$inc: {likes: 1}},
            {new: true}
        )
        res.json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function dislikePost(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            {$inc: {dislikes: 1}},
            {new: true}
        )
        res.json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function likePost(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            {$inc: {likes: 1}},
            {new: true}
        )
        res.json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function createComment(req, res) {
    try {
        const post = await Post.findById(req.params.postId)
        post.comments.push(req.body)
        post.save()
    }
    catch (err){
        res.status(400).json(err)
    }
}

async function remove(req, res) {
    try {
        const post = await Post.findByIdAndRemove(req.params.postId)
        console.log(`deleted ${res.json(post)}`)
    } catch (err) {
        res.status(400).json(err)
    }
}