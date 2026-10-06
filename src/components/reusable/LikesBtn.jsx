import { useState } from "react";
import { plusIcon, minusIcon } from "../Icons.jsx";

export default function LikesBtn({ children }) {
  const [usersLiked, setUsersLiked] = useState(children);
  const [numberOfLikes, setNumberOfLikes] = useState(children.length);
  const [isLiked, setIsLiked] = useState(0);
  // console.log(children);

  const handlePlusLike = () => {
    if (usersLiked.includes("juliusomo")) {
      return;
    } else {
      setUsersLiked((prev) => [...prev, "juliusomo"]);
      setNumberOfLikes((prev) => prev + 1);
      setIsLiked(1);
    }
  };

  const handleMinusLike = () => {
    if (!usersLiked.includes("juliusomo")) {
      return;
    } else {
      setUsersLiked((prev) => prev.filter((user) => user !== "juliusomo"));
      setNumberOfLikes((prev) => prev - 1);
      setIsLiked(0);
    }
  };

  return (
    <div className="col-start-1 row-start-3 mr-auto md:w-10 md:row-start-1 md:row-span-2 max-w-25 bg-grey-50 p-2 md:py-4 md:px-1 rounded-[10px] self-start flex md:flex-col gap-4 justify-center items-center">
      <button
        className={`group  ${isLiked ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handlePlusLike}
      >
        {plusIcon}
      </button>
      <span className="text-purple-600 preset-2-m">{numberOfLikes}</span>
      <button
        className={`group  ${!isLiked ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handleMinusLike}
      >
        {minusIcon}
      </button>
    </div>
  );
}
