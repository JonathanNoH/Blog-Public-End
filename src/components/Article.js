import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import moment from "moment";

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
      <main>
        <section className="article">
          <h2>{items[0].title}</h2>
          <p>{items[0].author.firstName + " " + items[0].author.lastName}</p>
          <p className="article-date">{moment(items[0].timestamp).format('MMMM Do YYYY')}</p>
          <p>{items[0].content}</p>
        </section>
        <Comments />
      </main>
    );
  }
}

export default Article;