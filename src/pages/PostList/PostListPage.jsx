import { checkToken } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './PostList.css'
export default function PostListPage() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get("/api/posts").then((foundPost) => {
      setPost(foundPost);
      console.log(foundPost);
    });
  }, []);

  if(!post) return null
  const filtered = post.data.filter(post => {
    return post.tag === 'driving'
  })
  return (
    <body className="body">
      <h1>News Feed</h1>
      {filtered.map((post, id) => {
        return (
          <>
            <Link key={id} className='navLink'to={`/posts/${post._id}`} > 
              <h2 >Subject: {post.title}</h2>
            </Link>
            <h2>Author:{post.ign}</h2>
            <p>{post.content}</p>
            <h5>Posted at: {post.created}</h5>
            
          </>
        );
      })}
    </body>
  );
}
