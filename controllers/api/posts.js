const Post = require('../../models/post')

module.exports = {
    create,
    find,
    findOne,
    remove,
    edit,
    createComment,
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
        console.log(req.params.gameId)
        const post = await Post.findById(req.params.postId)
        res.json(post)

    } catch (err) {
        res.status(400).json(err)
    }

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