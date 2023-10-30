import React, { useState } from "react";
import CommentForm from "./CommentForm";

import Comment from "./Comment";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { createNewComment, deleteComment, updateComment } from "../../services/Index/comment";
import { getToken } from "../../services/token";
import toast from "react-hot-toast";

const CommentContainer = ({ className, logginedUserID, comments, postSlug }) => {
  const token = getToken();
  const [affectedComment, setAffectedComment] = useState(null);
  const {mutate:mutateNewComment, isLoading:isLoadingNewComment} = useMutation({
    mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
      return createNewComment({ token, desc, slug, parent, replyOnUser });
    },
    onSuccess : () => {
       toast.success("Comment done");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    }
  });

  const {mutate:mutateUpdateComment, isLoading:isLoadingUpdateComment} = useMutation({
    mutationFn: ({ token, desc, commentId }) => {
      return updateComment({ token, desc, commentId });
    },
    onSuccess : () => {
       toast.success("Comment updated done");
       QueryClient.invalidateQueries(["blog",postSlug])
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    }
  });

  const {mutate:mutateDeleteComment, isLoading:isLoadingDeleteComment} = useMutation({
    mutationFn: ({ token, commentId }) => {
      return deleteComment({ token, commentId });
    },
    onSuccess : () => {
       toast.success("Comment is Deleted"); 
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    }
  });

  const addCommentHandler = (value, parent = null, replyingUser = null) => {
    mutateNewComment({desc:value, parent, replyingUser, token:token, slug:postSlug})
    setAffectedComment(null);
  };

  const updateCommentHandler = (value, commentId) => {
    mutateUpdateComment({token:token, desc:value, commentId:commentId})
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    mutateDeleteComment({token:token, commentId : commentId})
  };
  console.log();
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Post"
        formSubmitHandler={(value) => addCommentHandler(value)}
        loading = {isLoadingNewComment}
      />
      <div className="space-y-4 mt-8">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              comment={comment}
              logginedUserID={logginedUserID}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addCommentHandler={addCommentHandler}
              updateCommentHandler={updateCommentHandler}
              deleteCommentHandler={deleteCommentHandler}
              replies={comment.replies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
