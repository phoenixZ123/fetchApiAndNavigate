import { Link } from "react-router-dom";
import { Loading } from "../../Loading";
import { useFetch } from "../../hooks/useFetch";
import React from "react";
export const Home = () => {
  let url = "http://localhost:2800/books";
  let { data: books, loading, error } = useFetch(url);

  return (
    <div className="body-home">
      {loading && <Loading />}
      {!loading && (
        <>
          {books &&
            books.map((data) => (
              <div key={data.id}>
                <div className="grid-container">
                  <div>{data.title} </div>
                  <div className="author" style={{ marginTop: "10px" }}>
                    Author - {data.author}
                  </div>{" "}
                  <p>
                    <Link to={`/books/${data.id}`}>Read more</Link>
                  </p>
                </div>{" "}
              </div>
            ))}
        </>
      )}
    </div>
  );
};
