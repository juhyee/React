import React, { useEffect, useState } from 'react'
import Comments from './Comments'

const commentList = [
    { title: 'comment1', content: "message1", like: 1},
    { title: 'comment2', content: "message2", like: 1},
    { title: 'comment3', content: "message3", like: 1}
] 

export default function Memo() {
    const [comments, setComments] = useState(commentList) 
    
    useEffect(() => {
      const interval = setInterval(() => {
        setComments((prevComments) => [
          ...prevComments,{
            title: `comment${prevComments.length + 1}`,
            content: `message${prevComments.length + 1}`,
            like: 1
          },

        ])
      }, 10000);

      return () => {
        clearInterval(interval)
      }
    })
  return (
        <Comments commentList={comments} />
  )
}
