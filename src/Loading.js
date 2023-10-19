import React, { useRef } from 'react'
import { useFetch } from './hooks/useFetch';

export const Loading = () => {
    let url = "http://localhost:2800/books";
    let { data, loading, error } = useFetch(url);
   
  return (
      <div><div className="container">
          <div className="loader-container">
              <div className="spinner"></div>
          </div>

          <div className="main-content">
              <h1>Books</h1>
             
              <div className="buttons">
                  <button className="btn">
                      <a href="#">Read Article</a>
                  </button>
                  <button className="btn get-quote">
                      Generate Quote
                  </button>
              </div>
              <div className="quote-section">
                  <blockquote className="quote">
                      If you do not express your own original ideas, if you do not listen
                      to your own being, you will have betrayed yourself.
                  </blockquote>
                  - <span className="author">austin laveno</span>
              </div>
          </div>
      </div></div>
  )
}
