import React from "react";

const Comment = ({ comment }) => {
  //   console.log(comment);
  return <div id={comment.id}>{comment.title}</div>;
};

export default Comment;
