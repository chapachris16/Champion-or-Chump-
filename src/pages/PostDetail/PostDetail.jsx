import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
export const PostDetail = () => {
    let { postId } = useParams()

    const [user, setUser] = useState(getUser())
    const [post, setPost] = useState()
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [])
    const editPost = async () => {
        await axios.put(`/api/posts/${postId}/edit`, post).then((edited) => {
            console.log(edited)
        })
    }
    const likeButton = () => {
       
    }
    const renderEditForm = () => {
        
        // if (user.email === game.email) {
            setEdit(true)

        // } else (
        //     alert("You are not the owner of this game")
        // )

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
        
    }

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    // console.log(user.ign)
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
        <p>{post.likes}</p>
        <button onClick={deletePost}>Delete Post</button>
        <button onClick={renderEditForm}>Edit Post</button>
        <button onClick={likeButton}>Like Post</button>
    </>
    }
    </>
  )
}
