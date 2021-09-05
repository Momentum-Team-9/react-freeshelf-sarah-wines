import React, { useState } from 'react'
import { books as data } from '../data'
import { Book } from './Book'

export const App = () => {
  const [books] = useState(data)

  return (
    <>
      <div style= {{marginLeft: '21%', marginRight: '20%'}}>
        <h1>Free Books</h1>
      </div>
      <div style={{maxWidth: 1000, marginLeft: '20%', marginRight: '20%', alignItems: 'center'}}>
        {books.map((book, idx) => {
          return <Book key={idx} title={book.title} author={book.author}url={book.url} shortDescription={book.shortDescription} coverImageUrl={book.coverImageUrl} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription}  />
        })}
      </div>
    </>
  )
}
