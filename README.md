# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Running locally](#running-locally)
  - [Project structure](#project-structure)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments

### Features

- **Read** – the initial comments and nested replies are loaded from a local `data.js` file.
- **Create** – add a new top-level comment with the **SEND** button, or reply to any comment or reply from another user. The reply box opens pre-filled with an `@username` mention, which is then rendered as a highlighted label above the reply text.
- **Update** – edit your own comments and replies inline (**Edit** → **Save**).
- **Delete** – remove your own comments and replies, with a confirmation modal ("No, cancel" / "Yes, delete").
- **Vote** – upvote or downvote any comment. Each user can only vote once: `+` adds your vote, `−` takes it back.
- **"you" badge** – content written by the current user (`juliusomo`) gets a badge and Edit/Delete actions instead of Reply.
- **Responsive** – stacked card layout on mobile; vote counter on the left and actions on the right from the `md` breakpoint up.
- **Hover states** – buttons and SVG icons change colour on hover/active.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/AristarhMD/interactive-comments-section)
- Live Site URL: [Add live site URL here](https://comment-section-vn.netlify.app/)

### Running locally

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# create a production build in dist/
npm run build

# preview the production build
npm run serve
```

> **Note:** the user avatars are referenced as `./avatars/image-<username>.png`. Make sure the avatar images from the Frontend Mentor starter files are placed in `public/avatars/` so they load.

### Project structure

```
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── src
    ├── main.jsx                      # App entry point
    ├── style.css                     # Tailwind import, theme tokens, type presets
    ├── data.js                       # Initial comments and replies
    └── components
        ├── App.jsx                   # Comment list + delete-modal state
        ├── AddComment.jsx            # Composer for new top-level comments
        ├── Icons.jsx                 # Inline SVG icons (reply, edit, delete, plus, minus)
        └── reusable
            ├── Post.jsx              # A comment together with its replies thread
            ├── ReplyPost.jsx         # A reply (which can itself be replied to)
            ├── UsersReply.jsx        # Card for other users' content (Reply / Cancel)
            ├── AuthorReply.jsx       # Card for the current user's content (Edit / Delete)
            ├── TextAreaReply.jsx     # Inline reply composer
            ├── LikesBtn.jsx          # Upvote / downvote counter
            └── DeleteConfirmation.jsx# Delete confirmation modal
```

## My process

### Built with

- Semantic HTML5 markup
- [React 19](https://react.dev/) - JS library (function components and `useState`)
- [Vite](https://vite.dev/) - Dev server and build tool
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`) - Utility-first styling with design tokens defined in CSS
- CSS Grid
- Flexbox
- Mobile-first workflow
- [Rubik](https://fonts.google.com/specimen/Rubik) - Typeface from Google Fonts

### What I learned

**Design tokens and custom utilities in Tailwind v4.** Instead of a `tailwind.config.js`, the theme lives in CSS. The colours and typography presets from the design are defined once and then used as regular utility classes everywhere:

```css
@theme {
  --font-sans: "Rubik", sans-serif;
  --color-purple-600: #5357b6;
  --color-pink-400: #ed6368;
}

@utility preset-2-m {
  @apply font-medium text-base leading-[150%];
}
```

**One layout, two breakpoints, with CSS Grid.** The comment cards place the avatar/header, text, vote counter and action buttons into explicit grid cells. On mobile the vote counter and actions share the bottom row; from `md` up they move to the left column and top-right corner – the same markup, just different grid placement:

```jsx
<div className="grid grid-cols-1 md:grid-cols-[max-content_1fr_min-content] ...">
  <LikesBtn>{likes}</LikesBtn>
  <button className="col-start-1 row-start-3 md:col-start-3 md:row-start-1 ml-auto">
    Reply
  </button>
</div>
```

**Reusing one modal for different pieces of state.** `DeleteConfirmation` receives the state setter of whichever list the comment lives in (the top-level list in `App`, or a thread's replies in `Post`) and filters the item out by id, so the same component handles both cases:

```jsx
const handleDelete = () => {
  updateComments((prev) => prev.filter((c) => c.id !== idForDeletion));
  settingDeletId(null);
  settingDeletConfirmation(false);
};
```

**Modelling "one vote per user".** Votes are stored as an array of the users who voted, so voting is a simple "is the current user in the array?" check rather than a bare counter that could be incremented forever:

```jsx
const handlePlusLike = () => {
  if (usersLiked.includes("juliusomo")) return;
  setUsersLiked((prev) => [...prev, "juliusomo"]);
  setNumberOfLikes((prev) => prev + 1);
  setIsLiked(1);
};
```

**Splitting UI by author.** `Post` and `ReplyPost` decide between `AuthorReply` (own content: Edit/Delete, "you" badge) and `UsersReply` (someone else's: Reply), which keeps each card component small and focused.

### Continued development

- **Persist state** with `localStorage` so comments, replies and votes survive a page refresh (the challenge's bonus task). Right now everything lives in React state only.
- **Ordering** – sort top-level comments by score and nested replies by time added.
- **Dynamic timestamps** – replace hard-coded strings like "2 weeks ago" with real timestamps and a "time since" formatter.
- **Recursive replies** – `Post` → `ReplyPost` is currently a fixed two-level structure. Making the reply component render itself would support any nesting depth and let me remove duplicated logic between the two components.
- **Reply votes** – replies created from inside a reply are created with a numeric `likes` value instead of an array, so their vote counter doesn't work yet. Those replies also skip the delete confirmation modal.
- **Form polish** – prevent empty top-level comments and clear the textarea after sending.
- **State management** – lift the comment tree into a reducer/context so edits, votes and deletes don't depend on state scattered across components.
- **Accessibility** – add `aria-label`s to the vote buttons, `alt` text for the composer avatar, and focus handling / <kbd>Esc</kbd> to close for the delete modal.
- **Cleanup** – rename the `replay` / `replayto` data fields to `replies` / `replyTo`, remove the redundant Tailwind CDN `<script>` in `index.html` (Tailwind is already bundled through the Vite plugin), and add `eslint` plus its plugins to `devDependencies` with a `lint` script.

### Useful resources

- [React documentation](https://react.dev/) - Reference for hooks and updating state immutably.
- [Tailwind CSS documentation](https://tailwindcss.com/docs) - Covers the v4 CSS-first setup with `@theme` and `@utility`.
- [Vite guide](https://vite.dev/guide/) - Project setup, the `public/` folder and building for production.

## Author

- Frontend Mentor - [@AristarhMD](https://github.com/AristarhMD)
- GitHub - [@AristarhMD](https://www.frontendmentor.io/profile/AristarhMD)
- LinkedIn - [@Victor] (https://www.linkedin.com/in/victor-nani-4b7a13179/)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io) for the challenge, the design and the starter assets.
