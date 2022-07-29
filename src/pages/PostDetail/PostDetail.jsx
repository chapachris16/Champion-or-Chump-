import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { CreateCommentForm } from '../../components/CreateCommentForm/CreateCommentForm'
import './PostDetail.css'
import { EditPostForm } from '../../components/EditPostForm/EditPostForm'
import { Button } from 'react-bootstrap'
export const PostDetail = () => {
    let { postId } = useParams()
    const [count, setCount] = useState(0)
    const [comment, setComment] = useState(false)
    const [user, setUser] = useState(getUser())
    const [post, setPost] = useState(null)
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/api/posts/${postId}`).then((foundPost) => {

            setPost(foundPost.data)
        });
    }, [count])
    
    const likePost = async () => {
            axios.put(`/api/posts/${postId}/edit/like`).then((liked) => {
                console.log(liked)
                
            })
        setCount(count + 1)
    }
    const dislikePost = async () => {
            axios.put(`/api/posts/${postId}/edit/dislike`).then((disliked) => {
                console.log(disliked)
            })
        setCount(count + 1)
    }
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
    
    <body className='body'>
    {edit ? <EditPostForm/>
    :
    <>
        <h2 className='title'>{post.title}</h2>
        <h2 className='author'>Posted by: <strong>{post.ign}</strong></h2>
        <p>{post.content}</p>
       
        
         {comment ? <CreateCommentForm/> : <>{post.comments.map((post) => { 
        return (
            <div key={post.id}>
                <h6>{post.author} commented</h6>
                <Link className='commentLink'to={`/posts/${postId}/comments/${post._id}`}>{post.content}</Link>
                
            </div>
        )
      })} <Button className='button' onClick={renderCommentForm}>add comment</Button></>}
        <p>Likes:{post.likes} <br/> <Button onClick={likePost}>Like Post</Button> </p>
       
        <p>Dislikes:{post.dislikes}<br/><Button onClick={dislikePost}>Dislike Post</Button></p>
        { user.ign === post.ign ?
        <>
        <Button className='button'variant='primary'onClick={deletePost}>Delete Post</Button>
        <Button className='button'variant='primary'onClick={renderEditForm}>Edit Post</Button>
        </>
        :
        <></>
}
    </>
    }
    </body>
  )
}
