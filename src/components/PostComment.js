import React, { useState } from "react";
import { useParams } from "react-router-dom";

function PostComment() {
  let params = useParams();
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(`http://localhost:3005/posts/published/${params.id}/comments`, {
        method: "POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content,
          author,
        }),
      });
      if (res.status === 200) {
        setAuthor("");
        setContent("");
        setMessage("Comment created!");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="comment-content">Comment: </label>
      <textarea name="comment-content" id="comment-content" value={content} onChange={handleContentChange}/>
      <label htmlFor="comment-author">Name: </label>
      <input type="text" name="comment-author" id="comment-author" value={author} onChange={handleAuthorChange}/>
      <button type="submit">Post Comment</button>
      <p>{message}</p>
    </form>
  )
}

export default PostComment;