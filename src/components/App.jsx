import data from "../data.js";
import Post from "./reusable/Post.jsx";

function App() {
  return (
    <main className="mx-auto md:max-w-182.5 md:min-w-171">
      <section className="mx-auto w-[91.46%] md:w-full py-8 flex flex-col gap-4">
        {data.map((post, idx) => (
          <Post key={idx} {...post} />
        ))}
      </section>

      <section className="mx-auto w-[91.46%] md:w-full">
        <div className="bg-white p-4 md:p-6 rounded-lg grid grid-cols-[repeat(2, min-content)]  md:grid-cols-[max-content_1fr_min-content] grid-rows-[repeat(2,min-content)] md:grid-rows-1 gap-y-4 md:gap-y-0 md:gap-x-4 md:items-start">
          <textarea
            className="col-start-1 col-span-2 py-2 px-4 border border-inside border-grey-100 rounded-lg h-24 resize-none preset-2-r text-grey-800 placeholder:text-grey-500 md:col-start-2 md:col-span-1 md:row-start-1 "
            placeholder="Add a comment…"
          />

          <img
            className="size-8 col-start-1 self-center md:self-start md:col-start-1 md:row-start-1"
            src="./avatars/image-juliusomo.png"
          />

          <button className="py-3 px-8 col-start-2 preset-2-m justify-self-end bg-purple-600 hover:bg-purple-200 text-white rounded-lg cursor-pointer md:col-start-3 md:row-start-1">
            SEND
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
