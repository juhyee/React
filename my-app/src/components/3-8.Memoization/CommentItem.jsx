import React from 'react'
import "./CommentItem.css"

export default function CommentItem(title, content, likes) {
  return (
    <div className='CommentItem'>
        <span>{title}</span>
        <span>{content}</span>
        <span>{likes}</span>
    </div>
  )
}
