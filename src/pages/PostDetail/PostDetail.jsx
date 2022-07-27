import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
export const PostDetail = () => {
    let { postId } = useParams()
    const [post, setPost] = useState()
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [])

    const editForm = () => {
        
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

    if (!post) return null
  return (
    <>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.likes}</p>
        <button onClick={deletePost}>Delete Post</button>
    </>
  )
}
