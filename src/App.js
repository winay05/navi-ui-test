import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comment from "./componets/Comment";
import "./App.css";
import { addReplyReccursively, deleteReccursively } from "./util/util";

function App() {
  // to force a rerender of app
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [comments, setComments] = useState([
    {
      title: "sample",
      id: uuidv4(),
      child: [
        { title: "1", id: "random" },
        {
          title: "2",
          id: "random2",
          child: [
            {
              title: "3-inner",
              id: "random3",
              child: [{ title: "3-inner-inner", id: "random4" }],
            },
          ],
        },
      ],
    },
  ]);

  const handleAddComment = () => {
    const inpEle = document.getElementById("current-comment");
    const val = inpEle.value;

    setComments([{ title: val, id: uuidv4(), child: [] }, ...comments]);
    inpEle.value = "";
  };
  const handleDelete = (id) => {
    setComments(deleteReccursively(comments, id));
    forceUpdate();
    // to force react app to rerender, deleting a comment essentially changes a property of the state
    // this diff might be ignored due to shallow comparision, and app might not rerender
  };

  const handleReply = (id, newComment) => {
    setComments(addReplyReccursively(comments, id, newComment));
    forceUpdate();
  };
  return (
    <div className="App">
      <main className="container">
        <h1>Comment Widget</h1>
        <input id="current-comment" placeholder="Enter a comment" />
        <button onClick={handleAddComment}>Add comment</button>

        {comments && comments.length ? (
          <div>
            {comments.map((comment) => {
              return (
                <div key={comment.id}>
                  <Comment
                    handleReply={handleReply}
                    handleDelete={handleDelete}
                    comment={comment}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
