import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const PostDetail = () => {
    let { postId } = useParams()
    const [post, setPost] = useState()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [])
    if (!post) return null
  return (
    <>
        <div>hello</div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </>
  )
}
