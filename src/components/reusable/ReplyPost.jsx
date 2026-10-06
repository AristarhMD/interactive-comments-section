import UsersReply from "./UsersReply.jsx";
import AuthorReply from "./AuthorReply.jsx";
import TextAreaReply from "./TextAreaReply.jsx";
import { useState } from "react";

export default function ReplyPost({
  id,
  avatar,
  user,
  posted,
  replayto,
  text,
  likes,
  onDelete,
}) {
  const [isReplyed, setIsReplyed] = useState(false);
  const [initialVal, setInitialVal] = useState(`@${user}, `);
  const [replies, setReplies] = useState([]);

  const handleReplyClick = () => {
    setIsReplyed((prev) => !prev);
  };
  const handleChange = (e) => setInitialVal(e.target.value);

  const handleSubmitReply = () => {
    (addReply(initialVal, user),
      setInitialVal(`@${user}, `),
      setIsReplyed(false));
  };

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
      likes: 0,
    };

    setReplies((prev) => [...prev, newReply]);
  };

  const nestedOnDelete = (id) => {
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
          replayto={replayto}
          text={text}
          likes={likes}
          onDelete={onDelete}
        />
      ) : (
        <UsersReply
          id={id}
          avatar={avatar}
          user={user}
          posted={posted}
          replayto={replayto}
          text={text}
          likes={likes}
          postReply={handleReplyClick}
          isReplyed={isReplyed}
        />
      )}

      {replies.length > 0 && (
        <div className="pl-4 md:pl-10 md:ml-10.5 flex flex-col gap-4 border-l-2 border-grey-100">
          {replies.map((reply) =>
            reply.user === "juliusomo" ? (
              <AuthorReply
                id={reply.id}
                avatar={reply.avatar}
                user={reply.user}
                posted={reply.posted}
                replayto={reply.replayto}
                text={reply.text}
                likes={reply.likes}
                onDelete={nestedOnDelete}
              />
            ) : (
              <UsersReply
                id={reply.id}
                avatar={reply.avatar}
                user={reply.user}
                posted={reply.posted}
                replayto={reply.replayto}
                text={reply.text}
                likes={reply.likes}
                postReply={handleReplyClick}
              />
            ),
          )}
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
