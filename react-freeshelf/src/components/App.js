import React, { useState } from 'react'
import { books as data } from '../data'
import { Book } from './Book'

export const App = () => {
  const [books] = useState(data)

  return (
    <>
      <div className='flex center five'>
        <h1>Free Books</h1>
      </div>
      <div style={{marginLeft: 100, marginRight: 100, marginBottom: 400}}>
        {books.map((book, idx) => {
          return <Book key={idx} title={book.title} author={book.author}url={book.url} shortDescription={book.shortDescription} coverImageUrl={book.coverImageUrl} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription}  />
        })}
      </div>
    </>
  )
}
