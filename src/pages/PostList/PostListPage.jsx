import { checkToken } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function PostListPage() {
  const data = [];
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("/api/posts").then((foundPost) => {
      setPost(foundPost.data);
      // data = [foundPost.data]
      console.log(foundPost.data);
    });
  }, []);
  return (
    <>
      <h1>PostList Page</h1>
      {post.map((post) => {
        return (
          <>
            <Link to={`/posts/${post._id}`} key={post._id}>
              <h2>{post.title}</h2>
            </Link>
            <h5>{post.created}</h5>
            <p>{post.content}</p>
          </>
        );
      })}
    </>
  );
}
