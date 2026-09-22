import data from "../data.js"
import Post from "./reusable/Post.jsx"

function App() {
  return (
    <main>
      <section className="mx-auto w-[91.46%] py-8 flex flex-col gap-4">
        {data.map((post, idx) => <Post key={idx} {...post}/>)}
      </section>
    </main>
  )
}

export default App
