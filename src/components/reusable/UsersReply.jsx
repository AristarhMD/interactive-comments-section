import { replyIcon, deleteIcon } from "../Icons.jsx";
import LikesBtn from "./LikesBtn.jsx";

export default function UsersReply({
  id,
  avatar,
  user,
  posted,
  replayto,
  text,
  likes,
  postReply,
  isReplyed,
}) {
  const handleReplyClick = () => {
    postReply();
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
        </div>
        <p className="preset-2-r text-grey-500">{posted}</p>
      </div>

      <p className="preset-2-r text-grey-500 md:col-start-2 md:col-span-2 md:row-start-2">
        <span className="text-purple-600 font-bold">{replayto} </span>
        {text}
      </p>

      <LikesBtn>{likes}</LikesBtn>
      {isReplyed ? (
        <button
          className="group ml-auto cursor-pointer flex items-center gap-2 preset-2-m text-pink-400 hover:text-pink-200 col-start-1 md:col-start-3 row-start-3 md:row-start-1"
          onClick={handleReplyClick}
        >
          {deleteIcon} <span>Cancel</span>
        </button>
      ) : (
        <button
          className="group ml-auto cursor-pointer flex items-center gap-2 preset-2-m text-purple-600 hover:text-purple-200 col-start-1 md:col-start-3 row-start-3 md:row-start-1"
          onClick={handleReplyClick}
        >
          {replyIcon} <span>Reply</span>
        </button>
      )}
    </div>
  );
}
