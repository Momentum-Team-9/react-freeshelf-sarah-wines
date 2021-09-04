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
        
          <div className='card-content' style={{margin: 20}}>
          <div style={{float: 'right', marginTop: 0, marginLeft: 20, marginBottom: 10}}>
          <img style={{height: 300}} src={coverImageUrl} alt="book jacket cover"/>
          </div>
          <p><span>By: </span>{author}</p>
          
          <p><span></span> {shortDescription}</p>
          <div>
          {isExpanded ? <a href='#' onClick={handleExpanded}>Show Less <i class='fas fa-caret-up' /></a> : <a href='#' onClick={handleExpanded}>Show More <i class='fas fa-caret-down' /></a>}
          {isExpanded &&
            <p><span>Read it here: <a href={url}>{url}</a></span></p>}
          {isExpanded && 
            <p><span>Publisher: </span>{publisher}</p>} 
          {isExpanded &&
            <p><span>Publication Date: </span>{publicationDate}</p>}
          {isExpanded &&
            <p><span>Detailed Description: </span>{detailedDescription}</p>}
        </div>
        </div>
      </div>
    </div>
  )
}
