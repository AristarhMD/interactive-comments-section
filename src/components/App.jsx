import data from "../data.js";
import Post from "./reusable/Post.jsx";

function App() {
  return (
    <main>
      <section className="mx-auto w-[91.46%] py-8 flex flex-col gap-4">
        {data.map((post, idx) => (
          <Post key={idx} {...post} />
        ))}
      </section>

      <section className="mx-auto w-[91.46%]">
        <div className="bg-white p-4 rounded-lg grid grid-cols-[repeat(2, min-content)] grid-rows-[repeat(2,min-content)] gap-y-4">
          <textarea
            className="col-start-1 col-span-2 py-2 px-4 border border-inside border-grey-100 rounded-lg h-24 resize-none preset-2-r text-grey-800 placeholder:text-grey-500"
            placeholder="Add a comment…"
          />

          <img
            className="size-8 col-start-1 self-center"
            src="./avatars/image-juliusomo.png"
          />

          <button className="py-3 px-8 col-start-2 preset-2-m justify-self-end bg-purple-600 hover:bg-purple-200 text-white rounded-lg cursor-pointer">
            SEND
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
