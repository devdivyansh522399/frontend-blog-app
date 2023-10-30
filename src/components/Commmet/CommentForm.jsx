import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
  loading = false
}) => {
  const [value, setValue] = useState(initialText);
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-primary border-opacity-50 rounded-lg p-4">
        
        <textarea
          rows={5}
          className="w-full focus:outline-none bg-transparent"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />


<div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center "
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2 text-center  disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading ? true : false}
          >
            {btnLabel}
          </button>
      </div>
      </div>
    </form>
  );
};

export default CommentForm;
