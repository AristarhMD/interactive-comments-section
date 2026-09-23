import LikesBtn from "./LikesBtn.jsx";


export default function ReplyPost({avatar, user, posted, replayto, text, likes}) {
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

  const editIcon = (
    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-[#5357B6] group-active:fill-[#c5c6ef] group-hover:fill-[#c5c6ef]"
        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
      />
    </svg>
  );

  return (
    <div
      className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-1 md:grid-cols-[max-content_1fr_min-content] grid-rows-[repeat(3,min-content)] md:grid-rows-[repeat(2,min-content)] gap-y-4 md:gap-x-6"
    >
      <div className="flex items-center gap-4 md:col-start-2 md:row-start-1">
        <img
          className="size-8"
          src={avatar}
          alt={`Avatar of the user ${user}`}
        />
        <div className="flex items-center gap-2">
          <p className="preset-2-m text-grey-800">{user}</p>
          {user === "juliusomo" ? <span className="preset-3 text-white py-px px-1.5 bg-purple-600 rounded-xs">you</span> : ""}
        </div>
        <p className="preset-2-r text-grey-500">{posted}</p>
      </div>

      <p className="preset-2-r text-grey-500 md:col-start-2 md:col-span-2 md:row-start-2">
          <span className="text-purple-600 font-bold">{replayto} </span>{text}
      </p>

        <LikesBtn>{likes}</LikesBtn>
        {user === "juliusomo" ? (
          <div className="preset-2-m flex items-center gap-4 col-start-1 row-start-3 md:col-start-3 md:row-start-1 ml-auto">
            <button className="group cursor-pointer flex items-center gap-2 text-pink-400 hover:text-pink-200">
              {deleteIcon}
              <span>Delete</span>
            </button>
            <button className="group cursor-pointer flex items-center gap-2 text-purple-600 hover:text-purple-200">
              {editIcon}
              <span>Edit</span>
            </button>
          </div>
        ) : (
          <button className="group ml-auto cursor-pointer flex items-center gap-2 preset-2-m text-purple-600 hover:text-purple-200 col-start-1 md:col-start-3 row-start-3 md:row-start-1">
            {replyIcon} <span>Reply</span>
          </button>
        )}
    </div>
  );
}
