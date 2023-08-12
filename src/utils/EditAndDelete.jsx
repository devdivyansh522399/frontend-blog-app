import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbMessageReport } from 'react-icons/tb';

const EditAndDelete = () => {
    const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)}>
    <BsThreeDotsVertical />
    {open && (
      <>
        <div className="flex flex-col rounded-lg absolute bg-dark-soft text-white space-y-2 p-3 text-sm font-medium font-roboto -translate-x-20  ">
          <button
            className="flex flex-row space-x-1 justify-between"
          >
            <div>Edit </div>
            <AiFillEdit className="w-4 h-auto mx-2" />
          </button>
          <button
            className="flex flex-row space-x-1 justify-between"
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
  )
}

export default EditAndDelete