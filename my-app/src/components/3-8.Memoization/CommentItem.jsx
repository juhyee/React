import React, { Profiler, memo } from 'react'
import "./CommentItem.css"

function CommentItem({title, content, likes}) {
  return (
    <Profiler>
    <div className='CommentItem'>
        <span>{title}</span>
        <br />
        <span>{content}</span>
        <br />
        <span>{likes}</span>
    </div>
    </Profiler>
  )
}

export default memo(CommentItem)
