import React, { useEffect, useState } from 'react';

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
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default Articles;