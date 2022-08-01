import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { Button , Form, Row} from 'react-bootstrap'

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
        <Form onSubmit={handleSubmit}>
        <label>Title</label>
        
        <input
          type="text"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        
        <label>Content</label>
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
        <Button type="submit">SUBMIT</Button>
      </Form>
    </>
  )
}
