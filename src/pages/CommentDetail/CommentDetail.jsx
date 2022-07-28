import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
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
    <>
    {/* {editForm? <form>
      <input type='hidden' name="author"></input>
      <input type='text' name="content"></input>
    </form> : */}
    <>
      <p>{comment.post.comments[comment.index].author}</p>
      <p>{comment.post.comments[comment.index].content}</p>
      {user.ign === comment.post.comments[comment.index].author ? (
        <>
          <button onClick={deleteComment}>Delete This Comment?</button>
          {/* <button onClick={editComment}>Edit This Comment?</button> */}
        </>
      ) : (
        <></>
      )}
    </>
      {/* } */}
      </>
  );
};
