import React from 'react'

const Article = (props) => {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <div className="body">
        {props.article.body}
      </div>
    </div>
  )
}

export default Article