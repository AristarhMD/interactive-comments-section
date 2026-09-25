import { useState } from "react";

import LikesBtn from "./LikesBtn.jsx";
import ReplyPost from "./ReplyPost.jsx";

export default function Post({ avatar, user, posted, text, likes, replay }) {
  const [isReplyed, setIsReplyed] = useState(false);
  const [initialVal, setInitialVal] = useState(`@${user},`)
  const [replies, setReplies] = useState(replay || [])

  const handleReplyClick = () => setIsReplyed(!isReplyed);
  const handeChange = (e) => setInitialVal(e.target.value);

  const addReply = (message, replyingToUser) => {
    const cleanMessage = message.replace(/^@\S+,?\s*/, "").trim();
    if(!cleanMessage) return

    const newReply = {
      id:crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      avatar:"./avatars/image-juliusomo.png",
      user:"juliusomo",
      posted:"Just now",
      text:cleanMessage,
      likes:0,
    }

    setReplies((prev)=>[...prev, newReply])
  }

  const handleSubmitReply = () =>{
    addReply(initialVal, user),
    setInitialVal(`@${user}`),
    setIsReplyed(false)
  }

  const replyIcon = (
    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-[#5357B6] group-active:fill-[#c5c6ef] group-hover:fill-[#c5c6ef]"
        d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
      />
    </svg>
  );

  const deleteIcon = (
    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-[#ED6368] group-active:fill-[#ffb8bb] group-hover:fill-[#ffb8bb]"
        d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
      />
    </svg>
  );

  return (
    <div className="flex flex-col gap-4">
      <article className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-1 md:grid-cols-[max-content_1fr_min-content] grid-rows-[repeat(3,min-content)] md:grid-rows-[repeat(2,min-content)] gap-y-4 md:gap-x-6">
        <div className="flex items-center gap-4 md:col-start-2 md:row-start-1">
          <img
            className="size-8"
            src={avatar}
            alt={`Avatar of the user ${user}`}
          />
          <p className="preset-2-m text-grey-800">{user}</p>
          <p className="preset-2-r text-grey-500">{posted}</p>
        </div>

        <p className="preset-2-r text-grey-500 md:col-start-2 md:col-span-2 md:row-start-2">
          {text}
        </p>

        <LikesBtn>{likes}</LikesBtn>
        <button
          className="col-start-1 md:col-start-3 row-start-3 md:row-start-1 ml-auto group cursor-pointer flex items-center gap-2 preset-2-m text-purple-600 hover:text-purple-200"
          onClick={handleReplyClick}
        >
          {replyIcon} <span>Reply</span>
        </button>
      </article>

      {replies.length > 0 && (
        <div className="pl-4 md:pl-10 md:ml-10.5 flex flex-col gap-4 border-l-2 border-grey-100">
          {replies.map((reply) => (
            <ReplyPost key={reply.id} {...reply} onReply={addReply} />
          ))}
        </div>
      )}

      {isReplyed && (
        <div className="pl-4 md:pl-10 md:ml-10.5 flex flex-col gap-4 border-l-2 border-grey-100">
          <div className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-[repeat(2, min-content)]  md:grid-cols-[max-content_1fr_min-content] grid-rows-[repeat(2,min-content)] md:grid-rows-1 gap-y-4 md:gap-y-0 md:gap-x-4 md:items-start">
            <textarea
              className="col-start-1 col-span-2 py-2 px-4 border border-inside border-grey-100 rounded-lg h-24 resize-none preset-2-r text-grey-800 placeholder:text-grey-500 md:col-start-2 md:col-span-1 md:row-start-1 "
              placeholder="Add a comment…"
              defaultValue={initialVal}
              onChange={handeChange}
            />

            <img
              className="size-8 col-start-1 self-center md:self-start md:col-start-1 md:row-start-1"
              src="./avatars/image-juliusomo.png"
            />

            <button className="py-3 px-8 col-start-2 preset-2-m justify-self-end bg-purple-600 hover:bg-purple-200 text-white rounded-lg cursor-pointer md:col-start-3 md:row-start-1" onClick={handleSubmitReply}>
              REPLY
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
