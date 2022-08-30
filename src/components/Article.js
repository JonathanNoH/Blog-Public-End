import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [error, setErrors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);  
  let { id } = useParams();

  //componentDidMount hook fetch articles
  useEffect(() => {
    fetch(`http://localhost:3005/posts/published/${id}`, {mode: 'cors'})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        //error
        (error) => {
          setIsLoaded(true);
          setErrors(error);
        }
      )
  }, [id])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {items[0].title}
      </div>
    );
  }
}

export default Article;