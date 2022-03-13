exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "A First Post",
        description: "Dummy Description",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  res.status(201).json();
};
