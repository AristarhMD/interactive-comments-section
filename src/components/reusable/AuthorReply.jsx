import { useState } from "react";
import { replyIcon, deleteIcon, editIcon } from "../Icons.jsx";
import LikesBtn from "./LikesBtn.jsx";

export default function AuthorReply({
  id,
  avatar,
  user,
  posted,
  replayto,
  text,
  likes,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [commentText, setCommentText] = useState(text);
  const [draft, setDraft] = useState(text);

  const handleEditing = () => {
    if (!isEditing) setDraft(commentText);
    setIsEditing(!isEditing);
  };

  const handleEditedValue = (e) => setDraft(e.target.value);

  const handleUpdates = (e) => {
    setCommentText(draft);
    setIsEditing(false);
  };

  const authorText = (text = commentText) => {
    if (!isEditing) {
      return (
        <p className="preset-2-r text-grey-500 md:col-start-2 md:col-span-2 md:row-start-2">
          <span className="text-purple-600 font-bold">{replayto} </span>
          {text}
        </p>
      );
    } else if (isEditing) {
      return (
        <textarea
          className="py-2 px-4 border border-inside border-grey-100 rounded-lg h-35 resize-none preset-2-r text-grey-800 md:col-start-2 md:col-span-2 md:row-start-2"
          defaultValue={text ? text : draft}
          onChange={handleEditedValue}
        />
      );
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-1 md:grid-cols-[max-content_1fr_min-content] grid-rows-[repeat(3,min-content)] md:grid-rows-[repeat(2,min-content)] gap-y-4 md:gap-x-6">
      <div className="flex items-center gap-4 md:col-start-2 md:row-start-1">
        <img
          className="size-8"
          src={avatar}
          alt={`Avatar of the user ${user}`}
        />
        <div className="flex items-center gap-2">
          <p className="preset-2-m text-grey-800">{user}</p>
          <span className="preset-3 text-white py-px px-1.5 bg-purple-600 rounded-xs">
            you
          </span>
        </div>
        <p className="preset-2-r text-grey-500">{posted}</p>
      </div>
      {authorText()}
      <LikesBtn>{likes}</LikesBtn>

      <div className="preset-2-m flex items-center gap-4 col-start-1 row-start-3 md:col-start-3 md:row-start-1 ml-auto">
        <button
          className="group cursor-pointer flex items-center gap-2 text-pink-400 hover:text-pink-200"
          onClick={() => onDelete(id)}
        >
          {deleteIcon}
          <span>Delete</span>
        </button>

        {isEditing ? (
          <button
            className="group cursor-pointer flex items-center gap-2 text-purple-600 hover:text-purple-200"
            onClick={handleUpdates}
          >
            {editIcon}
            <span>Save</span>
          </button>
        ) : (
          <button
            className="group cursor-pointer flex items-center gap-2 text-purple-600 hover:text-purple-200"
            onClick={handleEditing}
          >
            {editIcon}
            <span>Edit</span>
          </button>
        )}
      </div>
    </div>
  );
}
