import React, { useState } from 'react'

export const Book = ({ title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // const showImage = () => {
  //  {coverImageUrl.length} > 0 ? 
  // }
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
          <img style={{height: 300, border: '1px solid lightGrey'}} src={coverImageUrl} alt="book jacket cover"/>
          </div>
          <p><span></span><b>{author}</b></p>
          
          <p><span></span> {shortDescription}</p>
          <div>
          {isExpanded ? <button onClick={handleExpanded}>Show Less <i className='fas fa-caret-up' /></button> : <button onClick={handleExpanded}>Show More <i className='fas fa-caret-down' /></button>}
          {isExpanded &&
            <p><span><b>Read it here: </b><a href={url}>{url}</a></span></p>}
          {isExpanded && 
            (publisher) 
            ? <p><span><b>Publisher: </b></span>{publisher}</p>
            : null }
          {isExpanded &&
            (publicationDate)
            ? <p><span><b>Publication Date: </b></span>{publicationDate}</p>
            : null }
          {isExpanded &&
            (detailedDescription)
            ? <p><span><b>Detailed Description: </b></span>{detailedDescription}</p>
            : null}
           
        </div>
        </div>
      </div>
    </div>
  )
}
