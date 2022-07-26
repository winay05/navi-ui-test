import React from "react";

const Comment = ({ comment }) => {
  //   console.log(comment);
  return (
    <div style={{ marginLeft: 20 }}>
      <span id={comment.id}>{comment.title}</span>
      <button>DELETE</button>
      <button>REPLY</button>
      {comment.child && comment.child.length
        ? comment.child.map((el) => (
            <div key={el.id}>
              <Comment comment={el} />
            </div>
          ))
        : null}
    </div>
  );
};

export default Comment;
