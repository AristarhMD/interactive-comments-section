 const data = [
  {
    avatar: "./avatars/image-amyrobson.png",
    user: "amyrobson",
    posted: "1 month ago",
    text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
    likes: 12,
  },

  {
    avatar: "./avatars/image-maxblagun.png",
    user: "maxblagun",
    posted: "2 weeks ago",
    text: "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    likes: 5,
    replay: [
      {
        avatar: "./avatars/image-ramsesmiron.png",
        user: "ramsesmiron",
        posted: "1 week ago",
        replayto: "@maxblagun",
        text: "If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
        likes: 4,
      },
      {
        avatar: "./avatars/image-juliusomo.png",
        user: "juliusomo",
        posted: "2 days ago",
        replayto: "@ramsesmiron",
        text: "I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        likes: 2,
      },
    ],
  },
];

export default data