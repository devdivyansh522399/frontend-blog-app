import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillMessage } from "react-icons/ai";
import {BsThreeDotsVertical} from 'react-icons/bs'
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import { TbMessageReport } from "react-icons/tb";
const Comment = ({
  comment,
  logginedUserID,
  affectedComment,
  setAffectedComment,
  addCommentHandler,
  parentId = null,
  updateCommentHandler,
  deleteCommentHandler,
  replies,
}) => {
  const isUserIsLoggedIn = Boolean(logginedUserID);
  const commentsBelongToUser = logginedUserID === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start  gap-x-2 bg-[#F2F4F5] p-3 rounded-lg overflow-hidden">
      <Counter key={comment._id} vote={comment.vote}/>
      <div className="flex-1 flex flex-col p-2">
        <div className="flex flex-row justify-between">
          <div>
            <Link to="/">
              <h5 className="font-bold text-dark-hard text-sm">
                {comment.user.name}
              </h5>
            </Link>
            <span className="text-xs opacity-50 italic">
              {new Date(comment.createdAt).toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
              })}
            </span>
          </div>
          {commentsBelongToUser && (
            <button onClick={() => setOpen(!open)}>
              <BsThreeDotsVertical />
              {console.log(open)}
              {open && (
                <>
                  <div className="flex flex-col rounded-lg absolute bg-dark-soft text-white space-y-2 p-3 text-sm font-medium font-roboto -translate-x-20  ">
                    <button
                      onClick={() =>
                        setAffectedComment({
                          type: "editing",
                          _id: comment._id,
                        })
                      }
                      className="flex flex-row space-x-1 justify-between"
                    >
                      <div>Edit </div>
                      <AiFillEdit className="w-4 h-auto mx-2" />
                    </button>
                    <button
                      className="flex flex-row space-x-1 justify-between"
                      onClick={() => deleteCommentHandler(comment._id)}
                    >
                      <div>Delete</div>
                      <AiFillDelete className="w-4 h-auto mx-2" />
                    </button>
                    <button className="flex flex-row space-x-2 justify-between">
                      <div>Report</div>
                      <TbMessageReport className="w-4 h-auto mx-2" />
                    </button>
                  </div>
                </>
              )}
            </button>
          )}
        </div>

        {isEditing ? (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) =>
              updateCommentHandler(value, comment._id)
            }
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        ) : (
          <div className="font-opensans mt-[10px] text-sm text-dark-soft break-all">
            {comment.desc}
          </div>
        )}
        <div className=" flex flex-row gap-x-3 items-center text-dark-light font-roboto text-sm mt-5 mb-1">
          {isUserIsLoggedIn && (
             <button
             className="flex items-center space-x-2"
             onClick={() =>
               setAffectedComment({ type: "replying", _id: comment._id })
             }
           >
             <AiFillMessage className="w-4 h-auto" />
             <span>Reply</span>
           </button>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addCommentHandler(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div className="w-">
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addCommentHandler={addCommentHandler}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteCommentHandler={deleteCommentHandler}
                logginedUserID={logginedUserID}
                replies={[]}
                updateCommentHandler={updateCommentHandler}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
