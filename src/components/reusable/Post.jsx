import LikesBtn from "./LikesBtn.jsx";

export default function Post({ avatar, user, posted, text, likes, replay }) {
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
    <section className="flex flex-col gap-4">
      <article className="bg-white p-4 rounded-lg grid grid-cols-1 grid-rows-[repeat(3,min-content)] gap-y-4">
        <div className="flex items-center gap-4">
          <img
            className="size-8"
            src={avatar}
            alt={`Avatar of the user ${user}`}
          />
          <p className="preset-2-m text-grey-800">{user}</p>
          <p className="preset-2-r text-grey-500">{posted}</p>
        </div>

        <p className="preset-2-r text-grey-500">{text}</p>

        <div className="flex items-center justify-between">
          <LikesBtn>{likes}</LikesBtn>
          <button className="group cursor-pointer flex items-center gap-2 preset-2-m text-purple-600 hover:text-purple-200">
            {replyIcon} <span>Reply</span>
          </button>
        </div>
      </article>

      {replay && (
        <div className="pl-4 flex flex-col gap-4 border-l-2 border-grey-100">
          {replay.map((replies, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg grid grid-cols-1 grid-rows-[repeat(3,min-content)] gap-y-4"
            >
              <div className="flex items-center gap-4">
                <img
                  className="size-8"
                  src={replies.avatar}
                  alt={`Avatar of the user ${user}`}
                />
                <p className="preset-2-m text-grey-800">{replies.user}</p>
                <p className="preset-2-r text-grey-500">{replies.posted}</p>
              </div>

              <p className="preset-2-r text-grey-500">
                {replies.replayto && (
                  <span className="text-purple-600 font-bold">
                    {replies.replayto}
                  </span>
                )}{" "}
                {replies.text}
              </p>

              <div className="flex items-center justify-between">
                <LikesBtn>{replies.likes}</LikesBtn>
                {replies.user === "juliusomo" ? (
                  <div className="preset-2-m flex items-center gap-4">
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
                  <button className="group cursor-pointer flex items-center gap-2 preset-2-m text-purple-600 hover:text-purple-200">
                    {replyIcon} <span>Reply</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
