import { useState } from "react";

export default function AddComment({ addComment }) {
  const [commentContent, setCommentContent] = useState("");

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const createNewComment = () => {
    const newReply = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      avatar: "./avatars/image-juliusomo.png",
      user: "juliusomo",
      posted: "Just now",
      text: commentContent,
      likes: [],
    };

    addComment(newReply);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-[repeat(2, min-content)]  md:grid-cols-[max-content_1fr_min-content] grid-rows-[repeat(2,min-content)] md:grid-rows-1 gap-y-4 md:gap-y-0 md:gap-x-4 md:items-start">
      <textarea
        className="col-start-1 col-span-2 py-2 px-4 border border-inside border-grey-100 rounded-lg h-24 resize-none preset-2-r text-grey-800 placeholder:text-grey-500 md:col-start-2 md:col-span-1 md:row-start-1 "
        placeholder="Add a comment…"
        defaultValue={commentContent}
        onChange={handleCommentChange}
      />

      <img
        className="size-8 col-start-1 self-center md:self-start md:col-start-1 md:row-start-1"
        src="./avatars/image-juliusomo.png"
      />

      <button
        className="py-3 px-8 col-start-2 preset-2-m justify-self-end bg-purple-600 hover:bg-purple-200 text-white rounded-lg cursor-pointer md:col-start-3 md:row-start-1"
        onClick={createNewComment}
      >
        SEND
      </button>
    </div>
  );
}
