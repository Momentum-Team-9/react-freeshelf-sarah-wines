import React, { useState } from 'react'

export const Book = ({ title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  // const { name, expertise } = props

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div>
      <div className='card'>
        <header>
          <h3>{title}</h3>
        </header>
        <div className='card-content'>
          <p><span>Author:</span>{author && author.map((item) => `${item} `)}</p>
          <p><span>coverImageUrl:</span>{coverImageUrl && coverImageUrl.map((item) => `${item} `)}</p>
          <p><span>shortDescription:</span> {shortDescription && shortDescription.map((item) => `${item} `)}</p>
          <p><span>Read here:</span> {url && url.map((item) => `${item} `)}</p>
          {isExpanded ? <a href='#' onClick={handleExpanded}>Show Less <i class='fas fa-caret-up' /></a> : <a href='#' onClick={handleExpanded}>Show More <i class='fas fa-caret-down' /></a>}
          {isExpanded &&
            <p><span>Publisher:</span>{publisher}</p>}
            <p><span>Read here:</span> {url && url.map((item) => `${item} `)}</p>
        </div>
    
      </div>
    </div>
  )
}
