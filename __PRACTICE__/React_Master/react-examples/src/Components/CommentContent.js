import React from 'react'

export const CommentContent = (props) => {
  return <p className="comment-content">{props.user.content}</p>
}
