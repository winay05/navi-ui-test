import React from "react";
const Reply = ({ addReply }) => {
  return (
    <>
      <input id="temp-reply-input" placeholder="enter your reply" />
      <button onClick={addReply}>Reply</button>
    </>
  );
};

export default Reply;
