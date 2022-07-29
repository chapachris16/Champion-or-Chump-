import { checkToken } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './PostList.css'
export default function PostListPage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("/api/posts").then((foundPost) => {
      setPost(foundPost.data);
      console.log(foundPost.data);
    });
  }, []);

  return (
    <body className="body">
      <h1>News Feed</h1>
      {post.map((post, id) => {
        return (
          <>
            <Link key={id} className='navLink'to={`/posts/${post._id}`} > 
              <h2 >{post.title}</h2>
            </Link>
            <h2>Author:{post.ign}</h2>
            <h5>Posted at: {post.created}</h5>
            <p>{post.content}</p>
          </>
        );
      })}
    </body>
  );
}
