import React, { useState } from 'react'
import Comments from './Comments'

const commentList = [
    { title: 'comment1', content: "message1", like: 1},
    { title: 'comment2', content: "message2", like: 1},
    { title: 'comment3', content: "message3", like: 1}
] 

export default function Memo() {
    const [comments, setComments] = useState(commentList) //eslint-disable-line no-unused-vars
  return (
    <div>
        <Comments commentList={comments} />
    </div>
  )
}
