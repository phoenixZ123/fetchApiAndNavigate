import React, { useEffect, useRef, useState } from 'react'
import { Loading } from '../../Loading';
import { useFetch } from '../../hooks/useFetch';

export const Contact = () => {
  let url = "http://localhost:2800/books";
  let { data: books, loading, error } = useFetch(url);
  return (
      <div><h2>{loading && <Loading/>} </h2></div>
  )
}
