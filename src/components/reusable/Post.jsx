import { useState } from "react";
import data from "../../data.js";

import ReplyPost from "./ReplyPost.jsx";
import AuthorReply from "./AuthorReply.jsx";
import UsersReply from "./UsersReply.jsx";
import TextAreaReply from "./TextAreaReply.jsx";

export default function Post({
  id,
  avatar,
  user,
  posted,
  text,
  likes,
  replay,
  handleDelete,
}) {
  const [isReplyed, setIsReplyed] = useState(false);
  const [initialVal, setInitialVal] = useState(`@${user}, `);
  const [replies, setReplies] = useState(replay || []);

  const handleReplyClick = () => setIsReplyed(!isReplyed);
  const handleChange = (e) => setInitialVal(e.target.value);

  const addReply = (message, replyingToUser) => {
    const cleanMessage = message.replace(/^@\S+,?\s*/, "").trim();
    if (!cleanMessage) return;

    const newReply = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      avatar: "./avatars/image-juliusomo.png",
      user: "juliusomo",
      posted: "Just now",
      replayto: replyingToUser,
      text: cleanMessage,
      likes: [],
    };

    setReplies((prev) => [...prev, newReply]);
  };

  const handleSubmitReply = () => {
    (addReply(initialVal, user),
      setInitialVal(`@${user}, `),
      setIsReplyed(false));
  };

  const handleDeletReply = (id) => {
    console.log(data);
    setReplies((prev) => prev.filter((replie) => replie.id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      {user === "juliusomo" ? (
        <AuthorReply
          id={id}
          avatar={avatar}
          user={user}
          posted={posted}
          text={text}
          likes={likes}
          onDelete={handleDelete}
        />
      ) : (
        <UsersReply
          id={id}
          avatar={avatar}
          user={user}
          posted={posted}
          text={text}
          likes={likes}
          postReply={handleReplyClick}
          isReplyed={isReplyed}
        />
      )}

      {replies.length > 0 && (
        <div className="pl-4 md:pl-10 md:ml-10.5 flex flex-col gap-4 border-l-2 border-grey-100">
          {replies.map((reply) => (
            <ReplyPost
              key={reply.id}
              {...reply}
              onReply={addReply}
              onDelete={handleDeletReply}
            />
          ))}
        </div>
      )}

      {isReplyed && (
        <TextAreaReply
          initialVal={initialVal}
          handleChange={handleChange}
          handleSubmitReply={handleSubmitReply}
        />
      )}
    </div>
  );
}
