import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'

export const EditPostForm = () => {
    let { postId } = useParams()
    const [edit, setEdit] = useState(false)
    const [comment, setComment] = useState(false)
    const [post, setPost] = useState()
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
    const handleSubmit = (e) => {
        e.preventDefault()
        editPost()
        navigate('/posts')

    }
  
    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    if (!post) return null
  return (
    <>
        <form onSubmit={handleSubmit}>
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
    </>
  )
}
