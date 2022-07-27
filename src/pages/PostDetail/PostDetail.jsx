import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
export const PostDetail = () => {
    let { postId } = useParams()
    const [comment, setComment] = useState(false)
    
    const [user, setUser] = useState(getUser())
    const [createComment, setCreateComment] = useState({
        content:'',
        author: user.ign
    })
    const [post, setPost] = useState()
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [])

    const addComment = async () => {
        await axios.post(`/api/posts/${postId}/comments`, createComment).then((comment) => {
            console.log(comment)
        })
    }
    const editPost = async () => {
        await axios.put(`/api/posts/${postId}/edit`, post).then((edited) => {
            console.log(edited)
        })
    }
    

    const renderEditForm = () => {
        
        // if (user.email === game.email) {
            setEdit(true)

        // } else (
        //     alert("You are not the owner of this game")
        // )

    }
    const renderCommentForm = () => {
            setComment(true)
    }
    const deletePost = async () => {
        axios.delete(`/api/posts/${postId}`).then((deleted) => {
            console.log(deleted)
        })
        navigate('/posts')
    }

    function handleSubmit(e) {
        e.preventDefault()
        editPost()
        setEdit(false)
        setComment(false)
        
    }
    function handleCommentSubmit(e) {
        e.preventDefault()
        addComment()
        setCreateComment({author: user.ign, content: ''})
        
    }

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    function handleCommentChange(e) {
        setCreateComment({ ...createComment, [e.target.name]: e.target.value });
    }

    if (!post) return null
  return (
    
    <>
    {edit ? <form onSubmit={handleSubmit}>
        Title
        <input
          type="text"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={post.content}
          name="content"
          onChange={handleChange}
        />
        <input
          type="hidden"
          value={post.likes}
          name="likes"
          onChange={handleChange}
        />
        <input
          type="hidden"
          value={post.created}
          name="created"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    :
    <>
        <h2>{post.title}</h2>
        <h2>{post.ign}</h2>
        <p>{post.content}</p>
        {comment ? <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={createComment.content}
          name="content"
          onChange={handleCommentChange}
        />
        <input
          type="hidden"
          value={createComment.author}
          name="author"
          onChange={handleCommentChange}
        />
        <button type="submit">SUBMIT</button>
      </form>: <>{post.comments.map((post) => {
        return (
            <ul key={post.id}>
                <li >{post.content}</li>
            </ul>
        )
      })} <button onClick={renderCommentForm}>add comment</button></>}
        <p>{post.likes}</p>
        <button onClick={deletePost}>Delete Post</button>
        <button onClick={renderEditForm}>Edit Post</button>
    </>
    }
    </>
  )
}
