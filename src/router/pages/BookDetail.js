import React, { useEffect } from "react";
import "../pages/detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../Loading";

export const BookDetail = () => {
  let param = useParams();
  let url = `http://localhost:2800/books/${param.id}`;

  const { data: book, loading, error } = useFetch(url);
  let navigate = useNavigate();
  useEffect(() => {
    if(error){
        setTimeout(()=>{
            navigate("/");
        },1000)
        
    }
    
  }, [error, navigate]);
  return (
    <div className="detail-list">
      {error && <div>{error}</div>}
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {book && (
        <div className="list">
          <p>Title - {book.title}</p>
          <p>Author - {book.author}</p>
          <p>Description - {book.description}</p>
        </div>
      )}
    </div>
  );
};
