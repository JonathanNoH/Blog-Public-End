import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Articles() {
  const [error, setErrors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //componentDidMount hook fetch articles
  useEffect(() => {
    fetch("http://localhost:3005/posts/published", {mode: 'cors'})
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
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="posts">
        <h2>Posts</h2>
        <ul>
          {items.map(item => (
            <li key={item._id}>
              <h3>{item.title}</h3>
              <p>{decodeURI(item.content)}</p>
              <p>{item.author.firstName + " " + item.author.lastName}</p>
              <p>{moment(item.timestamp).format('MMMM Do YYYY')}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;