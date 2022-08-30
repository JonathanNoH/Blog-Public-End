import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../styles/Articles.css';
import { Link } from 'react-router-dom';

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
    return (
    <div>
        <p>Error: {error.message}</p>
        {/* TEMPORARY ARTICLES */}
        <section className='posts'>
          <h2>Posts</h2>
          <ul className='article-list'>
            <li>
              <div className="li-flex-container">
                <h3>Article 2</h3>
                <p className='post-content'>This is where all the content goes. Content content lorem ipsum.</p>
                <p className='post-author'>Author Person</p>
                <p className='post-date'>Posted on August 2</p>
              </div>
            </li>
            <li>
              <div className="li-flex-container">
                <h3>Article 1</h3>
                <p className='post-content'>This is the content for the first article. Content content lorem ipsum.</p>
                <p className='post-author'>Author Person</p>
                <p className='post-date'>Posted on August 1</p>
              </div>
            </li>
            <li>
              <div className="li-flex-container">
                <h3>Article 2</h3>
                <p className='post-content'>This is where all the content goes. Content content lorem ipsum.</p>
                <p className='post-author'>Author Person</p>
                <p className='post-date'>Posted on August 2</p>
              </div>
            </li>
            <li>
              <div className="li-flex-container">
                <h3>Article 1</h3>
                <p className='post-content'>This is the content for the first article. Content content lorem ipsum.</p>
                <p className='post-author'>Author Person</p>
                <p className='post-date'>Posted on August 1</p>
              </div>
            </li>
            <li>
              <div className="li-flex-container">
                <h3>Article 2</h3>
                <p className='post-content'>This is where all the content goes. Content content lorem ipsum.</p>
                <p className='post-author'>Author Person</p>
                <p className='post-date'>Posted on August 2</p>
              </div>
            </li>
            <li>
              <div className="li-flex-container">
                <h3>Article 1</h3>
                <p className='post-content'>This is the content for the first article. Content content lorem ipsum.</p>
                <p className='post-author'>Author Person</p>
                <p className='post-date'>Posted on August 1</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
      );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="posts">
        <h2>Posts</h2>
        <ul className='article-list'>
          {items.map(item => (
            <li key={item._id}>
              <Link to={item._id}>
                <div className="li-flex-container">
                  <h3>{item.title.substr(0, 30) + "..."}</h3>
                  <p className='post-content'>{item.content.substr(0, 30) + "..."}</p>
                  <p className='post-author'>{item.author.firstName + " " + item.author.lastName}</p>
                  <p className='post-date'>{moment(item.timestamp).format('MMMM Do YYYY')}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Articles;