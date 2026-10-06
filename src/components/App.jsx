import data from "../data.js";
import Post from "./reusable/Post.jsx";
import AddComment from "./AddComment.jsx";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState(data);
  const handleDeletePost = (id) => {
    setComments((prev) => prev.filter((prev) => prev.id !== id));
  };

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <main className="mx-auto md:max-w-182.5 md:min-w-171">
      <section className="mx-auto w-[91.46%] md:w-full py-8 flex flex-col gap-4">
        {comments.map((post) => (
          <Post key={post.id} {...post} handleDelete={handleDeletePost} />
        ))}
      </section>

      <section className="mx-auto w-[91.46%] md:w-full">
        <AddComment addComment={handleAddComment} />
      </section>
    </main>
  );
}

export default App;
