import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { Button } from 'react-bootstrap'
import './CreateCommentForm.css'
export const CreateCommentForm = () => {
    let { postId } = useParams()
    const [user, setUser] = useState(getUser())
    const [createComment, setCreateComment] = useState({
        content:'',
        author: user.ign
    })
    const addComment = async () => {
        await axios.post(`/api/posts/${postId}/comments`, createComment).then((comment) => {
            console.log(comment)
        })
    }
    function handleCommentSubmit(e) {
        e.preventDefault()
        addComment()
        setCreateComment({author: user.ign, content: ''})
        
    }

    function handleCommentChange(e) {
        setCreateComment({ ...createComment, [e.target.name]: e.target.value });
    }
  return (
    <>
    <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={createComment.content}
          name="content"
          onChange={handleCommentChange}
          placeholder='what would you like to say'
        />
        <input
          type="hidden"
          value={createComment.author}
          name="author"
          onChange={handleCommentChange}
        />
        <Button type="submit">SUBMIT</Button>
      </form></>
  )
}
