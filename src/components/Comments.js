import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import '../styles/Comments.css';

function Comments() {
  const [error, setErrors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  let params = useParams(); // id and cid for post id and comment id

  //componentDidMount fetch Comments
  useEffect(() => {
    fetch(`http://localhost:3005/posts/published/${params.id}/comments`, {mode: 'cors'})
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
  }, [params])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <section className="comments">
        <h3>Comments</h3>
        <ul className='comment-list'>
          {items.map(item => (
            <li key={item._id}>
              <div className='comment-container'>
                <p className='comment-content'>{item.content}</p>
                <p className="comment-author">{item.author}</p>
                <p className="comment-date">{moment(item.timestamp).format('MMMM Do YYYY')}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Comments;