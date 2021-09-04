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
          <p><span>By: </span>{author}</p>
          <img src={coverImageUrl} alt="book jacket cover"/>
          <p><span></span> {shortDescription}</p>
          <a href= {url}>Read it here</a>
          <div>
          {isExpanded ? <a href='#' onClick={handleExpanded}>Show Less <i class='fas fa-caret-up' /></a> : <a href='#' onClick={handleExpanded}>Show More <i class='fas fa-caret-down' /></a>}
          {isExpanded &&
            <p><span>Publisher: </span>{publisher}</p> &&
            <p><span>Publication Date: </span>{publicationDate}</p> &&
            <p><span>Detailed Description: </span>{detailedDescription}</p>}
        </div>
        </div>
      </div>
    </div>
  )
}
