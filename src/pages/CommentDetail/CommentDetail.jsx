import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
export const CommentDetail = () => {
    let navigate = useNavigate()
    let {postId, commentId} = useParams()
    const [comment, setComment] = useState()
    useEffect(() => {
        axios.get(`/api/posts/${postId}/comments/${commentId}`).then((foundComment) => {
            setComment(foundComment.data);
            console.log(foundComment.data);
          });
    }, [])
    

    const deleteComment = () => {
        axios.delete(`/api/posts/${postId}/comments/${commentId}`).then((deletedComment) => {
            console.log(deletedComment);
          });
        navigate(`/posts/${postId}`)
    }
    if (!comment) return null
  return (
    <>
        <p>{comment.post.comments[comment.index].author}</p>
        <p>{comment.post.comments[comment.index].content}</p>
        <button onClick={deleteComment}>Delete This Comment?</button>
    </>
  )
}
