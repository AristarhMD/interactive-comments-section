export default function DeleteConfirmation() {
  return (
    <div className="fixed bg-black/50 inset-0 flex items-center justify-center">
      <div className=" w-[91.46%] max-w-100 h-56 md:h-63 flex flex-col items-start justify-center gap-4 md:gap-6 bg-white rounded-lg text-left py-5.5 md:py-7 px-6.25 md:px-7">
        <p className="preset-1 text-grey-800">Delete comment</p>
        <p className="preset-2-r text-grey-500">
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className="flex justify-between gap-4 mx-auto">
          <button className="cursor-pointer bg-grey-500 rounded-lg preset-2-m text-white px-5.5 py-3 hover:opacity-50">
            NO, CANCEL
          </button>
          <button className="cursor-pointer bg-pink-400 rounded-lg preset-2-m text-white px-5.5 py-3 hover:opacity-50">
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
