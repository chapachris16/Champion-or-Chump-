import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const PostDetail = () => {
    let { postId } = useParams()
    const [post, setPost] = useState()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [post])

    const deletePost = async () => {
        axios.delete(`/api/posts/${postId}`).then((deleted) => {
            console.log(deleted)
        })
    }

    if (!post) return null
  return (
    <>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.likes}</p>
        <Link to ={'/posts'}><button onClick={deletePost}>Delete Post</button></Link>
    </>
  )
}
