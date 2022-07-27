import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const axios = require('axios').default
export const CreatePostForm = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: "",
    content: "",
    likes: 0,
    created: new Date(),
  });

  function createPost() {
    axios.post("/api/posts", form).then((result) => {
      console.log(result);
    });
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value, error: "" });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createPost();
    navigate('/posts')
    
    setForm({ title: "", content: "", likes: 0, created: new Date() });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        Title
        <input
          type="text"
          value={form.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.content}
          name="content"
          onChange={handleChange}
        />
        <input
          type="hidden"
          value={form.likes}
          name="likes"
          onChange={handleChange}
        />
        <input
          type="hidden"
          value={form.created}
          name="created"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
