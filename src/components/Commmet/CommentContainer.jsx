import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../constants/Comment";
import Comment from "./Comment";

 
const CommentContainer = ({ className, logginedUserID }) => {
  const [comments, setComments] = useState([]);
  const [affectedComment, setAffectedComment] = useState(null);
  const mainComments = comments.filter((comment) => comment.parent === null);
  console.log(comments);


  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyingUser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyingUser,
      createdAt: new Date().toISOString(),
    };
    setComments((currState) => {
      return [newComment, ...currState];
    });
    setAffectedComment(null);
  };

const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if((comment._id)===commentId){
        return {...comment, desc : value};
      }
      return comment;
    })
    setComments(updatedComments);
    setAffectedComment(null);
}

const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return commentId !== comment._id;
    })
    console.log(updatedComments);
    setComments(updatedComments);
}

const getRepliesHandler = (commentId) => {
   return comments.filter((comment) => {
    return comment.parent === commentId
   }).sort((a,b) => {
    return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) 
   });
}
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Post"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment ) => {
          return (
            <Comment
            key={comment._id}
              comment={comment}
              logginedUserID={logginedUserID}
              affectedComment={affectedComment}
              setAffectedComment={ setAffectedComment}
              addCommentHandler={addCommentHandler}
              updateCommentHandler={updateCommentHandler}
              deleteCommentHandler={deleteCommentHandler}
              replies={getRepliesHandler(comment._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
