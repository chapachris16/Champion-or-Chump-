import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { CreateCommentForm } from '../../components/CreateCommentForm/CreateCommentForm'
import { EditPostForm } from '../../components/EditPostForm/EditPostForm'
export const PostDetail = () => {
    let { postId } = useParams()

    const [comment, setComment] = useState(false)
    const [user, setUser] = useState(getUser())
    const [post, setPost] = useState()
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [])

    const deletePost = async () => {
        if(user.ign === post.ign) {
            axios.delete(`/api/posts/${postId}`).then((deleted) => {
                console.log(deleted)
            })
            navigate('/posts')
    } else {
        alert('you are not the post author')
    }
    }

    const renderEditForm = () => {
        setEdit(true)
    }
    const renderCommentForm = () => {
            setComment(true)
    }
  
    if (!post) return null
  return (
    
    <>
    {edit ? <EditPostForm/>
    :
    <>
        <h2>{post.title}</h2>
        <h2>{post.ign}</h2>
        <p>{post.content}</p>
         {comment ? <CreateCommentForm/> : <>{post.comments.map((post) => { 
        return (
            <ul key={post.id}>
                <li >written by {post.author}</li>
                <li >{post.content}</li>
            </ul>
        )
      })} <button onClick={renderCommentForm}>add comment</button></>}
        <p>{post.likes}</p>
        { user.ign === post.ign ?
        <>
        <button onClick={deletePost}>Delete Post</button>
        <button onClick={renderEditForm}>Edit Post</button>
        </>
        :
        <></>
}
    </>
    }
    </>
  )
}
