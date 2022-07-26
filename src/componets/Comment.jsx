import React, { useState } from "react";
import Reply from "./Reply";
import { v4 as uuidv4 } from "uuid";

const Comment = ({ comment, handleDelete, handleReply }) => {
  const [activeReply, setActiveReply] = useState(false);
  const handleReplyToggle = () => {
    setActiveReply(!activeReply);
  };
  const addReply = () => {
    const newReply = document.getElementById("temp-reply-input");
    handleReply(comment.id, { title: newReply.value, id: uuidv4() });
    handleReplyToggle();
  };
  return (
    <div style={{ marginLeft: 20 }}>
      <span id={comment.id}>{comment.title}</span>
      <button onClick={() => handleDelete(comment.id)}>DELETE</button>
      <button onClick={handleReplyToggle}>REPLY</button>
      {activeReply ? <Reply addReply={addReply} /> : null}
      {comment.child && comment.child.length
        ? comment.child.map((el) => (
            <div key={el.id}>
              <Comment
                handleReply={handleReply}
                handleDelete={handleDelete}
                comment={el}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Comment;
