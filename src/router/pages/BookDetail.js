import React from 'react'
import { useParams } from 'react-router-dom'

export const BookDetail = () => {
    let book=useParams();
  return (
    <div>BookDetail no - {book.id}</div>
  )
}
