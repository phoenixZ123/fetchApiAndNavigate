
import { Loading } from '../../Loading';
import { useFetch } from '../../hooks/useFetch'
import React from 'react'
export const Home = () => {

    let url = "http://localhost:2800/books";
    let { data: books, loading, error } = useFetch(url);
    
    return (
      
        <>{loading && <Loading/>}
        {!loading && <>
        {books && books.map(data=> 
            <div key={data.id} ><div className='grid-container' ><div>{data.title} <img src='/src/assets/one.jpg' /></div><div style={{ marginTop: "10px" }}>{data.description}</div> <div style={{ marginTop: "10px" }}>Author - {data.author}</div> <p><a>Read more</a></p></div>  </div>     
           )}
        </>}
        </>
          
    )
}

