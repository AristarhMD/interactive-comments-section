import data from "../data.js";
import Post from "./reusable/Post.jsx";
import AddComment from "./AddComment.jsx";
import DeleteConfirmation from "./reusable/DeleteConfirmation.jsx";

import { useState } from "react";

function App() {
  const [comments, setComments] = useState(data);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [idForDeletion, setIdForDeletion] = useState(null);

  const handleDeletePost = (id) => {
    setIdForDeletion(id);
    setConfirmDelete(true);
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
      {confirmDelete && (
        <DeleteConfirmation
          idForDeletion={idForDeletion}
          settingDeletId={setIdForDeletion}
          settingDeletConfirmation={setConfirmDelete}
          updateComments={setComments}
        />
      )}
    </main>
  );
}

export default App;
