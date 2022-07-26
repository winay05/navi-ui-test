import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comment from "./componets/Comment";
import "./App.css";
function App() {
  const [comments, setComments] = useState([
    { title: "sample", id: uuidv4(), child: [] },
  ]);
  const handleClick = () => {
    const inpEle = document.getElementById("current-comment");
    const val = inpEle.value;

    setComments([{ title: val, id: uuidv4(), child: [] }, ...comments]);
    inpEle.value = "";
  };
  return (
    <div className="App">
      <main className="container">
        <h1>Comment Widget</h1>
        <input id="current-comment" placeholder="Enter a comment" />
        <button onClick={handleClick}>Add comment</button>

        {comments && comments.length ? (
          <div>
            {comments.map((comment) => {
              console.log(comment);
              return (
                <div key={comment.id}>
                  <Comment comment={comment} />
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
