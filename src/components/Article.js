import React from "react";
import { useParams } from "react-router-dom";

function Article() {
  
  let { id } = useParams();

  return (
    <div>Article: {id}</div>
  )
}

export default Article;