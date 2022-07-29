import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import {Button} from 'react-bootstrap/'
import './CommentDetail.css'
export const CommentDetail = () => {
  let navigate = useNavigate();
  let { postId, commentId } = useParams();
  const [comment, setComment] = useState();
  // const [editForm, setEditForm] = useState(false);
  const [user, setUser] = useState(getUser());
  useEffect(() => {
    axios
      .get(`/api/posts/${postId}/comments/${commentId}`)
      .then((foundComment) => {
        setComment(foundComment.data);
        console.log(foundComment.data);
      });
  }, []);

  // const editComment = () => {
  //   setEditForm(true);
  // };

  const deleteComment = () => {
    axios
      .delete(`/api/posts/${postId}/comments/${commentId}`)
      .then((deletedComment) => {
        console.log(deletedComment);
      });
    navigate(`/posts/${postId}`);
  };
  if (!comment) return null;
  return (
    <body>
    {/* {editForm? <form>
      <input type='hidden' name="author"></input>
      <input type='text' name="content"></input>
    </form> : */}
    <>
      <p className="author">{comment.post.comments[comment.index].author}</p>
      <p className="content">{comment.post.comments[comment.index].content}</p>
      {user.ign === comment.post.comments[comment.index].author ? (
        <>
          <Button variant='primary' onClick={deleteComment}>Delete This Comment?</Button>
          {/* <button onClick={editComment}>Edit This Comment?</button> */}
        </>
      ) : (
        <></>
      )}
    </>
      {/* } */}
      </body>
  );
};
