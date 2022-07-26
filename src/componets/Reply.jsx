import React from "react";
const Reply = ({ addReply }) => {
  return (
    <div className="reply-main-container">
      <input id="temp-reply-input" placeholder="enter your reply" />
      <button onClick={addReply}>Reply</button>
    </div>
  );
};

export default Reply;
