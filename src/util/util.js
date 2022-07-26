export const deleteReccursively = (comments, id) => {
  // console.log(comments);
  let foundOnCurLevel = false;
  for (let i = 0; i < comments.length; ++i) {
    if (comments[i].id === id) {
      foundOnCurLevel = true;
      break;
    }
  }
  if (foundOnCurLevel) {
    // console.log("inside if", level, "id", id);
    comments = comments.filter((el) => el.id != id);

    // console.log(comments);
    return comments;
  } else {
    // we need to go one level deeper
    for (let i = 0; i < comments.length; ++i) {
      if (comments[i].child) {
        comments[i].child = deleteReccursively(comments[i].child, id);
        // comments[i].child = findReccursively(comments[i].child, id, level + 1);
      }
    }
    return comments;
  }
};

export const addReplyReccursively = (comments, id, newComment, level = 0) => {
  // console.log(comments);
  let foundOnCurLevel = false;
  let i = 0;
  for (i = 0; i < comments.length; ++i) {
    if (comments[i].id === id) {
      foundOnCurLevel = true;
      break;
    }
  }
  if (foundOnCurLevel) {
    console.log("inside if", level, "id", id);
    comments[i].child = [newComment, ...(comments[i].child || [])];

    // console.log(comments);
    return comments;
  } else {
    // we need to go one level deeper
    for (let i = 0; i < comments.length; ++i) {
      if (comments[i].child) {
        comments[i].child = addReplyReccursively(
          comments[i].child,
          id,
          newComment,
          level + 1
        );
        // comments[i].child = findReccursively(comments[i].child, id, level + 1);
      }
    }
    return comments;
  }
};
